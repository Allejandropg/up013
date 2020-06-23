import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { Container, ProvidersList, Provider, Avatar, Name } from './styles';
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
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => {
            console.tron.log('providerRender', provider);
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
    </Background>
  );
}
SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Select the Provider',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={40} color="#707070" />
    </TouchableOpacity>
  ),
});