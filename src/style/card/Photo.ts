import styled from 'styled-components';

export interface PProps {
	image: string;
}

const Photo = styled.div<PProps>`
	height: 22rem;
	width: 100%;
	border-radius: 0.7rem 0.7rem 0 0;
	background: url(${props => props.image}) no-repeat scroll center center / cover;
`;

export default Photo;
