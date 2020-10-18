import styled from 'styled-components';
import CardUI from '@material-ui/core/Card';
import CardMediaUI from '@material-ui/core/CardMedia';
import CardActionAreaUI from '@material-ui/core/CardActionArea';
import CardActionsUI from '@material-ui/core/CardActions';
import CardContentUI from '@material-ui/core/CardContent';
import { dimensions } from '../../constants';

export const Card = styled(CardUI)`
  margin: ${({ theme }) => theme.spacing(dimensions.XXXS)}px ${({ theme }) => theme.spacing(dimensions.XXXS)}px;
  min-width: 164px;
`;

export const CardImage = styled(CardMediaUI)`
  min-height: 140px;
`;

export const CardActionArea = styled(CardActionAreaUI)``;

export const CardActions = styled(CardActionsUI)``;

export const CardContent = styled(CardContentUI)``;
