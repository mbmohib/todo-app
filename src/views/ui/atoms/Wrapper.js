import styled, { css } from 'styled-components';
import {
  space,
  width,
  border,
  borderColor,
  borderRadius,
  color,
  position,
} from 'styled-system';

const Wrapper = styled.div`
  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
      justify-content: ${props =>
        props.justify ? props.justify : 'flex-start'};
    `}

  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
    `};

  background-color: ${({ bgColor, theme }) =>
    bgColor === 'gray'
      ? theme.palette.background.default
      : bgColor === 'dark'
      ? '#444444'
      : bgColor === 'light'
      ? theme.palette.background.light
      : ''};

  ${({ bgImage }) =>
    bgImage
      ? css`
          background: url(${bgImage}) no-repeat center center;
          background-size: cover;
        `
      : ''};

  ${props =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight};
      overflow-y: auto;
    `};

  ${props =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth};
    `};

  ${space};
  ${width};
  ${color};
  ${border};
  ${borderColor};
  ${borderRadius};
  ${position};
`;

export default Wrapper;
