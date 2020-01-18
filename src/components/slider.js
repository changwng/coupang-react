import React, { useState } from 'react';
import Container from './sliderContainer';
import Slide from './slide';
import { SLIDE } from '../slideConstants';
import Indicator from './indicator';
import BasicContainer from './container';

const SlideComponent = () => {
	const [slideMove, setSlideMove] = useState(0);
	const [transition, setTransition] = useState(0);
	const handleNextMoveSlide = () => {
		if (slideMove > -SLIDE.length + 1) {
			setTransition(0.5);
			setSlideMove(slideMove - 1);
		} else {
			setTransition(0);
			setSlideMove(0);
		}
	};
	const handlePrevMoveSlide = () => {
		if (slideMove < 0) {
			setTransition(0.5);
			setSlideMove(slideMove + 1);
		} else {
			setTransition(0);
			setSlideMove(-SLIDE.length + 1);
		}
	};

	const indifunction = e => {
		let indiclick = e.target.id;
		setTransition(0.5);
		setSlideMove(-indiclick);
	};

	return (
		<Container topContainer>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<button
					style={{ display: 'inline-block', zIndex: '9' }}
					onClick={handlePrevMoveSlide}
				>
					prev
				</button>
				<BasicContainer>
					{SLIDE.map((indicator, idx) => {
						return (
							<Indicator
								key={idx}
								style={{ position: 'relative', bottom: '-120px' }}
								onClick={indifunction}
								id={idx}
								slideMove={Math.abs(slideMove)}
							/>
						);
					})}
				</BasicContainer>

				<button
					style={{ display: 'inline-block', zIndex: '9' }}
					onClick={handleNextMoveSlide}
				>
					next
				</button>
			</Container>
			<Container left={slideMove} slideCon transition={transition}>
				{SLIDE.map((slide, idx) => {
					return <Slide key={idx} color={slide} left={idx}></Slide>;
				})}
			</Container>
		</Container>
	);
};

export default SlideComponent;
