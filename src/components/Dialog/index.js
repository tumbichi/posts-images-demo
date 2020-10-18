import React from 'react';
import PropTypes from 'prop-types';
import { DialogContainer, DialogTitle, DialogContent } from './styles';

const Dialog = ({ title, open, children, handleClose }) => {
  return (
    <DialogContainer open={open} disableEscapeKeyDown onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </DialogContainer>
  );
};

Dialog.defaultProps = {
  title: '',
  open: false,
  children: <></>,
  handleClose: () => {},
};

Dialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
};

export default Dialog;
