import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './lib/service_worker';
import pip from 'public-ip';
import App from './app/App';
import { report } from './tools/report';

(async () => {
	const ip = await pip.v4();
	report(ip);
})();

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

serviceWorker.register();
