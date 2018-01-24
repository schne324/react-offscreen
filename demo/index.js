import React from 'react';
import { render } from 'react-dom';
import Offscreen from '../dist/';

const app = (
  <p>
    <span>{'I am some visible text'}</span>
    <Offscreen>{'...and I am some "offscreen" text'}</Offscreen>
  </p>
);

render(app, document.getElementById('root'));
