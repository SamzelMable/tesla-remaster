// src/sections/Showcase/TeslaModel.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Import the GLB file from src/assets/models
import teslaModel from '../../assets/models/tesla.glb';

const TeslaModel = ({ color }) => {
  const group = useRef();
  const { scene } = useGLTF(teslaModel); // use imported model
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      // Center and scale only once
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      box.getCenter(center);
      scene.position.sub(center);

      const size = box.getSize(new THREE.Vector3()).length();
      const scaleFactor = 2.5 / size;
      scene.scale.setScalar(scaleFactor);

      setInitialized(true);
    }
  }, [scene, initialized]);

  useEffect(() => {
    // Update color only (don't re-scale)
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        if (child.material.name.toLowerCase().includes('body')) {
          child.material.color = new THREE.Color(color);
          child.material.metalness = 0.8;
          child.material.roughness = 0.4;
        }
      }
    });
  }, [color, scene]);

  return <primitive ref={group} object={scene} />;
};

export default TeslaModel;
