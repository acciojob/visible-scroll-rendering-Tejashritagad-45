import React, { useRef, useState } from "react";
import './../styles/App.css';

const App = () => {

  const containerRef = useRef(null);

  const itemHeight = 50;
  const visibleCount = 10;

  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  const [startIndex, setStartIndex] = useState(0);

  function handleScroll() {
    const scrollTop = containerRef.current.scrollTop;
    const newIndex = Math.floor(scrollTop / itemHeight);
    setStartIndex(newIndex);
  }

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div>
      {/* Do not remove the main div */}

      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          height: "500px",
          overflowY: "auto"
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={startIndex + index}
            style={{
              height: "50px"
            }}
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
