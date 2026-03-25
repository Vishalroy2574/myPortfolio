import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projUrbanNivas from "@/assets/UrbanNiwas_pic.jpg.png";
import projNetflix from "@/assets/netflix_clone.jpg";
import projCarScroll from "@/assets/f1_car_racing.png";
import projLocalPro from "@/assets/localpro_image.jpg";

const projects = [
  {
    title: "UrbanNivas– Rental Listing Platform",
    description:
      "A full-stack rental listing platform enabling users to add, edit, and delete property listings with secure authentication. Features admin role-based access for moderation and seamless Cloudinary integration for optimized image uploads.",
    tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "Multer"],
    github: "https://github.com/Vishalroy2574/UrbanNivas",
    live: "https://urbannivas-8.onrender.com/",
    image: projUrbanNivas,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive, visually engaging clone of Netflix showcasing movies and TV shows. Built with React.js using an external TMDB API for data.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "TMDB API"],
    github: "https://github.com/Vishalroy2574/netflix-clone",
    live: "https://redflixbyvishal.netlify.app/",
    image: projNetflix,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Car Scroll Experience",
    description:
      "An interactive scrolling experience built with HTML, CSS, and modern JavaScript, featuring smooth animations and a premium UI layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vishalroy2574/car-scroll",
    live: "https://car-scroll-pi.vercel.app",
    image: projCarScroll,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "LocalPro",
    description:
      "A platform connecting users with local service professionals. Features a clean, minimalist dashboard layout with service cards and a seamless user experience.",
    tech: ["JavaScript", "React.js", "Tailwind CSS"],
    github: "https://github.com/Vishalroy2574/localPro",
    live: "https://local-pro-sage.vercel.app",
    image: projLocalPro,
    color: "from-blue-500 to-indigo-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

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
            transition={{ duration: 0.5 }}
            className="section-badge"
          >
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <motion.div 
                className="flex-1 w-full group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-border/50">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 p-2"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-20">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-left" : "lg:text-left"}`}>
                <motion.span 
                  className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}
                >
                  Featured Project
                </motion.span>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3 flex-wrap">
                  {project.title}
                  <ArrowUpRight className={`w-8 h-8 text-primary transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                </h3>
                
                <div className="glass rounded-2xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/80 text-foreground rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Github size={20} />
                    <span className="font-medium group-hover:underline">View Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium group-hover:underline">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/Vishalroy2574" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
