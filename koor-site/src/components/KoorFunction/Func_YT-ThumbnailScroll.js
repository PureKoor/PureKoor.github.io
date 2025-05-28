import React, { useEffect, useRef, useState } from "react";

{
  /* Generated. Should be a scrolling to the right loop of clickable thumbnails in a rectangle. Atleast this got some bouncy animation to look at */
}
const videoIds = [
  "E0ATr0jo-Bo", // Coming Out As A Furry
  "rH3ijIrG1mY", // Coddle Crystal
  "2tbDFzhtVqc", // How To Come Up With Ideas
  "SrIB92dPtNc", // Conservatives do NOTHING for the furry fandom
  "F_Whq-LUkR0", // How TO Draw A Circle
  "2AZEFJf1YNg", // Transformation is So Cool
  "mvi4YNuRhiY", // My Favorite Video Game Genre
  "HIedfD2_OoA", // Dyslexias Your Name owo
  "sENpc-be39I", // How I Became A Furry
];

export default function Func_AutoScrollThumbnails() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    let start = null;
    let scrollLeft = 0;
    let requestId;

    const speed = 0.6; // pixels per frame

    const step = (timestamp) => {
      if (!start) start = timestamp;
      start = timestamp;

      scrollLeft += speed;
      if (scrollLeft >= container.scrollWidth / 2) {
        scrollLeft = 0;
      }

      container.scrollLeft = scrollLeft;
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="overflow-hidden w-full py-3" ref={containerRef}>
      <div className="flex min-w-fit gap-2 whitespace-nowrap">
        {[...videoIds, ...videoIds].map((id, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-64 h-36 bg-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-110 hover:z-50 transition duration-300"
          >
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt="YouTube thumbnail"
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
