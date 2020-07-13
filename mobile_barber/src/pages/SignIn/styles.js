import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Area = styled.View`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 0% 54px 0;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const Title = styled.Text`
  color: #707070;
  font-size: 20px;
  text-align: center;
  margin-bottom: 13px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  align-items: center;
`;

export const ForgotLink = styled.TouchableOpacity`
  padding-bottom: 16px;
`;

export const ForgotLinkText = styled.Text`
  color: #707070;
  font-size: 14px;
  text-align: right;
`;

export const AreaButtons = styled.View`
  width: 100%;
  margin: auto;
`;

export const SubmitButton = styled(Button)`
  /* margin-top: 54px; */
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  padding-bottom: 16px;
`;

export const SignLinkText = styled.Text`
  color: #707070;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;
