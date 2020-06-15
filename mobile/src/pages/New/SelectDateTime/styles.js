import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10 },
})`
  padding: 0 10px;
`;
export const Hour = styled(RectButton)`
  background: #dedede;
  border-radius: 4px;
  padding: 10px 20px;
  flex: 1;
  opacity: ${props => (props.enable ? 1 : 0.6)};
  align-items: center;
  margin: 0 10px 20px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #707070;
`;
