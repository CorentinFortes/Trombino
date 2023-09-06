import styled from 'styled-components/native';

export const PageContainer = styled.View`
  background-color: #fffafa;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfilePageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  padding-top: 50px;
  background-color: #fffafa;
  margin-bottom: 40%;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
  width: 100%;
`;

export const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 205px;
  border-radius: 100%;
  border: 5px solid rgba(154, 151, 151, 0.4);
`;

export const NameWorkContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const NameText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 24px;
  color: #1e1e1e;
  font-weight: 500;
`;

export const WorkText = styled.Text`
  font-family: 'Rubik_Light';
  font-size: 15px;
  color: #000;
  font-weight: 400;
`;

export const ProfileInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 80%;
`;

export const LineInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 37px;
`;

export const TitleInfoText = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 14px;
  color: rgba(30, 30, 30, 0.7);
  font-weight: 400;
`;

export const RepInfoText = styled.Text`
  font-family: 'Rubik_Regular';
  font-size: 14px;
  color: #000;
  font-weight: 400;
`;

export const ContactButton = styled.TouchableOpacity`
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-top: 10%;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: #fffafa;
  border-radius: 10px;
  border: 1px solid #1e1e1e;
  margin-top: 20%;
`;

export const ContactButtonText = styled.Text`
  color: #fafaff;
  font-size: 20px;
  padding: 10px;
  font-family: 'Rubik_Medium';
  font-weight: 500;
  padding: 8px 33px;
`;

export const ArrowButton = styled.TouchableOpacity`
  align-self: flex-start;
`;
