import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  flex-direction: row;
  align-items: center;
`;

export const Tinput = styled.TextInput.attrs({
  placeholderTextColor: ' rgb(180, 180, 180)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: rgb(180, 180, 180);
`;
