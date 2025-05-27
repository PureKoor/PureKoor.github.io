import LazyLoad from 'react-lazyload';
import { useState } from 'react';

function LazyImage({ src, placeholder, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad once>
      <div className="relative w-full h-full">
        {/* Show full-res image when loaded, otherwise placeholder */}
        {!loaded && (
          <img
            src={placeholder}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
          />
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover ${className}`}
          style={{ display: loaded ? 'block' : 'none' }}
        />
      </div>
    </LazyLoad>
  );
}

export default LazyImage;