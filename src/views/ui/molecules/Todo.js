import React from 'react';
import { Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';

const TodoWrapper = styled(Typography)`
  && {
    padding-bottom: 5px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    text-decoration: line-through;
    text-decoration-color: transparent;

    ${props =>
      props.checked &&
      css`
        text-decoration-color: ${props => props.theme.palette.grey['600']};
        color: ${props => props.theme.palette.grey['600']};
      `}

    &:after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      background: ${props => props.theme.palette.grey['400']};
      bottom: 0;
      left: 0;
      transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);

      ${props =>
        props.checked &&
        css`
          background: transparent;
          bottom: 15px;
        `}
    }
  }
`;

const Todo = ({ children, checked }) => (
  <TodoWrapper variant="body1" checked={checked}>
    {children}
  </TodoWrapper>
);

export default Todo;
