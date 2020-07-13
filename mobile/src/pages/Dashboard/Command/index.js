import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import api from '~/services/api';

import BackgroundInternal from '~/components/BackgroundInternal';
import { Container, Title } from './styles';

function Command({ navigation }) {
  return (
    <BackgroundInternal backButton navigation={navigation}>
      <Container>
        <Title>HISTÓRICO</Title>
      </Container>
    </BackgroundInternal>
  );
}

Command.navigationOptions = {
  title: '',
  headerLeft: () => null,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};

Command.propTypes = {};

export default withNavigationFocus(Command);
