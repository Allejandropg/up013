import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

export default () => {
  return (
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "paddingTop": 118,
        "flex": 1
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 54,
        "paddingTop": 111,
        "marginTop": 82,
        "width": 360,
        "height": 440,
        "borderTopStartRadius": 80,
        "borderTopEndRadius": 0,
        "borderBottomEndRadius": 0,
        "borderBottomStartRadius": 0,
        "backgroundColor": "rgba(249, 249, 249, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(112, 112, 112, 255)",
        "marginStart": 6
      }
    } > Link enviado com sucesso! </Text>
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "300",
        "fontSize": 16,
        "textAlign": "center",
        "color": "rgba(112, 112, 112, 255)",
        "marginStart": 14,
        "marginTop": 15
      }
    } > Confira seu e - mail para acessar o link de recuperação. </Text>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 133
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 75,
        "paddingTop": 8,
        "width": 250,
        "height": 40,
        "borderRadius": 20,
        "backgroundColor": "rgba(6, 12, 98, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "400",
        "fontSize": 20,
        "textAlign": "center",
        "color": "rgba(255, 255, 255, 255)"
      }
    } > RETORNAR </Text>
    </View>
    </View>
    </View>
    <Image style = {
      {
        "marginStart": -263,
        "width": 164,
        "height": 164,
        "borderRadius": 82
      }
    }
    source = {
      {
        /* add your source here */ }
    }
    />
    </View>

  );
};