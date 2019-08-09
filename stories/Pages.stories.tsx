import React from 'react';

import { storiesOf } from '@storybook/react';
import Global from '../src/style/Global';
import { H1, H2, H3, H4, H5 } from '../src/style/home/Message';

storiesOf('Pages', module).add('Home message', () => (
	<div>
		<Global />
		<H1>WELCOME,</H1>
		<H2>I’m Dmitry</H2>
		<H3>FULL-STACK DEVELOPER</H3>
		<H4>
			React.js, React Native, Vue.js, Express, Rails & etc. Learning new, reading sci-fi
			and make photos when free.
		</H4>
		<H5>{`{ send message }`}</H5>
	</div>
));
