import React, { useState } from "react";
import Container from "./sliderContainer";
import Slide from "./slide";
import { SLIDE } from "../slideConstants";

const SlideComponent = () => {
  const [slideMove, setSlideMove] = useState(0);
  const [transition, setTransition] = useState(0);
  const handleNextMoveSlide = () => {
    if (slideMove > -SLIDE.length + 1) {
      setTransition(0.5);
      setSlideMove(slideMove - 1);
    } else if (slideMove > -SLIDE.length) {
      setTransition(0.5);
      setSlideMove(-SLIDE.length);
      setTimeout(() => {
        setTransition(0);
        setSlideMove(0);
      }, 503);
    } else {
      setTransition(0);
      setSlideMove(0);
      setTimeout(() => {
        setTransition(0.5);
        setSlideMove(-SLIDE.length + 2);
      }, 0);
    }
  };
  const handlePrevMoveSlide = () => {
    if (slideMove < -1) {
      setTransition(0.5);
      setSlideMove(slideMove + 1);
    } else if(slideMove <= -1){
      setTransition(0.5);
      setSlideMove(0);
      setTimeout(() => {
        setTransition(0);
        setSlideMove(-SLIDE.length);
      }, 503);
    }else{
      setTransition(0);
      setSlideMove(-SLIDE.length);
      setTimeout(() => {
        setTransition(0.5);
        setSlideMove(-SLIDE.length + 1);
      }, 0);
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
      <Container left={slideMove} slideCon transition={transition}>
        {SLIDE.map((slide, idx) => {
          return <Slide key={idx} color={slide} left={idx}></Slide>;
        })}
        <Slide color={SLIDE[0]} left={SLIDE.length}></Slide>
      </Container>
    </Container>
  );
};

export default SlideComponent;
