import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { dimensions } from '../../constants/';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

/* export const CardContainer = styled(Grid)`
  
  background-color: red;
`; */

export const CardTop = styled.div``;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled(Paper)`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  max-width: 412px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(dimensions['XS'])}px;
  justify-content: space-between;

  .MuiFormControl-root {
    margin-top: ${({ theme }) => theme.spacing(dimensions['XS'])}px;
  }

  ${CardBottom} {
    margin-top: ${({ theme }) => theme.spacing(dimensions['M'])}px;

    .MuiButtonBase-root:nth-child(2) {
      margin-top: ${({ theme }) => theme.spacing(dimensions['XXS'])}px;
    }
  }
`;

export const ItemContainer = styled(Grid)``;
