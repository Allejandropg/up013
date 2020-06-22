import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #dedede;
  border-radius: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Tinput = styled.TextInput.attrs({
  placeholderTextColor: '#707070',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #707070;
`;
