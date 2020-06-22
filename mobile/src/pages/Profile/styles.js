import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px 37px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgb(180, 180, 180);
  margin: 20px 0 15.5px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #707070;
  margin-bottom: 12px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: rgb(6, 11, 97);
`;
export const LogoutLink = styled.TouchableOpacity`
  margin-top: 20px;
  padding-bottom: 16px;
`;

export const LogoutLinkText = styled.Text`
  color: #b90008;
  font-size: 16px;
  text-align: center;
`;
