import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f;
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
  top: 31.25%;
  left: 50%;
  width: 164px;
  height: 164px;
  margin-top: -82px;
  margin-left: -82px;
  z-index: 2;
  /* border: 1px #ff0; */
`;

export const UseArea = styled.ScrollView`
  position: absolute;
  top: 31.25%;
  bottom: 0;
  margin-top: auto;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 80px;
  padding-top: 87px;
`;
