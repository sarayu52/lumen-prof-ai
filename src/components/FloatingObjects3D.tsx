import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Box, Torus, Octahedron, Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingObjectProps {
  position: [number, number, number];
  type: "sphere" | "box" | "torus" | "octahedron";
  color: string;
  scale: number;
  speed: number;
}

function FloatingObject({ position, type, color, scale, speed }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [x, y, z] = position;
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      
      // Gentle floating motion
      meshRef.current.position.y = y + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.x = x + Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  const renderGeometry = () => {
    const material = (
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.8}
      />
    );

    switch (type) {
      case "sphere":
        return <Sphere ref={meshRef} args={[scale, 16, 16]} position={[x, y, z]}>{material}</Sphere>;
      case "box":
        return <Box ref={meshRef} args={[scale, scale, scale]} position={[x, y, z]}>{material}</Box>;
      case "torus":
        return <Torus ref={meshRef} args={[scale, scale * 0.3, 8, 16]} position={[x, y, z]}>{material}</Torus>;
      case "octahedron":
        return <Octahedron ref={meshRef} args={[scale]} position={[x, y, z]}>{material}</Octahedron>;
      default:
        return null;
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      {renderGeometry()}
    </Float>
  );
}

function Scene() {
  const objects = useMemo(() => {
    const objectTypes: Array<"sphere" | "box" | "torus" | "octahedron"> = ["sphere", "box", "torus", "octahedron"];
    const colors = ["#00d4ff", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#3b82f6"];
    
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30 - 10
      ] as [number, number, number],
      type: objectTypes[Math.floor(Math.random() * objectTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: 0.3 + Math.random() * 0.7,
      speed: 0.5 + Math.random() * 1.5
    }));
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {objects.map((obj) => (
        <FloatingObject
          key={obj.id}
          position={obj.position}
          type={obj.type}
          color={obj.color}
          scale={obj.scale}
          speed={obj.speed}
        />
      ))}
    </>
  );
}

export function FloatingObjects3D() {
  return (
    <div className="w-full h-full opacity-30">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  );
}