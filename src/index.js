import React from 'react';
import PropTypes from 'prop-types';
import inlineStyles from './inline-styles';

/**
 * Offscreen
 *
 * Creates a clipped offscreen div with the provided children. Passes all other
 * props through to the span.
 *
 * Example usage:
 * ```
 *  <Offscreen className='foo'>{'I am offscreen and stuff!'}</Offscreen>
 * ```
 */
export default function Offscreen({children, ...other}) {
  return (<span style={inlineStyles} {...other}>{children}</span>);
}

Offscreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
