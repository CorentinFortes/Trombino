import styled from 'styled-components/native';

export const PageContainer = styled.View`
  background-color: #fffafa;
  height: 100%;
  width: 100%;
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const TopLeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleText = styled.Text`
  color: #000;
  font-family: 'Rubik_Medium';
  font-size: 28px;
  font-weight: 500;
`;

export const MailsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ScrollMail = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const MailsContent = styled.View`
  display: flex;
  flex-direciton: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 5px;
`;

export const MailSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const TopRightContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  background-color: #f13838;
  border-radius: 53px;
  padding: 5px 10px;
`;

export const TextUnread = styled.Text`
  font-size: 14px;
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: #fafaff;
`;

export const MailContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 10px;
  gap: 10px;
`;

export const MailTopContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MailTopLeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`;

export const MailDescription = styled.Text`
  color: rgba(0, 0, 0, 0.4);
  font-family: 'Rubik_Regular';
  font-size: 14px;
`;

export const MailTitle = styled.Text`
  color: #1e1e1e;
  font-family: 'Rubik_SemiBold';
  font-size: 16px;
`;

export const PointUnread = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 100px;
  color: #f13838;
  background-color: #f13838;
`;

export const SenderText = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 14px;
  color: #1e1e1e;
`;
