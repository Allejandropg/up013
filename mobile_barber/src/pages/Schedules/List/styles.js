import styled from 'styled-components/native';

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

export const Area = styled.View`
  flex: 1;
`;

export const ListSchedules = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 4px;
`;
