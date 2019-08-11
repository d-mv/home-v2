import styled from 'styled-components';
import { animated } from 'react-spring';

export interface PProps {
  image: string;
}

const Photo = styled(animated.div)<PProps>`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0) url(${props => props.image}) no-repeat scroll center center /
    contain;
  background-color: white;
  background-size: contain;
  user-select: none;
  background-color: rgba(0, 0, 0, 0);
`;

export default Photo;
