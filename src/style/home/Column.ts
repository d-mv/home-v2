import styled from 'styled-components';

const Column = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 1rem;
	margin: 0 1rem;
	width: 40%;

	@media (max-width: 749px) {
		padding: 1rem 0;
	}
	@media (max-width: 649px) {
		width: 100%;
		height: inherit;
		padding: 1rem 3rem;
	}
`;

export default Column;
