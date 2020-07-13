import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import api from '~/services/api';

import BackgroundInternal from '~/components/BackgroundInternal';
import { Container, Title, List } from './styles';
import Command from '~/components/Command';

function Dashboard({ isFocused, navigation }) {
  const [commands, setCommands] = useState();

  async function loadCommands() {
    const response = await api.get('commands');
    setCommands(response.data);
  }

  useEffect(() => {
    loadCommands();
  }, []);

  useEffect(() => {
    if (isFocused) {
      loadCommands();
    }
  }, [isFocused]);

  async function handleCancle(id) {
    const response = await api.delete(`commands/${id}`);
    setCommands(
      commands.map(command =>
        command.id === id
          ? { ...command, canceled_at: response.data.canceled_at }
          : command
      )
    );
  }

  return (
    <BackgroundInternal>
      <Container>
        <Title>HISTÓRICO</Title>
        <List
          data={commands}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Command
              onCancel={() => handleCancle(item.id)}
              data={item}
              navigation={navigation}
            />
          )}
        />
      </Container>
    </BackgroundInternal>
  );
}

Dashboard.navigationOptions = {
  title: '',
  tabBarLabel: 'Histórico',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
