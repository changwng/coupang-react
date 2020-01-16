import React, { useState } from "react";
import Container from "./sliderContainer";
import Slide from "./slide";
import { SLIDE } from "../slideConstants";

const SlideComponent = () => {
  const [slideMove, setSlideMove] = useState(0);

  const handleNextMoveSlide = () => {
    if (slideMove < SLIDE.length - 1) {
      setSlideMove(slideMove + 1);
    } else {
      setSlideMove(0);
    }
  };
  const handlePrevMoveSlide = () => {
    if (slideMove > 0) {
      setSlideMove(slideMove - 1);
    } else {
      setSlideMove(SLIDE.length - 1);
    }
  };

  return (
    <Container topContainer>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handlePrevMoveSlide}
        >
          prev
        </button>
        <button
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handleNextMoveSlide}
        >
          next
        </button>
      </Container>
      <Container left={slideMove} slideCon>
        {SLIDE.map((slide, idx) => {
          return <Slide key={idx} color={slide} left={idx}></Slide>;
        })}
      </Container>
    </Container>
  );
};

export default SlideComponent;
