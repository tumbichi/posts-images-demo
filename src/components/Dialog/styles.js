import styled from 'styled-components';
import { Dialog as DialogUI, DialogTitle as DialogTitleUI, DialogContent as DialogContentUI } from '@material-ui/core';

export const DialogContainer = styled(DialogUI)``;

export const DialogTitle = styled(DialogTitleUI)``;

export const DialogContent = styled(DialogContentUI)`
  display: flex;

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;
