import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, CardImage, CardActionArea, CardActions, CardContent } from './styles';

import Button from '../Button';

function CardPost({ title, image, onClick }) {
  const theme = useTheme();
  return (
    <>
      <Card theme={theme}>
        <CardActionArea onClick={onClick}>
          <CardImage image={image} title="Contemplative Reptile" />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button text="Ver más" size="small" color="primary" variant="text" onClick={onClick} />
        </CardActions>
      </Card>
    </>
  );
}
CardPost.defaultProps = {
  title: '',
  image: '',
  onClick: () => {},
};

CardPost.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardPost;
