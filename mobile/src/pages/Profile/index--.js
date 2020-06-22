import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, ImageBackground } from 'react-native';
import imageBG from '~/assets/bg-internal.png';

export default function Profile() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          zIndex: 1,
        }}
        source={imageBG}
      >
        <View
          style={{
            alignItems: 'flex-start',
            paddingStart: 186,
            paddingTop: 156,
            flex: 1,
          }}
        >
          <Image
            style={{
              backgroundColor: '#F00',
              width: 164,
              height: 164,
              borderRadius: 82,
              zIndex: 2,
              borderWidth: 1,
              borderColor: '#0F0',
            }}
            source={imageBG}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingStart: 54,
            paddingTop: 113,
            marginStart: -473,
            marginTop: 238,
            width: 360,
            height: 440,
            borderTopStartRadius: 80,
            borderTopEndRadius: 0,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            backgroundColor: 'rgba(249, 249, 249, 255)',
          }}
        >
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 20,
              color: 'rgba(112, 112, 112, 255)',
              marginStart: 102,
            }}
          >
            Login
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 19,
              paddingTop: 11,
              marginTop: 13,
              width: 250,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'rgba(222, 222, 222, 255)',
            }}
          >
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '300',
                fontSize: 16,
                color: 'rgba(112, 112, 112, 255)',
              }}
            >
              E - mail
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              paddingStart: 19,
              paddingTop: 11,
              marginTop: 13,
              width: 250,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'rgba(222, 222, 222, 255)',
            }}
          >
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '300',
                fontSize: 16,
                color: 'rgba(112, 112, 112, 255)',
              }}
            >
              Senha
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontWeight: '300',
              fontSize: 14,
              textAlign: 'right',
              color: 'rgba(112, 112, 112, 255)',
              marginStart: 150,
              marginTop: 9,
            }}
          >
            Esqueci a senha
          </Text>
          <View
            style={{
              alignItems: 'flex-start',
              marginTop: 54,
            }}
          >
            <View
              style={{
                alignItems: 'flex-start',
                paddingStart: 89,
                paddingTop: 8,
                width: 250,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(185, 0, 8, 255)',
              }}
            >
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 255)',
                }}
              >
                ENTRAR
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontFamily: 'Roboto',
              fontWeight: '300',
              fontStyle: 'italic',
              fontSize: 14,
              textAlign: 'center',
              color: 'rgba(112, 112, 112, 255)',
              marginStart: 30,
              marginTop: 31,
            }}
          >
            Não tem cadastro ? Clique aqui.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
