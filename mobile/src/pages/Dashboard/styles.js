import styled from 'styled-components/native';

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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
