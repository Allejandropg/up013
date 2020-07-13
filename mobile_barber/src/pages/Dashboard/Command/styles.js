import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0px 37px 0;
  /* background: #f00; */
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #707070;
  margin-bottom: 6px;
`;

export const Btn = styled.TouchableOpacity`
  background: #dedede;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 6px 13px 10px 17px;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  color: #707070;
`;

export const AddBtn = styled.TouchableOpacity`
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 6px 13px 10px 17px;
  margin-bottom: 16px;
`;

export const AddBtnText = styled.Text`
  font-size: 14px;
  color: #060c62;
  font-weight: bold;
  font-style: italic;
`;

export const Resumo = styled.Text`
  font-size: 18px;
  color: #707070;
  text-align: center;
`;

export const AreaResumo = styled.View`
  border-radius: 13px;
  background-color: #dedede;
  padding: 7px 13px 11px 17px;
  margin-bottom: 9px;
`;

export const ResumoTitle = styled.Text`
  color: #707070;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 7px;
`;

export const DotLine = styled.View`
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 2px;
  border: 1px dashed ${props => props.color};
`;

export const ResumoLine = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 16px;
`;

export const ResumoText = styled.Text`
  color: #707070;
  background-color: #dedede;
  font-size: 14px;
`;

export const AreaTotal = styled.View`
  background: #32bea6;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 6px 13px 10px 17px;
  margin-bottom: 16px;
`;

export const TotalLine = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const TotalText = styled.Text`
  background: #32bea6;
  color: #fff;
  font-size: 18px;
`;

export const TotalPrice = styled.Text`
  background: #32bea6;
  color: #fff;
  font-size: 14px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  background-color: rgb(6, 11, 97);
`;

export const ModalList = styled.FlatList``;

export const ModalTouch = styled.TouchableWithoutFeedback``;

export const ModalText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;
