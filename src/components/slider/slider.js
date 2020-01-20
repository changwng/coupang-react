import React, { useState } from "react";
import Container from "../container";
import Slide from "./slide";
import { SLIDE } from "../../slideConstants";
import Indicator from "./indicator";

const SlideComponent = () => {
  const [slideMove, setSlideMove] = useState(0);
  const handleNextMoveSlide = () => {
    if (slideMove > -SLIDE.length + 1) {
      setSlideMove(slideMove - 1);
    } else {
      setSlideMove(0);
    }
  };
  const handlePrevMoveSlide = () => {
    if (slideMove < 0) {
      setSlideMove(slideMove + 1);
    } else {
      setSlideMove(-SLIDE.length + 1);
    }
  };

  const indifunction = e => {
    let indiclick = e.target.id;
    setSlideMove(-indiclick);
  };

  return (
    <Container topContainer wsize="full" hsize="slide" display="df">
      <Container middleContainer wsize="full" display="df">
        <button
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handlePrevMoveSlide}
        >
          prev
        </button>
        <Container indiContainer wsize="indi" hsize="indi" display="df">
          {SLIDE.map((indicator, idx) => {
            return (
              <Indicator
                key={idx}
                onClick={indifunction}
                id={idx}
                slideMove={Math.abs(slideMove)}
              />
            );
          })}
        </Container>

        <button
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handleNextMoveSlide}
        >
          next
        </button>
      </Container>
      <Container
        left={slideMove}
        slideCon
        transition="0.5"
        wsize="full"
        hsize="slide"
      >
        {SLIDE.map((slide, idx) => {
          return (
            <Slide
              key={idx}
              color={slide}
              left={idx}
              style={{ backgroundPositionX: "50%" }}
            ></Slide>
          );
        })}
      </Container>
    </Container>
  );
};

export default SlideComponent;
