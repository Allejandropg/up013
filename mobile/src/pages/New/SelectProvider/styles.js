import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 18px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin: 0 5px 0px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #b90008;
  margin: 0 5px 25px;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  /* padding: 0 20px; */
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 50%;
  align-items: center;
  background-color: #dedede;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #707070;
  text-align: center;
`;
