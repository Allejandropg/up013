import React from 'react';
import PropTypes from 'prop-types';

import { Container, ImageBG, Area, ImageRound } from './styles';
import BackButton from '~/components/BackButton';
import logo from '~/assets/mylogo.png';
import bg from '~/assets/bg-internal.png';

const BackgroundInternal = ({ backButton, navigation, children }) => {
  return (
    <Container>
      {backButton && <BackButton navigation={navigation} />}
      <ImageBG source={bg} />
      <Area>{children}</Area>
      <ImageRound source={logo} />
    </Container>
  );
};

BackgroundInternal.propTypes = {
  children: PropTypes.element.isRequired,
  backButton: PropTypes.bool,
  navigation: PropTypes.object,
};

export default BackgroundInternal;
