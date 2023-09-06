import styled from 'styled-components/native';

export const CardContainer = styled.View<{ width?: number; height?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6.66px;
  border: 0.5px solid rgba(154, 151, 151, 0.4);
  width: ${({ width }) => (width ? width : 85)}px;
  height: ${({ height }) => (height ? height : 115)}px;
`;

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 9px;
`;

export const TextName = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Medium';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 8.325)}px;
  color: #1e1e1e;
  font-weight: 500;
`;

export const TextEmail = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 6)}px;
  color: rgba(30, 30, 30, 0.7);
  font-weight: 300;
`;
