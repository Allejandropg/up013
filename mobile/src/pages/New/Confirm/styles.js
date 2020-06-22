import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 0 auto 30px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 28px;
  font-weight: bold;
  color: #707070;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: #707070;
`;
export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
