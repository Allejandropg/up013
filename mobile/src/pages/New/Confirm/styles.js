import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 37px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin: 0 0px 0px;
  justify-content: center;
  align-items: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #b90008;
  margin: 0 0px 25px;
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
  text-align: center;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  text-align: center;
  color: #707070;
`;
export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
