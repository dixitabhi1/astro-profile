import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      period: 'June 2025 - Present',
      location: 'New Delhi',
      description: 'Building innovative solutions and working on enterprise-level projects. Collaborating with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Java', 'Python', 'System Design', 'Microservices'],
      type: 'current'
    },
    {
      title: 'Python Developer',
      company: 'Ekak Innovations',
      period: 'May 2024 - June 2025',
      location: 'Kanpur, Uttar Pradesh',
      description: 'Developed scalable web applications using Python and Django. Worked on database optimization and API development for various client projects.',
      technologies: ['Python', 'Django', 'Flask', 'PostgreSQL', 'REST APIs'],
      type: 'previous'
    }
  ];

  const certifications = [
    {
      name: 'TVS Credit E.PI.C Challenge',
      issuer: 'TVS Credit',
      year: '2024'
    },
    {
      name: 'TCS NQT- Cognitive',
      issuer: 'Tata Consultancy Services',
      year: '2024'
    },
    {
      name: 'Certified Advanced SQL Developer',
      issuer: 'Database Certification Board',
      year: '2024'
    },
    {
      name: 'Frontend Development',
      issuer: 'Web Development Institute',
      year: '2023'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My career progression and professional achievements in the tech industry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  className="glass-card p-8 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {exp.type === 'current' && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      Current
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-primary font-semibold mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="border-l-2 border-primary/30 pl-4 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-sm">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-accent">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4 py-2">
                  <h4 className="font-semibold">BTech in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">Maharana Pratap Group of Institutions</p>
                  <p className="text-xs text-accent">2020 - 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;