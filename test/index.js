import 'jsdom-global/register';
global.window.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
import React from 'react';
import test from 'tape';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offscreen from '../src/';
import inlineStyles from '../src/inline-styles';

configure({ adapter: new Adapter() });

test('renders element with proper inline offscreen styles', t => {
  const offscreen = mount(<Offscreen>hi</Offscreen>);
  const node = offscreen.getDOMNode();
  const steez = Object.entries(inlineStyles);

  steez
    .forEach(([key, value], i) => {
      t.equal(node.style[key], value);

      if (i === steez.length - 1) {
        t.end();
      }
    });
});

test('renders the provided tag', t => {
  // NOTE: wrapping it in a div because enzyme gets
  // tripped up using `.is` on the wrapper itself
  const wrapper = mount(
    <div><Offscreen tag='p'><span>hi</span></Offscreen></div>
  );

  t.ok(wrapper.find('p').exists());
  t.ok(wrapper.find('p span').exists());
  t.end();
});

test('passes other props through to wrapper', t => {
  // NOTE: wrapping it in a div because enzyme gets
  // tripped up using `.is` on the wrapper itself
  const wrapper = mount(
    <div>
      <Offscreen className='foo'><span>hi</span></Offscreen>
    </div>
  );

  t.ok(wrapper.find('.foo').exists());
  t.end();
});
