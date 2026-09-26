"use client";

import { useState, type MouseEvent } from "react";

export default function HeroScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x: y, y: x });
  }

  return (
    <div
      className="hero-scene"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      aria-label="Interactive 3D visualization"
    >
      <div
        className="hero-orbit hero-orbit-one"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      />
      <div
        className="hero-orbit hero-orbit-two"
        style={{ transform: `rotateX(${tilt.x * -0.7}deg) rotateY(${tilt.y * 0.7}deg)` }}
      />

      <div
        className="hero-3d-card"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="hero-grid" />
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring" />
          <div className="hero-avatar-core">SK</div>
        </div>

        <div className="hero-code-line hero-code-line-one">ML / NLP / DATA</div>
        <div className="hero-code-line hero-code-line-two">SPATIO-TEMPORAL</div>
        <div className="hero-code-line hero-code-line-three">SOFTWARE ENGINEERING</div>

        <div className="hero-chip hero-chip-one">Python</div>
        <div className="hero-chip hero-chip-two">Research</div>
        <div className="hero-chip hero-chip-three">AI / ML</div>
      </div>
    </div>
  );
}
