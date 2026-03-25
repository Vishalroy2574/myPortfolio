import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "React Developer Intern",
    company: "Celebal Technologies",
    location: "Remote, India",
    period: "May 2025 – Jul 2025",
    color: "from-violet-500 to-purple-500",
    points: [
      "Developed and optimized responsive web applications using React.js, JavaScript (ES6+), HTML5, and CSS3.",
      "Built reusable components and integrated REST APIs while performing basic API testing to ensure smooth data communication.",
      "Fixed UI/UX bugs and verified frontend-backend interactions to improve application performance and user experience.",
      "Collaborated in an Agile development environment, participating in sprints to deliver features on time."
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
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
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-[100%] w-px h-8 bg-gradient-to-b from-border to-transparent hidden md:block" />
              )}

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-hover rounded-3xl p-6 md:p-8 relative overflow-hidden"
              >
                {/* Color accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color}`} />
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="text-primary font-semibold">{exp.company}</span>
                          <span className="flex items-center gap-1 text-sm">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm font-medium">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
