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
    props.flex && props.align
      ? css`
          align-items: ${props.align};
        `
      : props.align
      ? css`
          text-align: ${props.align};
        `
      : ''};

  ${palette};
  ${width};
  ${spacing};
`;

export default Wrapper;
