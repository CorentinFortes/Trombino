import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';

export const Widget = styled(_Widget)`
  background-color: #fbccd1;
  align-items: flex-start;
  gap: 6px;
`;

export const TopContent = styled.View<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: ${({ gap }) => (gap ? gap : 10)}px;
`;

export const TextMedium = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Medium';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: #511111;
  font-weight: 600;
`;

export const TextRegular = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: #511111;
  font-weight: 400;
`;

export const EmployeeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TeamTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12%;
`;