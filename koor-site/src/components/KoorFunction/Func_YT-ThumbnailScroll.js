import React, { useEffect, useRef } from "react";

{
  /* Generated. Should be a scrolling to the right loop of clickable thumbnails in a rectangle. Atleast this got some bouncy animation to look at */
}
const videoIds = [
  "rH3ijIrG1mY",
  "saXzXq3lXnM",
  "SrIB92dPtNc",
  "mvi4YNuRhiY",
  "HIedfD2_OoA",
  "sENpc-be39",
  "2tbDFzhtVqc",
];
{
  /* Videos:
    1 Coddle Crystal
    2 The Furry Fandom Is For Everyone
    3 Conservatives do NOTHING fo rthe furry fandom
    4 My Favorite Video Game Genre
    5 Dyslexias Your Name owo
    6 How I Became A Furry
    7 How To Come Up With Ideas
    */
}

export default function Func_AutoScrollThumbnails() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset when reaching the end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <div className="overflow-hidden w-full py-4">
      <div
        className="flex gap-4 whitespace-nowrap animate-scroll"
        ref={scrollRef}
      >
        {[...videoIds, ...videoIds].map((id, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-64 h-36 bg-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
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
