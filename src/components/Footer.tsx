import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Vishalroy2574", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/vishal-kumar", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vishalroy2574@gmail.com", label: "Email" },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-foreground">Vishal</span>
                <span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              React Developer crafting beautiful, performant web experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl glass border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
              <p>📧 vishalroy2574@gmail.com</p>
              <p>📱 +91 7903533974</p>
              <p>📍 Greater Noida, U.P</p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl glass hover:border-primary/50 text-muted-foreground hover:text-primary transition-all group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm flex items-center gap-2"
            >
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Vishal Kumar
            </motion.p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
