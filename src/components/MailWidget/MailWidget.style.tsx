import styled from 'styled-components/native';

export const MainContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: #fafaff;
`;

export const TopContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopLeftContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TitleWidget = styled.Text`
  font-size: 24px;
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: #1e1e1e;
`;

export const TopRightContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: #f13838;
  border-radius: 53px;
  padding: 4px 10px;
`;

export const TextUnread = styled.Text`
  font-size: 8px;
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: #fafaff;
`;

export const MailTitle = styled.Text`
  font-size: 14px;
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: #1e1e1e;
`;

export const PointUnread = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  color: #f13838;
  background-color: #f13838;
`;

export const SenderText = styled.Text`
  font-size: 11px;
  font-family: 'Rubik_Light';
  font-weight: 400;
  color: #1e1e1e;
`;

export const MailContent = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Rubik_Light';
  font-size: 10px;
  font-weight: 400;
`;

export const MailContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 20px 10px 20px;
`;

export const MailsContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleAndSender = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
