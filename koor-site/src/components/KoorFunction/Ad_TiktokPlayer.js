import React, { useEffect, useRef } from "react";

{
  /* Generated. Figuring Out What it tried to do */
}
export default function Ad_TikTokPlayer({ videoId }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;

    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <blockquote class="Ad_TikTokPlayer" cite="https://www.tiktok.com/@user/video/${videoId}" data-video-id="${videoId}" style="max-width: 605px;min-width: 325px;" data-autoplay data-muted>
        </blockquote>
      `;
      containerRef.current.appendChild(script);
    }
  }, [videoId]);

  return (
    <div className="flex justify-center items-center py-4">
      <div ref={containerRef} className="w-full max-w-xl"></div>
    </div>
  );
}
