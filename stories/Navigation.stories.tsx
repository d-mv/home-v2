import React from 'react';

import { storiesOf } from '@storybook/react';

import Global from '../src/style/Global';
import Button from '../src/style/nav/Button';
import NavBar from '../src/components/NavBar';

console.log(window.innerWidth);

storiesOf('Navigation', module).add('Button', () => (
  <div>
    <Global />
    <Button active={false} onClick={() => {}}>
      HOME
    </Button>
  </div>
));
storiesOf('Navigation', module).add('Bar', () => (
  <div>
    <Global />
    <NavBar />
  </div>
));
