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
        "marginStart": 86
      }
    } > Cadastro </Text>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "paddingStart": 19,
        "paddingTop": 11,
        "marginTop": 13,
        "width": 250,
        "height": 40,
        "borderRadius": 20,
        "backgroundColor": "rgba(222, 222, 222, 255)"
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingTop": 3
      }
    } >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 13.33,
        "height": 13.33,
        "backgroundColor": "#000000"
      }
    }
    />
    </View>
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "300",
        "fontSize": 16,
        "color": "rgba(112, 112, 112, 255)",
        "marginStart": -113
      }
    } > Nome completo </Text>
    </View>
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "paddingStart": 18.54,
        "paddingTop": 11,
        "marginTop": 10,
        "width": 250,
        "height": 40,
        "borderRadius": 20,
        "backgroundColor": "rgba(222, 222, 222, 255)"
      }
    } >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 13.74,
        "height": 11,
        "backgroundColor": "#000000"
      }
    }
    />
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 22.46,
        "marginStart": -13.74
      }
    } >
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "300",
        "fontSize": 16,
        "color": "rgba(112, 112, 112, 255)"
      }
    } > E - mail </Text>
    </View>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 20,
        "paddingTop": 11,
        "marginTop": 11,
        "width": 250,
        "height": 40,
        "borderRadius": 20,
        "backgroundColor": "rgba(222, 222, 222, 255)"
      }
    } >
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start"
      }
    } >
    <View style = {
      {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "marginTop": 1.56
      }
    } >

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 12.4,
        "height": 7.58,
        "backgroundColor": "#000000"
      }
    }
    />

    {
      /* <Path /> {Path is not supported. It can be exported as Svg} */ }
    <View style = {
      {
        "width": 6.89,
        "height": 6.2,
        "backgroundColor": "#000000"
      }
    }
    />
    </View>
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "300",
        "fontSize": 16,
        "color": "rgba(112, 112, 112, 255)",
        "marginStart": 8.1
      }
    } > Crie uma senha </Text>
    </View>
    </View>
    <View style = {
      {
        "alignItems": "flex-start",
        "marginTop": 32
      }
    } >
    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 63,
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
    } > CRIAR CONTA </Text>
    </View>
    </View>
    <Text style = {
      {
        "fontFamily": "Roboto",
        "fontWeight": "400",
        "fontStyle": "italic",
        "fontSize": 14,
        "textAlign": "center",
        "color": "rgba(112, 112, 112, 255)",
        "marginStart": 64,
        "marginTop": 21
      }
    } > Já possuo cadastro </Text>
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