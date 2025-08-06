import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in Python, Java, Django, Flask, and modern web frameworks'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Advanced SQL skills with experience in database optimization and design'
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'Expertise in Heroku, Netlify, and cPanel for seamless deployment'
    },
    {
      icon: Cpu,
      title: 'System Engineering',
      description: 'Building robust, scalable systems at TCS with focus on innovation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate System Engineer with a fresh perspective and strong foundation in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated System Engineer at Tata Consultancy Services, where I channel my passion for 
              technology into building innovative solutions. With a strong foundation in computer science and 
              hands-on experience as a Python Developer, I bring fresh ideas and modern approaches to complex challenges.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began at Maharana Pratap Group of Institutions, where I earned my BTech in Computer Science. 
              Since then, I've been committed to continuous learning and staying at the forefront of technological advancement, 
              specializing in Python, Java, web development, and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Python', 'Java', 'Django', 'Flask', 'SQL', 'JavaScript', 'React', 'Cloud Platforms'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass-card text-sm font-medium"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;