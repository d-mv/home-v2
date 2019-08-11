import React from 'react';
import {animated,useSpring} from 'react-spring'
import { H1, H2, H3, H4, H5 } from '../style/home/Message';
import { Underline } from '../style/tokens/animation';
import { dark } from '../style/tokens/color';

export const Message = () => (
	<animated.article id='home__message' style={useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })}>
		<H1 id='home__message_h1'>WELCOME,</H1>
		<H2 id='home__message_h2'>I’m Dmitry</H2>
		<H3 id='home__message_h3'>FRONT-END DEVELOPER</H3>
		<H4 id='home__message_h4'>
			React.js, React Native, Vue.js, Express, Rails & etc. Learning new, reading sci-fi
			and making photos when free.
		</H4>
		<H5 id='home__message_h5'>
			{'{ '}
			<Underline id='home__message_h5_underline' color={dark}>
				{'send message'}
			</Underline>
			{' }'}
		</H5>
	</animated.article>
);
