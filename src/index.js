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
export default function Offscreen({children, tag, ...other}) {
  const Tag = tag || 'span';
  return (<Tag style={inlineStyles} {...other}>{children}</Tag>);
}

Offscreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  tag: PropTypes.string
};
