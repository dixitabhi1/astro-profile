import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="gradient-text">Astha Dixit</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            System Engineer passionate about building innovative solutions and contributing to technological advancement.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary" />
            <span>by Astha Dixit</span>
          </div>
          
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Astha Dixit. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;