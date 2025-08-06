import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cloud, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Task Management System',
      description: 'A comprehensive task management platform built with Django and React, featuring real-time collaboration, advanced filtering, and analytics dashboard.',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis'],
      features: ['Real-time updates', 'Role-based access', 'Analytics dashboard', 'REST API'],
      category: 'Full Stack',
      icon: Database,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Cloud-Native Microservices Architecture',
      description: 'Scalable microservices architecture deployed on cloud platforms with automated CI/CD pipeline and monitoring.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'AWS'],
      features: ['Auto-scaling', 'Service mesh', 'Monitoring', 'CI/CD pipeline'],
      category: 'Cloud Architecture',
      icon: Cloud,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'AI-Powered Code Review Assistant',
      description: 'An intelligent code review tool that uses machine learning to identify potential bugs, security vulnerabilities, and code quality issues.',
      technologies: ['Python', 'Flask', 'TensorFlow', 'Docker', 'MongoDB'],
      features: ['ML-powered analysis', 'Security scanning', 'Performance optimization', 'Integration APIs'],
      category: 'Machine Learning',
      icon: Code2,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise across different domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-accent">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors flex-1 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium hover:bg-accent/30 transition-colors flex-1 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;