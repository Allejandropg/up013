import React, { useEffect, useState } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import PropTypes from 'prop-types';
import api from '~/services/api';

import BackgroundInternal from '~/components/BackgroundInternal';
import { Container, Title, SubTitle, ListSchedules } from './styles';
import DateInput from '~/components/DateInput';

import Command from '~/components/Command';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function List({ isFocused, navigation }) {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);

        return {
          time: `${hour}:00h`,
          past: isBefore(checkDate, new Date()),
          command: response.data.find(a =>
            isEqual(parseISO(a.date), checkDate)
          ),
        };
      });
      setSchedule(data);
    }
    loadSchedule();
  }, [date, isFocused]);

  return (
    <BackgroundInternal>
      <Container>
        <Title>Agendamentos</Title>
        <SubTitle>Próximos serviços:</SubTitle>
        <DateInput date={date} onChange={setDate} />
        <ListSchedules
          data={schedule}
          keyExtractor={item => String(item.time)}
          renderItem={({ item }) =>
            item.command !== undefined && (
              <Command key={item.time} data={item} navigation={navigation} />
            )
          }
        />
      </Container>
    </BackgroundInternal>
  );
}

List.navigationOptions = {
  title: '',
  tabBarLabel: 'Histórico',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="restore" size={20} color={tintColor} />
  ),
};

List.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(List);
