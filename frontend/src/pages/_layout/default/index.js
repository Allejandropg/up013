import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import { Wrapper, Container } from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
