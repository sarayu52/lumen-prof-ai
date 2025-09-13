import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

interface FloatingHumanProps {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
}

function FloatingHuman({ position, color, scale, speed }: FloatingHumanProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [x, y, z] = position;
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      groupRef.current.position.y = y + Math.sin(state.clock.elapsedTime * speed) * 0.8;
      groupRef.current.position.x = x + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.5;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.3}
      floatIntensity={1.5}
    >
      <group ref={groupRef} position={[x, y, z]} scale={scale}>
        {/* Head */}
        <Sphere position={[0, 1.5, 0]} args={[0.3, 16, 16]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
        
        {/* Body */}
        <Box position={[0, 0.5, 0]} args={[0.4, 1, 0.2]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.7}
            emissive={color}
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.7}
          />
        </Box>
        
        {/* Arms */}
        <Box position={[-0.4, 0.8, 0]} args={[0.6, 0.15, 0.15]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Box>
        <Box position={[0.4, 0.8, 0]} args={[0.6, 0.15, 0.15]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Box>
        
        {/* Legs */}
        <Box position={[-0.15, -0.5, 0]} args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Box>
        <Box position={[0.15, -0.5, 0]} args={[0.15, 0.8, 0.15]}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.6}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Box>
      </group>
    </Float>
  );
}

function Scene() {
  const humans = useMemo(() => {
    const colors = ["#00ccff", "#cc00ff", "#00ff88", "#ffcc00", "#ff6600"];
    
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15 - 5
      ] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.6 + Math.random() * 0.4,
      speed: 0.3 + Math.random() * 0.7
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00ccff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#cc00ff" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#00ff88" />
      
      {humans.map((human) => (
        <FloatingHuman
          key={human.id}
          position={human.position}
          color={human.color}
          scale={human.scale}
          speed={human.speed}
        />
      ))}
    </>
  );
}

export function FloatingHumans3D() {
  return (
    <div className="w-full h-full opacity-40">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}