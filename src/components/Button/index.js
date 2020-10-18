import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonStyle } from './styles';

const Button = ({ name, text, height, width, variant, color, size, startIcon, endIcon, onClick }) => {
  return (
    <ButtonStyle
      name={name}
      height={height}
      width={width}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      onClick={onClick}
    >
      {text}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  name: '',
  text: 'Button',
  variant: 'contained',
  color: 'primary',
  size: 'large',
  height: 'auto',
  width: 'auto',
  startIcon: null,
  endIcon: null,
  onClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  variant: PropTypes.oneOf(['outline', 'contained', 'text']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
