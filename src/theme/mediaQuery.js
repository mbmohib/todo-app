import { css } from 'styled-components';

const sizes = {
  xs: '0',
  sm: '600',
  md: '960',
  lg: '1280',
  xl: '1920',
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
