import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 10px;
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

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  /* padding: 0 10px; */
`;

export const Hour = styled(RectButton)`
  /* background: #dedede; */
  background: ${props => (props.enable ? '#DEDEDE' : '#707070')};
  border-radius: 10px;
  flex: 1;
  opacity: ${props => (props.enable ? 1 : 0.6)};
  align-items: center;
  justify-content: center;
  /* width: 90%; */
  margin: 0 5px 10px;
  height: 39px;
`;

export const HourTitle = styled.Text`
  font-size: 18px;
  color: ${props => (props.enable ? '#707070' : '#FFF')};
`;
