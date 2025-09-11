import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text, Float, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

interface AIProfessorProps {
  isActive: boolean;
  isSpeaking: boolean;
  onToggleMic: () => void;
  onToggleSound: () => void;
  micEnabled: boolean;
  soundEnabled: boolean;
}

function Professor3DModel({ isSpeaking }: { isSpeaking: boolean }) {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      const scale = isSpeaking ? 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1 : 1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={meshRef}>
        {/* Professor Avatar - Glowing Sphere with Neural Network Pattern */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00d4ff"
            transparent
            opacity={0.8}
            emissive="#001a33"
            emissiveIntensity={isSpeaking ? 0.5 : 0.2}
          />
        </Sphere>
        
        {/* Inner Core */}
        <Sphere args={[0.7, 16, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            emissive="#4c1d95"
            emissiveIntensity={isSpeaking ? 0.8 : 0.3}
          />
        </Sphere>

        {/* AI Brain Pattern */}
        <Sphere args={[0.4, 8, 8]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.9}
            emissive="#ffffff"
            emissiveIntensity={isSpeaking ? 1 : 0.4}
          />
        </Sphere>

        {/* Floating Text */}
        <Text
          position={[0, -2, 0]}
          fontSize={0.3}
          color="#00d4ff"
          anchorX="center"
          anchorY="middle"
        >
          AI Professor Aria
        </Text>
      </group>
    </Float>
  );
}

export function AIProfessor3D({
  isActive,
  isSpeaking,
  onToggleMic,
  onToggleSound,
  micEnabled,
  soundEnabled,
}: AIProfessorProps) {
  const [currentMessage, setCurrentMessage] = useState(
    "Hello! I'm Professor Aria, your AI learning companion. What would you like to learn today?"
  );

  return (
    <Card className="glass-card border-primary/20 h-[400px] overflow-hidden">
      <div className="relative h-full">
        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="h-full w-full"
        >
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <Professor3DModel isSpeaking={isSpeaking} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>

        {/* Control Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <div className="flex items-center justify-between bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-success animate-pulse' : 'bg-muted'}`} />
              <span className="text-sm text-muted-foreground">
                {isActive ? (isSpeaking ? 'Speaking...' : 'Listening...') : 'Offline'}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant={micEnabled ? "default" : "secondary"}
                onClick={onToggleMic}
                className={micEnabled ? "glow-primary" : ""}
              >
                {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant={soundEnabled ? "default" : "secondary"}
                onClick={onToggleSound}
                className={soundEnabled ? "glow-primary" : ""}
              >
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Message Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 left-4 right-4"
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
            <p className="text-sm text-foreground leading-relaxed">
              {currentMessage}
            </p>
          </div>
        </motion.div>
      </div>
    </Card>
  );
}