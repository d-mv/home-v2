import styled from 'styled-components';

const Content = styled.main`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	@media (max-width: 499px) {
		left: 0;
		padding: 2.5rem 0;
	}
	@media (min-width: 500px) {
		left: 4rem;
		padding: 2rem 0;
	}
`;

export default Content;
