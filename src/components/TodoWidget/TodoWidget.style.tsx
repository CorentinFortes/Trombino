import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';
import { TaskCard as _TaskCard } from '../TaskCard';

export const Widget = styled(_Widget)`
  background-color: #fbccee;
  align-items: flex-start;
  gap: 6px;
  padding: 0;
`;

export const LargeContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 20px;
  gap: 10px;
  padding: 20px;
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

export const TaskContent = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const TaskCard = styled(_TaskCard)`
  width: 100%;
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 0 10px;
`;

export const HeaderLeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 16px;
`;

export const TaskToDoCount = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 20px;
`;

export const TaskToDoCountBig = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 40px;
`;

export const MediumContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const SmallContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
`;
