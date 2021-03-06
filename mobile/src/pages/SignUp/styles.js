import styled from 'styled-components/native';
import { Platform } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Area = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Title = styled.Text`
  color: #707070;
  font-size: 20px;
  text-align: center;
  margin-bottom: 13px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const AreaButtons = styled.View`
  width: 100%;
  margin: auto;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #707070;
  font-size: 16px;
  padding-bottom: 16px;
  font-weight: bold;
`;
