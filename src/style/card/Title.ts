import styled from 'styled-components';
import { h2 } from '../tokens/typography';
import { textShadow } from '../tokens/ui';

export interface TProps {
  color?: string;
}

const Title = styled.h2`
  margin: 1rem 1rem;
  font: ${h2};
  text-shadow: ${textShadow};
  color: ${props => (props.color ? props.color : undefined)};
  user-select: none;
`;

export default Title;
