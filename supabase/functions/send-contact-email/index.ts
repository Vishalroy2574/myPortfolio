import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject, message: message.substring(0, 100) });

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured");
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; background-color: #0a0a0a; }
          .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #4ecdc4 0%, #a855f7 100%); padding: 30px; text-align: center; }
          .header h1 { color: #fff; margin: 0; font-size: 24px; }
          .content { padding: 30px; color: #e0e0e0; }
          .field { margin-bottom: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #4ecdc4; }
          .field-label { color: #4ecdc4; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
          .field-value { color: #fff; font-size: 16px; }
          .message-box { background: rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-top: 20px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          a { color: #4ecdc4; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 New Contact Message</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">From</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Subject</div>
              <div class="field-value">${subject}</div>
            </div>
            <div class="message-box">
              <div class="field-label">Message</div>
              <div class="field-value" style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            Sent from your portfolio contact form
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Sending email via Resend API...");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["vishalroy2574@gmail.com"],
        subject: `🔔 New Contact: ${subject}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const responseText = await res.text();
    console.log("Resend API response status:", res.status);
    console.log("Resend API response:", responseText);

    if (!res.ok) {
      console.error("Resend API error:", responseText);
      throw new Error(`Failed to send email: ${responseText}`);
    }

    const emailResponse = JSON.parse(responseText);
    console.log("Email sent successfully! ID:", emailResponse.id);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    console.error("Full error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
