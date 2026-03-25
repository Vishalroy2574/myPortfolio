import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vishalroy2574@gmail.com",
    href: "mailto:vishalroy2574@gmail.com",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7903533974",
    href: "tel:+917903533974",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Greater Noida, U.P",
    href: "https://maps.google.com/?q=Greater+Noida",
    color: "from-orange-500 to-pink-500",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch("https://formspree.io/f/mpqwbblo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setIsSuccess(true);
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,205,196,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(78,205,196,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                Let's talk about <span className="gradient-text">everything!</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Drop me a message!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group flex items-center gap-4 p-5 glass rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social proof or CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Quick Response</p>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="relative">
              {/* Form card */}
              <div className="glass rounded-3xl p-8 md:p-10 border border-border/50 relative overflow-hidden">
                {/* Decorative corner gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
                
                <div className="relative z-10 space-y-6">
                  {/* Form header */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-2">Send me a message</h4>
                    <p className="text-muted-foreground text-sm">Fill out the form below and I'll get back to you.</p>
                  </div>

                  {/* Name and Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                        Name
                        {focusedField === 'name' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        Email
                        {focusedField === 'email' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                      Subject
                      {focusedField === 'subject' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300 placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      Message
                      {focusedField === 'message' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or just say hi..."
                      rows={5}
                      required
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-background/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || isSuccess}
                      className={`w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 ${
                        isSuccess 
                          ? 'bg-green-500 hover:bg-green-500' 
                          : 'bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(var(--primary)/0.4),0_0_60px_hsl(var(--accent)/0.2)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : isSuccess ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={20} />
                          Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
