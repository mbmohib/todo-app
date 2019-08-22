import { css } from 'styled-components';

const sizes = {
  mobile: '360',
  fablet: '410',
  tablet: '768',
  smallLaptop: '992',
  laptop: '1200',
  desktop: '1400',
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
