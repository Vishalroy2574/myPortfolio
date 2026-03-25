import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass py-3 shadow-lg shadow-background/20" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/25 transition-shadow">
            <span className="text-background font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold hidden sm:block">
            <span className="text-foreground">Vishal</span>
            <span className="gradient-text">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
          <Button variant="glow" size="sm" className="ml-4" asChild>
            <a href="/Vishal_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Sparkles className="w-4 h-4 mr-1" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg glass"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass mt-2 mx-4 rounded-2xl p-4 border border-border/50">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === link.href.substring(1)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-2"
                >
                  <Button variant="glow" className="w-full" asChild>
                    <a href="/Vishal_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Resume
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
