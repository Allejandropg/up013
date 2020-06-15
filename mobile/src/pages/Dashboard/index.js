import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';
// import PropTypes from 'prop-types';

import Background from '~/components/Background';
import { Container, Title, List } from './styles';
import Command from '~/components/Command';

function Dashboard({ isFocused }) {
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
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={commands}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Command onCancel={() => handleCancle(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Histórico',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};
export default withNavigationFocus(Dashboard);
