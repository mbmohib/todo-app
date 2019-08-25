import styled, { css } from 'styled-components';
import { palette, spacing, width } from '@material-ui/system';

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

  ${palette};
  ${width};
  ${spacing};
`;

export default Wrapper;
