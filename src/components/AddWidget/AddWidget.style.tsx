import { Modal } from 'react-native';
import styled from 'styled-components/native';

export const AddWidgetContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid rgba(154, 151, 151, 0.2);
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

export const SelectSizeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fafaff;
  border: 2px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
  width: 100%;
  transition: ease-out 150ms;
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
`;

export const ModalTitle = styled.Text`
  font-family: 'Rubik_SemiBold';
  font-size: 20px;
  color: #1e1e1e;
`;

export const SizeContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  padding-top: 10px;
`;

export const SizeButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WidgetButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(78, 78, 78, 0.3);
  border-radius: 10px;
  width: 45%;
  height: 100px;
  padding: 20px;
  gap: 5px;
`;

export const WidgetTitle = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 14px;
  color: #1e1e1e;
`;
