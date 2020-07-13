import React, { useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';

import BackgroundInternal from '~/components/BackgroundInternal';
import {
  Container,
  Title,
  SubTitle,
  Form,
  Name,
  DateArea,
  Date,
  CopButton,
  SubmitButton,
  CancelButton,
} from './styles';

function Confirm({ navigation }) {
  const command = navigation.getParam('command');
  const { user } = command;
  console.tron.log('finalCommand', navigation);

  const dateFormatted = useMemo(() =>
    format(parseISO(command.date), "dd'/'MM'/'yyyy - HH:mm", { locale: pt })
  );

  return (
    <BackgroundInternal backButton navigation={navigation}>
      <Container>
        <Title>AGENDAMENTOS</Title>
        <SubTitle>Serviço selecionado:</SubTitle>
        <Form>
          <Name>{user.name}</Name>
          <DateArea>
            <Icon name="event" color="#707070" size={18} />
            <Date>{dateFormatted}</Date>
          </DateArea>
          <CopButton>
            <Icon name="phone-in-talk" color="#707070" size={15} /> {user.phone}
          </CopButton>

          <SubmitButton onPress={() => navigation.navigate('')}>
            CONFIRMAR COMANDA
          </SubmitButton>
          <CancelButton>CANCELAR AGENDAMENTO</CancelButton>
        </Form>
      </Container>
    </BackgroundInternal>
  );
}

Confirm.navigationOptions = {
  title: '',
  headerLeft: () => null,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};

Confirm.propTypes = {};

export default withNavigationFocus(Confirm);
