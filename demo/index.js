import React from 'react';
import { render } from 'react-dom';
import Offscreen from '../dist/';

const app = (
  <div>
    <h1>react-offscreen Demo</h1>
    <p>
      Below are some examples (remember this component creates an offscreen element so you should either open of devtools and explore or turn on a screen reader!)
    </p>
    <p>
      <span>{'I am some visible text'}</span>
      <Offscreen>{'...and I am some "offscreen" text'}</Offscreen>
    </p>
    <Offscreen tag='div'>
      {'I am an offscreen div (utilizing the "div" prop)'}
    </Offscreen>
  </div>
);

render(app, document.getElementById('root'));
