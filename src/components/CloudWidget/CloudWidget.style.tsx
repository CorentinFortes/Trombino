import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';

export const Widget = styled(_Widget)`
  background-color: #fbe5cc;
  align-items: flex-start;
  gap: 6px;
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
  color: ${({ color }) => (color ? color : '#491C0D')};
  font-weight: 600;
`;

export const TextRegular = styled.Text<{ fontSize?: number; color?: string }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: ${({ color }) => (color ? color : '#491C0D')};
  font-weight: 400;
`;

export const UploadContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: rgba(73, 28, 13, 0.2);
  width: 100%;
  height: 90px;
  border-radius: 8px;
`;

export const UploadButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #491c0d;
  width: 100%;
  padding: 5px 20px;
  border-radius: 7px;
  margin-top: 4px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

export const HorizontalContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

export const FlexColumnContainer = styled.View<{ paddingTop?: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;

export const SmallContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
