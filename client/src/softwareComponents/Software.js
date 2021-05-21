import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Software() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
<h1>Software</h1>
    </>
  );
}

export default Software;
