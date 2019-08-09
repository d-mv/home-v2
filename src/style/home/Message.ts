import styled from 'styled-components';
import { DefaultParagraph } from '../tokens/reset';
import { fontSans, fontSerif } from '../tokens/typography';
import { textShadow } from '../tokens/ui';

const Paragraph = styled(DefaultParagraph)`
	font-family: ${fontSans};
	letter-spacing: 0.1rem;
	text-shadow: ${textShadow};
	user-select: none;
`;

export const H1 = styled(Paragraph)`
	font-size: 2.2rem;
	font-weight: 300;
	font-style: italic;
	@media (max-width: 499px) {
		font-size: 1.8rem;
	}
`;
export const H2 = styled(Paragraph)`
	font-size: 3rem;
	font-weight: 500;
	@media (max-width: 499px) {
		font-size: 2.2rem;
	}
`;
export const H3 = styled(Paragraph)`
	font-size: 3rem;
	@media (max-width: 499px) {
		font-size: 2.2rem;
	}
`;
export const H4 = styled(Paragraph)`
	font-family: ${fontSerif};
	margin: 0.5rem 0;
	font-size: 2rem;
	font-weight: 300;
	@media (max-width: 499px) {
		font-size: 1.8rem;
	}
`;
export const H5 = styled(Paragraph)`
	font-family: ${fontSerif};
	margin: 1rem 0;
	font-size: 1.5rem;
	font-weight: 300;
	cursor: pointer;
`;
