import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 37px 0;
  /* background: #f00; */
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #b90008;
  margin: 0 0px 25px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  flex: 1;
  padding: 0 17px;
`;

export const Name = styled.Text`
  font-size: 28px;
  color: #707070;
  text-align: center;
`;

export const DateArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Date = styled.Text`
  font-size: 18px;
  color: #707070;
  text-align: center;
  flex-direction: row;
  margin-left: 11px;
`;

export const CopButton = styled(Button).attrs({ color: '#707070' })`
  margin-top: 5px;
  background-color: #dedede;
  margin-bottom: 64px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: rgb(6, 11, 97);
`;

export const CancelButton = styled(Button)`
  margin-top: 5px;
  background-color: #b90008;
`;
