import styled from 'styled-components';
import { white } from '../tokens/color';
import { link } from '../tokens/typography';
import { textShadow } from '../tokens/ui';

const Link = styled.a`
  cursor: pointer;
  color: ${white};
  font: ${link};
  letter-spacing: 0.05rem;
  text-shadow: ${textShadow};
`;

export default Link;
