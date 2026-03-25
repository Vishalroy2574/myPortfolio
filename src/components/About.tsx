import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams with modern dev practices",
    gradient: "from-blue-500 to-cyan-500",
  },
];


const education = [
  {
    year: "2022–2026",
    degree: "Bachelor of Technology in IT",
    institute: "Noida Institute of Engineering and Technology (NIET)",
  },
  {
    year: "2021",
    degree: "Intermediate",
    institute: "Ugan Triveni College, Begusarai, Bihar",
  },
  {
    year: "2019",
    degree: "High School",
    institute: "Jagriti Public School, Samastipur, Bihar",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            <Target className="w-4 h-4" />
            <span>About Me</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Crafting Digital <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
            that make a difference
          </p>
        </motion.div>


        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-12"
        >
          <div className="section-badge mb-6">
            <Target className="w-4 h-4" />
            <span>Education</span>
          </div>
          <div>
            {/* Header Row */}
            <div className="hidden md:grid grid-cols-3 gap-4 py-4 border-b border-border mb-4">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Year</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Degree/Exam</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Institute</div>
            </div>

            {/* Education Entries */}
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.05 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-border/50 last:border-b-0 hover:bg-muted/20 transition-colors px-4 rounded-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="text-sm text-muted-foreground uppercase tracking-wide mb-1 md:hidden">Year</span>
                    <span className="text-lg font-bold text-primary">{edu.year}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="text-sm text-muted-foreground uppercase tracking-wide mb-1 md:hidden">Degree/Exam</span>
                    <span className="text-lg font-semibold">{edu.degree}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center">
                    <span className="text-sm text-muted-foreground uppercase tracking-wide mb-1 md:hidden">Institute</span>
                    <span className="text-lg text-muted-foreground">{edu.institute}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-hover rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold">Who am I?</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-primary font-semibold">React Developer</span> with a strong foundation in modern web development.
                    Having worked hands-on with technologies like React.js, Node.js, and MongoDB, I love turning complex problems into simple, beautiful, and intuitive interfaces.
                  </p>
                  <p>
                    I'm currently pursuing my B.Tech in Information Technology and enjoying every bit of the journey. 
                    I thrive in collaborative environments and always strive to deliver high-quality, impactful digital solutions.
                  </p>
                  <p>
                    When I'm not coding or debugging, you'll find me exploring new technologies, participating in web projects, or continuously learning through courses and certifications.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map(
                    (trait, index) => (
                      <motion.span
                        key={trait}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors"
                      >
                        {trait}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="interactive-card group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <item.icon className="text-white" size={26} />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
