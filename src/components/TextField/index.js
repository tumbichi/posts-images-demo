import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styles';

class TextField extends Component {
  state = {
    value: '',
  };

  getValue = () => this.state.value;

  onChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  render() {
    const { type, label, variant, width, error, helperText, onClick } = this.props;
    const { value } = this.state;

    return (
      <Input
        type={type}
        variant={variant}
        label={label}
        width={width}
        value={value}
        onChange={this.onChange}
        onClick={onClick}
        helperText={error ? helperText : ''}
        error={error}
      />
    );
  }
}

TextField.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  label: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  variant: 'outlined',
  label: 'Default label',
};

export default TextField;
