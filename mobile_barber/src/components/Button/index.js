import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, color, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={{ color }}>{children}</Text>
      )}
    </Container>
  );
}
Button.defaultProps = {
  loading: false,
  rest: '',
  color: '#FFFFFF',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  rest: PropTypes.node,
  color: PropTypes.string,
};
