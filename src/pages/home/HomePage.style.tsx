import styled from 'styled-components/native';

export const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  height: 100%;
  width: 100%;
  background-color: #fffafa;
`;

export const FavoritesContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  padding: 5px;
  gap: 10px;
`;

export const FavoritesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
