import styled from 'styled-components/native';

const POINT_COLOR = {
  urgent: 'red',
  important: 'orange',
  normal: 'violet',
};

export const TaskCardContainer = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: row;
  padding: ${(props) => (props.small ? '5px' : '10px')};
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
`;

export const TaskCardContent = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => (props.small ? '5px' : '10px')};
  padding-left: 10px;
`;

export const TaskTypePoint = styled.View<{
  type: 'urgent' | 'important' | 'normal';
  small?: boolean;
}>`
  border-radius: 100%;
  width: ${(props) => (props.small ? '7px' : '10px')};
  height: ${(props) => (props.small ? '7px' : '10px')};
  align-self: center;
  justify-self: center;
  background: ${(props) => POINT_COLOR[props.type]};
`;

export const TaskTitle = styled.Text<{ small?: boolean }>`
  font-family: 'Rubik_Medium';
  font-size: ${(props) => (props.small ? '12px' : '16px')};
  color: #1e1e1e;
  width: 100%;
`;

export const TaskDescription = styled.Text<{ small?: boolean }>`
  font-family: 'Rubik_Regular';
  font-size: ${(props) => (props.small ? '10px' : '14px')};
  color: rgba(0, 0, 0, 0.4);
  width: 100%;
`;

export const TaskTexts = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 5px;
`;

export const ValidationContainer = styled.View`
  display: flex;
  background-color: #58c3a3;
  justify-content: center;
  width: 100px;
`;

export const ValidationText = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 14px;
  color: #fff;
  text-align: center;
`;
