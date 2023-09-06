import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 75px;
  height: 100%;
  width: 100%;
  background-color: #fffafa;
  color: red;
`;

export const HeaderProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0;
  width: 100%;
`;

export const HeaderProfileLeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const HeaderText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 16px;
  color: #1e1e1e;
`;

export const FavoritesContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 5px 0;
  gap: 10px;
`;

export const FavoritesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export const ScrollContent = styled.ScrollView`
  width: 100%;
  padding-top: 20px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
  padding-bottom: 50px;
`;

export const SectionContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const SectionTitle = styled.Text`
  font-family: 'Rubik_SemiBold';
  font-size: 18px;
  color: #1e1e1e;
`;

export const HorizontalScrollView = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 0;
`;
