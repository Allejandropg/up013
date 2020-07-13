import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 8px 16px;
  margin-bottom: 15px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.past ? '#DEDEDE' : '#060c62')};
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => (props.past ? '#707070' : '#fff')};
`;

export const Time = styled.Text`
  color: ${props => (props.past ? '#707070' : '#fff')};
  font-size: 12px;
`;
