"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/*  Floating "data cubes" — wireframe + solid boxes drifting in space.        */
/* -------------------------------------------------------------------------- */
function DataCubes() {
  const group = useRef<THREE.Group>(null);

  // Pre-compute random transforms once (stable across renders).
  const cubes = useMemo(() => {
    const items = [];
    const colors = ["#22d3ee", "#3b82f6", "#8b5cf6"];
    for (let i = 0; i < 14; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
        ] as [number, number, number],
        scale: 0.25 + Math.random() * 0.5,
        speed: 0.1 + Math.random() * 0.4,
        color: colors[i % colors.length],
      });
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.05;
    group.current.children.forEach((child, i) => {
      child.rotation.x += delta * cubes[i].speed * 0.5;
      child.rotation.y += delta * cubes[i].speed;
      // gentle vertical bob
      child.position.y += Math.sin(state.clock.elapsedTime * cubes[i].speed) * 0.002;
    });
  });

  return (
    <group ref={group}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.position} scale={c.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={c.color}
            transparent
            opacity={0.18}
            wireframe={i % 2 === 0}
            emissive={c.color}
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*  Particle field — thousands of points, the "data stream" feel.            */
/* -------------------------------------------------------------------------- */
function Particles({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        {/* args=[Float32Array, itemSize] constructs the attribute correctly. */}
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#7dd3fc"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mouse parallax — the whole scene leans toward the cursor.                */
/* -------------------------------------------------------------------------- */
function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 1.0 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      // pointer-events disabled so the canvas never blocks buttons/links
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-10, -6, -4]} intensity={0.8} color="#8b5cf6" />
      <Particles />
      <DataCubes />
      <Rig />
    </Canvas>
  );
}
