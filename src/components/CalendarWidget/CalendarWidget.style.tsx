import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';

export const Widget = styled(_Widget)`
  background-color: #e9ccfb;
  align-items: flex-start;
  gap: 20px;
`;

export const TopContent = styled.View<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : 10)}px;
`;

export const TextMedium = styled.Text<{ fontSize?: number; color?: string }>`
  font-family: 'Rubik_Medium';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: ${({ color }) => (color ? color : '#49136a')};
  font-weight: 600;
`;

export const TextRegular = styled.Text<{ fontSize?: number; color?: string }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: ${({ color }) => (color ? color : '#49136a')};
  font-weight: 400;
`;

export const EventContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 6.442px 16.106px;
  border-radius: 8px;
  background-color: #f13838;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MediumContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const FlexColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
