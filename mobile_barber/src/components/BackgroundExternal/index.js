import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageBG, UseArea, ImageRound } from './styles';
import logo from '~/assets/mylogo.png';
import bg from '~/assets/bg-external.png';

const BackgroundExternal = ({ children }) => {
  return (
    <Container>
      <ImageBG source={bg} />
      <UseArea>{children}</UseArea>
      <ImageRound source={logo} />
    </Container>
  );
};

BackgroundExternal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BackgroundExternal;
