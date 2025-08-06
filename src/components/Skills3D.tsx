import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';

const SkillOrb = ({ position, color }: { 
  position: [number, number, number]; 
  color: string; 
}) => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
};

const Skills3DScene = () => {
  const skillPositions = [
    { position: [-2, 2, 0] as [number, number, number], color: '#3776ab' },
    { position: [2, 1.5, -1] as [number, number, number], color: '#f89820' },
    { position: [-1, -1, 2] as [number, number, number], color: '#092e20' },
    { position: [1.5, -1.5, 1] as [number, number, number], color: '#000000' },
    { position: [0, 2.5, -2] as [number, number, number], color: '#00758f' },
    { position: [-2.5, 0, 1] as [number, number, number], color: '#61dafb' },
    { position: [2.5, 0, 0] as [number, number, number], color: '#f7df1e' },
    { position: [0, -2, 0] as [number, number, number], color: '#ff9900' },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#9333ea" intensity={0.5} />
      <pointLight position={[0, 0, 8]} color="#10b981" intensity={0.3} />
      
      {skillPositions.map((skill, index) => (
        <SkillOrb
          key={index}
          position={skill.position}
          color={skill.color}
        />
      ))}
      
      {/* Central connecting lines/wireframe */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[2.5, 2]} />
          <meshStandardMaterial color="#9333ea" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
};

const Skills3D = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'SQL'],
      icon: '💻'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Django', 'Flask', 'React', 'Express'],
      icon: '🚀'
    },
    {
      title: 'Cloud & Deployment',
      skills: ['Heroku', 'Netlify', 'cPanel', 'AWS'],
      icon: '☁️'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'REST APIs', 'Database Design'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my technical expertise through this interactive 3D visualization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <Suspense fallback={null}>
                <Skills3DScene />
              </Suspense>
            </Canvas>
            <div className="absolute bottom-4 left-4 glass-card p-3 text-sm text-muted-foreground">
              Drag to rotate • Auto-rotating
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills3D;