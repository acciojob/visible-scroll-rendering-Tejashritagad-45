import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {

  const containerRef = useRef(null);

  const itemHeight = 50;
  const visibleCount = 10;

  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const newStart = Math.floor(scrollTop / itemHeight);
    setStartIndex(newStart);
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div>
      {/* Do not remove the main div */}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{ height: "500px", overflow: "auto" }}
      >
        {visibleItems.map((item, index) => (
          <h2
            key={startIndex + index}
            style={{ height: `${itemHeight}px`, margin: 0 }}
          >
            {item}
          </h2>
        ))}
      </div>

    </div>
  );
};

export default App;
