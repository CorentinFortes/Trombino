import styled from 'styled-components/native';
import { Swipeable } from 'react-native-gesture-handler';
import { Animated, Modal } from 'react-native';

const POINT_COLOR = {
  urgent: 'red',
  important: 'orange',
  normal: 'violet',
};

export const TaskCardContainer = styled.View<{
  small?: boolean;
  borderRadius?: boolean;
}>`
  display: flex;
  padding: ${(props) => (props.small ? '0 5px' : '0 10px')};
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(154, 151, 151, 0.2);
  background-color: #fffafa;
  ${(props) => props.borderRadius && 'border-radius: 10px;'}
`;

export const TaskCardContent = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => (props.small ? '5px' : '10px')};
  padding: ${(props) => (props.small ? '5px 0' : '10px 0')};
  width: 100%;
  background-color: #fffafa;
  padding-left: 10px;
`;

export const TaskTypePoint = styled.View<{
  type: 'urgent' | 'important' | 'normal';
  small?: boolean;
}>`
  border-radius: 100%;
  width: ${(props) => (props.small ? '8px' : '12px')};
  height: ${(props) => (props.small ? '8px' : '12px')};
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
  width: 90%;
`;

export const TaskTexts = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  ${(props) => !props.small && 'gap: 5px;'}
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

export const LeftActionWrapper = styled.View`
  background-color: #58c3a3;
  justify-content: center;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 0;
  width: 40%;
`;

export const RightActionWrapper = styled.View`
  background-color: red;
  justify-content: center;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  width: 40%;
`;

export const SwipeableContainer = styled(Swipeable)`
  width: 100%;
`;

export const AnimatedText = styled(Animated.Text)`
  color: #fff;
  font-family: 'Rubik_Regular';
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

export const CrossButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;
  padding: 5px;
  margin-right: 10px;
`;

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-family: 'Rubik_SemiBold';
  font-size: 20px;
  color: #1e1e1e;
`;

export const ConfirmDeleteContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fffafa;
  border: 2px solid rgba(154, 151, 151, 0.2);
  width: 100%;
  border-radius: 10px;
  padding: 30px 20px;
  gap: 20px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const ConfirmDeleteText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const ConfirmtButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  width: 100%;
`;

export const ConfirmButtonText = styled.Text`
  color: #fafaff;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;

export const CancelButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid #1e1e1e;
  width: 100%;
`;

export const CancelButtonText = styled.Text`
  color: #1e1e1e;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;
