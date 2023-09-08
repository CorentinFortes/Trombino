import { Dimensions, Modal } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  justify-content: center;
  padding-top: 50px;
`;

export const RenderDay = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

export const AddEventButton = styled.TouchableOpacity`
  position: absolute;
  border-radius: 50px;
  width: 65px;
  height: 65px;
  background-color: white;
  bottom: 40px;
  right: 30px;
  align-items: center;
`;

export const ModalContainer = styled(Modal)``;

export const ModalContent = styled.View`
  position: absolute;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const AddEventContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  border-radius: 10px;
  border: 2px solid rgba(154, 151, 151, 0.2);
  background: #fff;
  width: 100%;
  gap: 25px;
`;

export const MediumText = styled.Text<{ color?: string }>`
  font-size: 20px;
  font-weight: 500;
  color: ${({ color }) => (color ? color : '#000')};
  font-family: 'Rubik_Medium';
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const EventButton = styled.TouchableOpacity<{ color?: string }>`
  background-color: ${({ color }) => (color ? color : '#1e1e1e')};
  border-radius: 10px;
  border: 1.667px solid #1e1e1e;
  padding: 9px 33px;
`;
