import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0px 5px 10px;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 39px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  font-size: 18px;
  color: #707070;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background-color: #fff;
  padding: 15px 30px;
  margin-top: 20px;
`;
