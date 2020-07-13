import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBG = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 40%;
`;

export const ImageRound = styled.Image`
  position: absolute;
  top: 27%;
  left: 50%;
  width: 164px;
  height: 164px;
  margin-top: -82px;
  margin-left: -82px;
  z-index: 2;
`;

export const UseArea = styled.View`
  position: absolute;
  top: 27%;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: auto;
  background-color: #fff;
  border-top-left-radius: 80px;
  padding-top: 82px;
  z-index: 1;
`;
