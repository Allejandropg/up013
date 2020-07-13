import styled from 'styled-components/native';

export const Modal = styled.Modal`
  background-color: #00f;
  justify-content: center;
  align-items: center;
`;

export const ModalAreaClose = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #707070;
  opacity: 0.5;
  z-index: -1;
`;

export const ModalArea = styled.View`
  background-color: #fff;
  margin: auto;
  width: 80%;
  border-radius: 19px;
  padding: 30px;
`;
