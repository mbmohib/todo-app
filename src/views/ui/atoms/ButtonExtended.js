import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const ButtonExtended = styled(Button)`
  && {
    svg {
      margin-right: 5px;
    }

    ${spacing}
  }
`;

export default ButtonExtended;
