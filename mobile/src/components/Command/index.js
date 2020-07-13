import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Command({ data, navigation, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container
      past={data.past}
      onPress={() => navigation.navigate('Command', { command: data })}
    >
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{`${data.provider.name}`}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.canceled_at && (
        <>
          <Icon name="highlight-off" size={20} color="#F64c75" />
          <Time>Cancelar</Time>
        </>
      )}
    </Container>
  );
}

// Command.prototype = {
//   data: PropTypes.shape().isRequired,
// };
