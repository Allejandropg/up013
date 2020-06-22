import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageBG, UseArea, ImageRound } from './styles';
import logo from '~/assets/mylogo.png';
import bg from '~/assets/bg-internal.png';

const BackgroundInternal = ({ children }) => {
  return (
    <Container>
      <ImageBG source={bg} />
      <ImageRound source={logo} />
      <UseArea>{children}</UseArea>
    </Container>
  );
};

BackgroundInternal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BackgroundInternal;
