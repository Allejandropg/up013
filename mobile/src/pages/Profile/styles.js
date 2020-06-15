import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: rgb(180, 180, 180);
  font-weight: bold;
  align-self: center;
  margin-top: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgb(180, 180, 180);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
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
export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;
