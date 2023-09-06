import styled from 'styled-components/native';

export const PageContainer = styled.View`
  background-color: #fffafa;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 20px;
  gap: 25px;
`;

export const TopContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const TitleText = styled.Text`
  color: #000;
  font-family: 'Rubik_Medium';
  font-size: 16px;
  font-weight: 500;
`;

export const TrombinoContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
