import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { Dropdown } from 'react-native-element-dropdown';

const POINT_COLOR = {
  urgent: 'red',
  important: 'orange',
  normal: 'violet',
};

export const PageContainer = styled.View`
  background-color: #fffafa;
  width: 100%;
  height: 100%;
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
  color: #480d49;
  font-family: 'Rubik_SemiBold';
  font-size: 24px;
  font-weight: 500;
`;

export const ModalContainer = styled(Modal)``;

export const ModalContent = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const AddTodoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #fafaff;
  border-radius: 10px;
  border: 2px solid rgba(78, 78, 78, 0.3);
  gap: 10px;
`;

export const AddTodoTitle = styled.Text`
  font-family: 'Rubik_SemiBold';
  font-size: 24px;
  color: #1e1e1e;
`;

export const ConnectButton = styled.TouchableOpacity`
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ConnectButtonText = styled.Text`
  color: #fafaff;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;

export const TaskTypeDropdown = styled(Dropdown)`
  width: 100%;
`;

export const TaskCircle = styled.View<{
  type: 'urgent' | 'important' | 'normal';
}>`
  border-radius: 100%;
  width: 10px;
  height: 10px;
  align-self: center;
  margin-right: 10px;
  justify-self: center;
  background: ${(props) => POINT_COLOR[props.type]};
`;

export const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;

export const ItemText = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 14px;
  align-self: center;
  color: #1e1e1e;
  text-align: center;
`;

export const CrossButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const ScrollTodos = styled.ScrollView`
  width: 100%;
  padding-bottom: 20px;
`;

export const TodosContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
