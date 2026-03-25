import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    emoji: "💻",
    skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Development",
    emoji: "🎨",
    skills: ["React.js", "Node.js", "Express.js", "RESTful APIs"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases & Tools",
    emoji: "🗄️",
    skills: [
      "MongoDB",
      "Firebase",
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Core Concepts",
    emoji: "🧠",
    skills: [
      "OOPs",
      "DBMS",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const techLogos = [
  { name: "Java", emoji: "☕" },
  { name: "React.js", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Express.js", emoji: "⚡" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "SQL", emoji: "💾" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "HTML", emoji: "📄" },
  { name: "CSS", emoji: "🎨" },
  { name: "Firebase", emoji: "🔥" },
  { name: "Git", emoji: "📦" }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
            <Wrench className="w-4 h-4" />
            <span>Tech Stack</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-hover rounded-3xl p-6 md:p-8 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                  {category.emoji}
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-medium bg-secondary/80 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden py-8"
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-6 animate-marquee hover:pause-animation">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 glass rounded-2xl flex items-center gap-3 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default group"
              >
                <span className="text-2xl">{tech.emoji}</span>
                <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
