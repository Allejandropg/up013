import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#fff', '#fff'],
})`
  flex: 1;
  border-top-left-radius: 20px;
`;
