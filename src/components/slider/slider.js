import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Container from "../container";
import Slide from "./slide";
import {Button} from '../input'
import { SLIDE } from "../../slideConstants";

const Li = styled.li`
box-sizing:border-box;
width:100%;
height:60px;
border:${({id, state}) => parseInt(id) === state ? "2px solid #4285f4" : "1px solid #ddd"};
`

const SlideComponent = () => {
  const [slideMove, setSlideMove] = useState(0);
  const [intervalState, setintervalState] = useState(false)

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

  useEffect(()=>{
    const interval = setInterval(()=>{
        setSlideMove(slideMove => slideMove + 1);
    }, 2000)

    if(intervalState){
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [intervalState])

  if (slideMove === SLIDE.length) {
    setSlideMove(0);
  }

  const handleMouseOver = (e) => {
    setintervalState(true)
    setSlideMove(parseInt(e.target.id))
  }

  const handleMouseLeave = (e) => {
    setintervalState(false)
    setSlideMove(parseInt(e.target.id))
  }


  console.log(slideMove)
  return (
    <Container topContainer wsize="full" hsize="slide" display="df">
      <Container middleContainer wsize="full" display="df">
        <Button slideButton backPosition="-174px -263px" hoverPosition="-270px -263px"
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handlePrevMoveSlide}
        >
        </Button>
        <Button slideButton backPosition="-220px -263px" hoverPosition="-316px -263px"
          style={{ display: "inline-block", zIndex: "9" }}
          onClick={handleNextMoveSlide}
        >
        </Button>
      </Container>
      <ul onMouseLeave={handleMouseLeave} style={{width:"180px", background:"#fff", position:"absolute", right:"250px"}}>
        {SLIDE.map((element, idx)=>(
          <Li id={idx} state={slideMove} onMouseEnter={handleMouseOver} ></Li>
        ))}
      </ul>
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
