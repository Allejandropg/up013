import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
