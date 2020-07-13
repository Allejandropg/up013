import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TouchButton } from './styles';

const BackButton = ({ navigation }) => {
  return (
    <TouchButton onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={25} color="#FFF" />
    </TouchButton>
  );
  // return (
  //   <TouchButton>
  //     <Icon name="arrow-left" size />
  //   </TouchButton>
  // );
};

export default BackButton;
