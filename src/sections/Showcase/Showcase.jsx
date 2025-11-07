import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TeslaModel from './TeslaModel';
import './Showcase.css';

const RotatingTesla = ({ color }) => {
  const group = useRef();

  // Add slow auto-rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003; // adjust speed here
    }
  });

  return (
    <group ref={group}>
      <TeslaModel color={color} />
    </group>
  );
};

const Showcase = () => {
  const [color, setColor] = useState('#ff0000'); // default red
  const colors = ['#ff0000', '#000000', '#ffffff', '#0047ab', '#808080']; // red, black, white, blue, silver

  return (
    <section id="showcase" className="showcase">
      <div className="showcase-canvas">
        <Canvas camera={{ position: [3, 1.5, 3], fov: 25 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <RotatingTesla color={color} />
          <OrbitControls enableDamping dampingFactor={0.05} enableZoom={false} />
        </Canvas>
      </div>

      <div className="color-picker">
        <h3>Choose Your Color</h3>
        <div className="color-options">
          {colors.map((c) => (
            <button
              key={c}
              style={{
                backgroundColor: c,
                border: color === c ? '2px solid #fff' : '1px solid #444',
              }}
              onClick={() => setColor(c)}
              className="color-btn"
            />
          ))}
        </div>
      </div>

      <div className="stats-overlay">
        <h2>Model Y Performance</h2>
        <div className="stats">
          <div><strong>0–100 km/h:</strong> 3.7s</div>
          <div><strong>Top Speed:</strong> 250 km/h</div>
          <div><strong>Range:</strong> 514 km</div>
          <div><strong>Drive:</strong> Dual Motor AWD</div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
