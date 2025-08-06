import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

const FloatingCube = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const TechSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
};

const CentralTorus = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.3, 16, 100]} />
        <meshStandardMaterial color="#9333ea" wireframe />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.5} />
      <pointLight position={[0, 0, 10]} color="#10b981" intensity={0.3} />
      
      <CentralTorus />
      
      <FloatingCube position={[-2.5, 1.5, 0]} color="#10b981" />
      <FloatingCube position={[2.5, 1, -1]} color="#3b82f6" />
      <TechSphere position={[-1.5, -1.5, 2]} color="#f59e0b" />
      <TechSphere position={[1.8, -1.8, 1]} color="#ef4444" />
      <TechSphere position={[0, 2.5, -1]} color="#06b6d4" />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  );
};

const Hero3D = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">System</span>
            <br />
            <span className="text-foreground">Engineer</span>
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building innovative solutions with Python, Java, and cutting-edge web technologies at TCS
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(267 87% 65% / 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="h-[600px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero3D;