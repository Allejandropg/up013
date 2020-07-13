import React, { useMemo, useEffect } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Command({ data, navigation, onCancel }) {
  const { command } = data;
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(command.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [command.date]);
  useEffect(() => {
    console.tron.log('comand', data);
  });
  return (
    <Container
      past={data.past}
      onPress={() => navigation.navigate('ConfirmSchedule', { command })}
    >
      <Name past={data.past}>{`${command.user.name}`}</Name>
      <Time past={data.past}>{`${dateParsed}`}</Time>
    </Container>
  );
}

// Command.prototype = {
//   data: PropTypes.shape().isRequired,
// };
