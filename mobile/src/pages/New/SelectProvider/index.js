import React, { useEffect, useState } from 'react';

import BackgroundInternal from '~/components/BackgroundInternal';
import {
  Container,
  Title,
  SubTitle,
  ProvidersList,
  Provider,
  Avatar,
  Name,
} from './styles';
import api from '~/services/api';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      console.tron.log('loadProviders', response.data);
      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <BackgroundInternal>
      <Container>
        <Title>AGENDAMENTO</Title>
        <SubTitle>Selecione o dia e horário:</SubTitle>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => {
            return (
              <Provider
                onPress={() => {
                  navigation.navigate('SelectDateTime', { provider });
                }}
              >
                <Avatar
                  source={{
                    uri: provider.avatar
                      ? provider.avatar.url
                      : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                  }}
                />
                <Name>{provider.name}</Name>
              </Provider>
            );
          }}
        />
      </Container>
    </BackgroundInternal>
  );
}
SelectProvider.navigationOptions = ({ navigation }) => ({
  title: '',
});
