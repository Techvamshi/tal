'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useEffect, useRef } from 'react';

// Animated glowing core (hexagonal prism) symbolizing Talank’s digital core
function CorePrism() {
  return (
    <Float speed={2} rotationIntensity={1.8} floatIntensity={2.2}>
      <mesh scale={2.8}>
        <cylinderGeometry args={[1, 1, 2, 6]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00CECB"
          emissiveIntensity={1.5}
          metalness={1}
          roughness={0.05}
        />
      </mesh>
    </Float>
  );
}

// SVG Pulse Lines Component
function PulseLines() {
  return (
    <svg
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
    >
      <path
        d="M0,400 C360,300 1080,500 1440,400"
        fill="none"
        stroke="#00CECB44"
        strokeWidth="2"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-1000"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

export default function TalankHeroSection() {
  const orbitIcons = [
    { label: 'AI & ML', top: '10%', left: '50%' },
    { label: 'Analytics', top: '30%', left: '75%' },
    { label: 'Ideation Lab', top: '60%', left: '80%' },
    { label: 'Digital Core', top: '80%', left: '45%' },
    { label: 'Automation', top: '65%', left: '10%' },
    { label: 'Consulting', top: '25%', left: '15%' }
  ];

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      position: 'relative',
      background: 'linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif'
    }}>
      <PulseLines />

      <Canvas
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        camera={{ position: [0, 0, 7] }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} />
        <Environment preset="city" />
        <CorePrism />
      </Canvas>

      {orbitIcons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + idx * 0.2 }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            transform: 'translate(-50%, -50%)',
            background: '#ffffffee',
            borderRadius: '40px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#00A8A3',
            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
            backdropFilter: 'blur(4px)',
            zIndex: 3
          }}
        >
          {item.label}
        </motion.div>
      ))}

      <div style={{
        position: 'relative',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: '1.2',
            background: 'linear-gradient(90deg, #00CECB, #5B7DB1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '28px'
          }}
        >
          Talank: The Digital Pulse of Transformation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontSize: '20px',
            color: '#3a3f45',
            maxWidth: '760px',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}
        >
          Orchestrating innovation through a network of intelligent services – from ideation labs to AI-driven automation.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '16px 40px',
            fontSize: '16px',
            borderRadius: '60px',
            border: 'none',
            background: 'linear-gradient(to right, #00CECB, #5B7DB1)',
            color: '#ffffff',
            fontWeight: 700,
            boxShadow: '0 10px 30px rgba(0, 206, 203, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          Explore Talank Ecosystem
        </motion.button>
      </div>
    </div>
  );
}
