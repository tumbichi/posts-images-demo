import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornmentUI from '@material-ui/core/InputAdornment';
import IconButtonUI from '@material-ui/core/IconButton';

export const Input = styled(TextField)`
  width: ${({ width }) => width || '100%'};
`;

export const InputAdornment = styled(InputAdornmentUI)``;

export const IconButtonContainer = styled(IconButtonUI)``;
