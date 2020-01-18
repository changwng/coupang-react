import styled from 'styled-components';

const Indicator = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 100%;
	background: ${({ slideMove, id }) => {
		console.log(slideMove, id);
		if (slideMove === id) {
			return '#555';
		} else {
			return '#999';
		}
	}};
	margin: 3px;
	&:hover {
		transform: scale(1.1);
	}
`;

export default Indicator;
