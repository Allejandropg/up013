import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Alert } from 'react-native';
import {
  Container,
  Title,
  SubTitle,
  HourList,
  Hour,
  HourTitle,
} from './styles';
import BackgroundInternal from '~/components/BackgroundInternal';
import DateInput from '~/components/DateInput';

import api from '~/services/api';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <BackgroundInternal backButton navigation={navigation}>
      <Container>
        <Title>AGENDAMENTO</Title>
        <SubTitle>Selecione o dia e horário:</SubTitle>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => {
            return (
              <Hour
                onPress={() => {
                  if (item.available) {
                    handleSelectHour(item.value);
                  } else {
                    Alert.alert('', 'Horário não está disponível');
                  }
                }}
                enable={item.available}
              >
                <HourTitle enable={item.available}>{item.time}</HourTitle>
              </Hour>
            );
          }}
        />
      </Container>
    </BackgroundInternal>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: '',
  headerLeft: () => null,
});

SelectDateTime.prototype = PropTypes.shape({
  navigation: PropTypes.element.isRequired,
});
