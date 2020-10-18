import styled from 'styled-components';
import { dimensions } from '../../constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing(dimensions.XXXS)}px ;

`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  > .MuiCard-root {
    flex-grow: 4; /* default 0 */
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
`;
