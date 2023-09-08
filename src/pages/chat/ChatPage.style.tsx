import styled from 'styled-components/native';

export const PageContainer = styled.View<{ keyboardIsOpen: boolean }>`
  background-color: #fffafa;
  width: 100%;
  height: ${(props) => (props.keyboardIsOpen ? '65%' : '100%')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 20px;
  gap: 25px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
  width: 100%;
  padding: 3px;
`;

export const InputMessage = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rubik_Regular';
  width: 100%;
  color: #1e1e1e;
  padding: 10px;
  height: 75px;
  flex: 2;
`;

export const SendButton = styled.TouchableOpacity`
  background-color: #ccdffb;
  border-radius: 7px;
  padding: 5px;
  align-self: flex-end;
`;

export const MessagesContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
`;

export const MessagesContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
`;

export const Message = styled.Text`
  font-family: 'Rubik_Regular';
  color: #1e1e1e;
  font-size: 14px;
`;

export const ScrollMessages = styled.ScrollView`
  width: 100%;
  padding-bottom: 20px;
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
  color: #08374b;
  font-family: 'Rubik_Regular';
  font-size: 24px;
  font-weight: 500;
`;

export const MessageContainer = styled.View<{ receiver: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.receiver ? 'row' : 'row-reverse')};
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const AvatarContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

export const MessageContent = styled.View<{ receiver: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 10%;
  min-height: 50px;
  border: 1px solid rgba(154, 151, 151, 0.2);
  flex: 1;
  background-color: ${(props) => (props.receiver ? '#fafaff' : '#CCDFFB')};
`;
