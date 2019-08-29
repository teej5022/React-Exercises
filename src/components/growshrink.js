import React, { useState } from "react";

const Grow = () => {
  const [size, setSize] = useState(20);

  return (
    <div>
      <button onClick={() => setSize(size + 5)}>Grow</button>
      <button onClick={() => setSize(size - 5)}>Shrink</button>
      <p style={{ fontSize: `${size}px` }}>{size}px</p>
    </div>
  );
};

export default Grow;
