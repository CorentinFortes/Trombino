import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6.66px;
  border: 0.5px solid rgba(154, 151, 151, 0.4);
  width: 85px;
  height: 115px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 9px;
`;

export const TextName = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 8.325px;
  color: #1e1e1e;
  font-weight: 500;
`;

export const TextEmail = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 6px;
  color: rgba(30, 30, 30, 0.7);
  font-weight: 300;
`;
