import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Main_Stars() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="koor-stars"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
        particles: {
          number: {
            value: 140,
            density: { enable: true, width: 1920, height: 1080 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.15, max: 0.9 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
              startValue: "random",
              mode: "auto",
            },
          },
          size: {
            value: { min: 0.4, max: 1.6 },
          },
          move: {
            enable: true,
            direction: "none",
            speed: { min: 0.05, max: 0.25 },
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}
