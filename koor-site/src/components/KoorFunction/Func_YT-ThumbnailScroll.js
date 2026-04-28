import { useEffect, useRef } from "react";

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

const doubled = [...videoIds, ...videoIds];

export default function Func_AutoScrollThumbnails() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    let scrollLeft = 0;
    let requestId = null;

    const step = () => {
      scrollLeft += 0.6;
      if (scrollLeft >= container.scrollWidth / 2) scrollLeft = 0;
      container.scrollLeft = scrollLeft;
      requestId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestId = requestAnimationFrame(step);
        } else {
          if (requestId !== null) {
            cancelAnimationFrame(requestId);
            requestId = null;
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      if (requestId !== null) cancelAnimationFrame(requestId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden w-full py-3" ref={containerRef}>
      <div className="flex min-w-fit gap-2 whitespace-nowrap">
        {doubled.map((id, idx) => (
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
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
