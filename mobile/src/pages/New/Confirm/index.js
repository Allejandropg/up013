import React, { useMemo, useEffect } from 'react';
import { format, parseISO, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt';
import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  SubTitle,
  Avatar,
  Name,
  Time,
  SubmitButton,
} from './styles';
import BackgroundInternal from '~/components/BackgroundInternal';

import api from '~/services/api';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateFormatted = useMemo(() =>
    format(parseISO(time), "dd 'de' MMMM 'de' yyyy", { locale: pt })
  );

  const hourFormatted = useMemo(() =>
    format(addHours(parseISO(time), 1), 'HH:mm', {
      timeZone: 'America/Sao_Paulo',
      locale: pt,
      addSuffix: true,
    })
  );

  async function handleAddCommand() {
    await api.post(`commands`, {
      provider_id: provider.id,
      date: time,
    });
    navigation.navigate('Dashboard');
  }

  return (
    <BackgroundInternal backButton navigation={navigation}>
      <Container>
        <Title>AGENDAMENTO</Title>
        <SubTitle>Confirmação:</SubTitle>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <Time>{hourFormatted}</Time>
        <SubmitButton onPress={() => handleAddCommand()}>
          Confirmar
        </SubmitButton>
      </Container>
    </BackgroundInternal>
  );
}

Confirm.navigationOptions = {
  title: '',
  headerLeft: () => null,
};

Confirm.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
