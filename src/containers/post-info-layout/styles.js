import styled from 'styled-components';
import TooltipUI from '@material-ui/core/Tooltip';
import { dimensions } from '../../constants';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  flex: 1;
  min-height: 50vh;
  width: 100%;

  &:hover {
    background-color: #12121266;
  }
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(dimensions.XXXS)}px ${({ theme }) => theme.spacing(dimensions.XXS)}px;
`;

export const TextWrapper = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;

  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width: 450px) {
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const Tooltip = styled(TooltipUI)``;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
`;
