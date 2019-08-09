import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './lib/service_worker';
import pip from 'public-ip';
import App from './app/App';

(async () => {
	// const ip = await pip.v4();
	// fetch(`https://home-reporter-app.herokuapp.com/?ip=${ip}&time=${new Date()}`)
	// .then()
	// .catch(e => console.log(e));
})();

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);

serviceWorker.register();
