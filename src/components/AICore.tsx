"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const ringXRef = useRef<THREE.Mesh>(null);
  const ringYRef = useRef<THREE.Mesh>(null);

  // Animate parts of the core inside the R3F loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (meshRef.current) {
      // Slow rotation + hover sway
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = time * 0.1;
      
      // Interactive mouse response: subtly shift position
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX * 0.3, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY * 0.3, 0.1);

      // Periodic pulsing: pulse scale every few seconds
      const pulse = 1.0 + Math.sin(time * 1.5) * 0.08;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }

    if (shellRef.current) {
      shellRef.current.rotation.y = -time * 0.25;
      shellRef.current.rotation.z = time * 0.05;
      // Mirror mouse influence
      shellRef.current.position.x = THREE.MathUtils.lerp(shellRef.current.position.x, mouseX * 0.2, 0.1);
      shellRef.current.position.y = THREE.MathUtils.lerp(shellRef.current.position.y, mouseY * 0.2, 0.1);
    }

    if (ringXRef.current) {
      ringXRef.current.rotation.x = time * 0.4;
      ringXRef.current.rotation.y = time * 0.2;
    }

    if (ringYRef.current) {
      ringYRef.current.rotation.y = -time * 0.35;
      ringYRef.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group>
      {/* 1. Liquid Energy Center Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#00E5FF"
          roughness={0.1}
          metalness={0.8}
          distort={0.4}
          speed={1.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 2. Outer Wireframe Shell */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshBasicMaterial
          color="#7C4DFF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* 3. Orbiting Gyroscope Ring (X-axis dominant) */}
      <mesh ref={ringXRef}>
        <torusGeometry args={[2.3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
      </mesh>

      {/* 4. Orbiting Gyroscope Ring (Y-axis dominant) */}
      <mesh ref={ringYRef}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#7C4DFF" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Particle System Orbiting the core
function OrbitingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;

  // Generate particles in an orbit shell
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.8 + Math.random() * 1.2;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8AFBFF"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function AICore() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {/* Fallback elegant loader inside the canvas area during SSR loading */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping" />
          <div className="w-16 h-16 bg-[#00E5FF]/20 rounded-full border border-primary animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative select-none">
      {/* Glow shadow backdrop filter */}
      <div className="absolute inset-0 m-auto w-40 h-40 bg-primary/20 rounded-full filter blur-[60px] pointer-events-none" />
      <div className="absolute inset-0 m-auto w-48 h-48 bg-secondary/15 rounded-full filter blur-[80px] pointer-events-none animate-pulse-slow" />

      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00E5FF" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#7C4DFF" />
        
        <CoreMesh />
        <OrbitingParticles />
      </Canvas>
    </div>
  );
}
