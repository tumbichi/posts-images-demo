import styled from 'styled-components';
import ButtonUI from '@material-ui/core/Button';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled(ButtonUI)`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;
