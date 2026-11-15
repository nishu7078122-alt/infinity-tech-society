import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

class LemniscateCurve extends THREE.Curve {
  constructor(scale = 1.0, twist = 0.55) {
    super();
    this.scale = scale;
    this.twist = twist;
  }

  getPoint(t, optionalTarget = new THREE.Vector3()) {
    const u = t * Math.PI * 2;
    const a = 3.2 * this.scale;
    const denom = 1 + Math.sin(u) * Math.sin(u);
    const x = (a * Math.cos(u)) / denom;
    const y = (a * Math.sin(u) * Math.cos(u)) / denom;
    const z = Math.sin(u * 2) * this.twist * this.scale;
    return optionalTarget.set(x, y, z);
  }
}

export default function ThreeInfinityScene({
  mode = 'intro', // 'intro' | 'hero'
  autoRotate = true,
  interactive = true,
  className = "w-full h-full",
  glowColor = 0xB6FF39
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, mode === 'intro' ? 7.5 : 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the infinity object
    const infinityGroup = new THREE.Group();
    scene.add(infinityGroup);

    // 1. Create Infinity Curve and Tube
    const curve = new LemniscateCurve(mode === 'intro' ? 1.15 : 1.0, 0.6);
    const tubeGeometry = new THREE.TubeGeometry(curve, 240, 0.32, 32, true);

    // Dark Glossy Chrome Core Material
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x070D09,
      emissive: 0x0f2910,
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.9,
    });

    const infinityMesh = new THREE.Mesh(tubeGeometry, chromeMaterial);
    infinityGroup.add(infinityMesh);

    // 2. Glowing Neon Edge Wireframe / Accent
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: glowColor,
      wireframe: true,
      transparent: true,
      opacity: mode === 'intro' ? 0.35 : 0.25,
      blending: THREE.AdditiveBlending
    });
    const edgeMesh = new THREE.Mesh(tubeGeometry, wireframeMaterial);
    edgeMesh.scale.set(1.03, 1.03, 1.03);
    infinityGroup.add(edgeMesh);

    // 3. Flowing Light Particles along the Curve
    const lightParticleCount = 28;
    const particleGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const particleMat = new THREE.MeshBasicMaterial({
      color: 0xB6FF39,
      blending: THREE.AdditiveBlending
    });

    const particles = [];
    for (let i = 0; i < lightParticleCount; i++) {
      const p = new THREE.Mesh(particleGeo, particleMat);
      infinityGroup.add(p);
      particles.push({ mesh: p, offset: i / lightParticleCount });
    }

    // 4. Background Ambient Particles (for Intro)
    let starParticles = null;
    if (mode === 'intro') {
      const starCount = 180;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i] = (Math.random() - 0.5) * 20;
        starPos[i + 1] = (Math.random() - 0.5) * 14;
        starPos[i + 2] = (Math.random() - 0.5) * 12 - 2;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        color: 0xB6FF39,
        size: 0.05,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      starParticles = new THREE.Points(starGeo, starMat);
      scene.add(starParticles);
    }

    // 5. Hero Pedestal Base (if hero mode)
    if (mode === 'hero') {
      const baseGeo = new THREE.CylinderGeometry(2.6, 2.9, 0.25, 48);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x09100C,
        metalness: 0.8,
        roughness: 0.3
      });
      const pedestal = new THREE.Mesh(baseGeo, baseMat);
      pedestal.position.set(0, -1.8, 0);
      infinityGroup.add(pedestal);

      // Green neon ring on pedestal
      const ringGeo = new THREE.TorusGeometry(2.65, 0.04, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xB6FF39 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(0, -1.68, 0);
      infinityGroup.add(ring);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const greenPointLight = new THREE.PointLight(0xB6FF39, 4, 15);
    greenPointLight.position.set(0, 0, 3);
    scene.add(greenPointLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.0);
    topLight.position.set(4, 6, 4);
    scene.add(topLight);

    const rimLight = new THREE.DirectionalLight(0x77C83D, 2.5);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Flowing light along curve
      particles.forEach((item) => {
        const t = (item.offset + elapsedTime * 0.12) % 1;
        const pt = curve.getPoint(t);
        item.mesh.position.copy(pt);
      });

      // Rotation & gentle floating
      if (autoRotate) {
        if (mode === 'intro') {
          infinityGroup.rotation.y = elapsedTime * 0.45;
          infinityGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.15;
          infinityGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;
        } else {
          // Hero mode subtle float and tracking
          targetX = mouseX * 0.35;
          targetY = mouseY * 0.25;
          infinityGroup.rotation.y += (targetX - infinityGroup.rotation.y) * 0.05 + 0.003;
          infinityGroup.rotation.x += (-targetY - infinityGroup.rotation.x) * 0.05;
          infinityGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.08;
        }
      }

      // Stars slow drift
      if (starParticles) {
        starParticles.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      tubeGeometry.dispose();
      chromeMaterial.dispose();
      wireframeMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [mode, autoRotate, interactive, glowColor]);

  return <div ref={mountRef} className={`relative overflow-hidden ${className}`} />;
}
