import { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function KoorParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {},
          fullScreen: {
            enable: true,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
            },
          },
          particles: {
            color: {
              value: "#fafafa",
            },
            move: {
              direction: "none",
              enable: true,
              random: true,
              speed: 1,
              straight: false,
              bounce: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 160,
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default KoorParticles;
