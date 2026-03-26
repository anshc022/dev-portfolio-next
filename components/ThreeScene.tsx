"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb";

const ANIM_MAP: Record<string, string> = {
  idle:     "Idle",
  walk:     "Walking",
  wave:     "Wave",
  dance:    "Dance",
  thumbsup: "ThumbsUp",
};

function getSection(sp: number): string {
  if (sp < 0.15) return "idle";
  if (sp < 0.40) return "walk";
  if (sp < 0.65) return "wave";
  if (sp < 0.85) return "dance";
  return "thumbsup";
}

function Robot({ scrollProgress, mouseX, mouseY }: { scrollProgress: number; mouseX: number; mouseY: number }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions, mixer } = useAnimations(animations, group);
  const currentAction = useRef<string>("idle");

  // Apply emissive tint once
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => {
            const c = m.clone() as THREE.MeshStandardMaterial;
            c.emissive = new THREE.Color(0xff3cac);
            c.emissiveIntensity = 0.05;
            return c;
          });
        } else if (mesh.material) {
          const c = (mesh.material as THREE.MeshStandardMaterial).clone();
          (c as THREE.MeshStandardMaterial).emissive = new THREE.Color(0xff3cac);
          (c as THREE.MeshStandardMaterial).emissiveIntensity = 0.05;
          mesh.material = c;
        }
      }
    });
    // Start idle
    const idle = actions[ANIM_MAP.idle];
    if (idle) { idle.reset().fadeIn(0.4).play(); }
  }, [scene, animations, actions]);

  // Switch animation on scroll
  useEffect(() => {
    const section = getSection(scrollProgress);
    if (section === currentAction.current) return;
    const prev = actions[ANIM_MAP[currentAction.current]];
    const next = actions[ANIM_MAP[section]];
    if (prev) prev.fadeOut(0.4);
    if (next) next.reset().fadeIn(0.4).play();
    currentAction.current = section;
  }, [scrollProgress, actions]);

  useFrame((_, delta) => {
    mixer.update(delta);
    if (group.current) {
      group.current.rotation.y += (mouseX * 0.4 - group.current.rotation.y) * 0.05;
    }
  });

  return <primitive ref={group} object={scene} position={[0, 0, 0]} />;
}

function Particles() {
  const count = 350;
  const positions = useRef<Float32Array>((() => {
    const arr = new Float32Array(count * 3);
    const palette = ["#ff3cac", "#f9f002", "#39ff14", "#3b82f6", "#a855f7"];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.8 + Math.random() * 2.5;
      arr[i*3]   = Math.cos(a) * r;
      arr[i*3+1] = Math.random() * 5.5;
      arr[i*3+2] = Math.sin(a) * r;
    }
    return arr;
  })());

  const colors = useRef<Float32Array>((() => {
    const palette = [
      new THREE.Color("#ff3cac"), new THREE.Color("#f9f002"),
      new THREE.Color("#39ff14"), new THREE.Color("#3b82f6"), new THREE.Color("#a855f7"),
    ];
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      arr[i*3] = c.r; arr[i*3+1] = c.g; arr[i*3+2] = c.b;
    }
    return arr;
  })());

  const ref = useRef<THREE.Points>(null);
  useFrame(() => { if (ref.current) ref.current.rotation.y += 0.003; });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors.current,    3]} />
      </bufferGeometry>
      <pointsMaterial size={0.07} vertexColors transparent opacity={0.8} />
    </points>
  );
}

function Lights() {
  const keyRef = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (keyRef.current) keyRef.current.intensity = 4.5 + Math.sin(clock.elapsedTime * 2) * 0.5;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={keyRef} color="#ff3cac" position={[5, 8, 5]} intensity={4.5} distance={25} />
      <pointLight color="#3b82f6" position={[-3, 3, 4]} intensity={2} distance={20} />
      <pointLight color="#f9f002" position={[4, -1, -4]} intensity={2} distance={15} />
    </>
  );
}

function CameraRig({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.04 + 0.04 * 2; // keep base y
    camera.lookAt(0, 1.2, 0);
  });
  return null;
}

export default function ThreeScene() {
  const [scroll, setScroll] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [loadPct, setLoadPct] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? window.scrollY / max : 0);
    };
    const onMouse = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMouse); };
  }, []);

  // Preload model with progress
  useEffect(() => {
    useGLTF.preload(MODEL_URL);
    // Fake progress since drei doesn't expose it easily
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) { p = 100; setLoadPct(100); setLoaded(true); clearInterval(iv); }
      else setLoadPct(Math.floor(p));
    }, 150);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* Loading badge */}
      {!loaded && (
        <div className="fixed bottom-16 right-7 z-50 bg-[#141414]/80 backdrop-blur-md border border-[#2a2a2a] rounded-full px-3.5 py-1.5 font-fira text-[0.7rem] text-[#ff3cac] pointer-events-none">
          loading model... {loadPct}%
        </div>
      )}

      {/* Scroll hint */}
      <div className="fixed bottom-7 right-7 z-50 flex items-center gap-2 bg-[#141414]/70 backdrop-blur-md border border-[#2a2a2a] rounded-full px-3.5 py-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff3cac] animate-pulse" />
        <span className="font-fira text-[0.7rem] text-[#888]">scroll to animate</span>
      </div>

      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
        camera={{ position: [5, 2, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        shadows
      >
        <Lights />
        <CameraRig mouseX={mouse.x} mouseY={mouse.y} />
        <Particles />

        {/* Ground glow */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
          <circleGeometry args={[2.5, 32]} />
          <meshBasicMaterial color="#ff3cac" transparent opacity={0.07} />
        </mesh>

        <Robot scrollProgress={scroll} mouseX={mouse.x} mouseY={mouse.y} />
      </Canvas>
    </>
  );
}
