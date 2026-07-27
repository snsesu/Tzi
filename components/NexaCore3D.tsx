"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CoreRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[1.6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#9b6bff" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#5b8bff" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2.6, Math.PI / 5]}>
        <torusGeometry args={[1.9, 0.008, 16, 100]} />
        <meshBasicMaterial color="#7c5cff" transparent opacity={0.4} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial color="#c4b5ff" wireframe transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function FloatingShards() {
  const shards = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        position: [
          Math.cos((i / 6) * Math.PI * 2) * 2.4,
          Math.sin((i / 6) * Math.PI * 2) * 1.3,
          Math.sin(i) * 0.6,
        ] as [number, number, number],
        rotation: [Math.random(), Math.random(), Math.random()] as [
          number,
          number,
          number
        ],
      })),
    []
  );

  return (
    <>
      {shards.map((s, i) => (
        <Float key={i} speed={1.2 + i * 0.15} rotationIntensity={0.6} floatIntensity={1.2}>
          <mesh position={s.position} rotation={s.rotation}>
            <planeGeometry args={[0.5, 0.7]} />
            <meshBasicMaterial
              color="#8b7bff"
              transparent
              opacity={0.18}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function NexaCore3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <CoreRings />
        <FloatingShards />
        <Sparkles count={60} scale={4} size={2} speed={0.3} color="#a78bfa" />
      </Canvas>
    </div>
  );
}
