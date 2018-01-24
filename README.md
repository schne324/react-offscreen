# react-offscreen

A react component for offscreen text

## Installation

```sh
npm i --save react-offscreen
```

## Usage

```js
import Offscreen from 'react-offscreen';

const app = (
  <Offscreen>I am offscreen text!</Offscreen>
);
```

## Props
- `tag` _{String}_ (optional): desired tag for offscreen element (defaults to `'span'`)
- `children` _{Array|Object|String}_ (required): any valid react children

## `tag` prop examples

```js
const offscreenParagraph = (<Offscreen tag='p'>Hello World!</Offscreen>);
const offscreenList = (
  <Offscreen tag='ul'>
    <li>foo</li>
    <li>bar</li>
    <li>baz</li>
  </Offscreen>
)
```

__See `demo/` directory for more examples__
