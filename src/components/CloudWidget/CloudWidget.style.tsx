import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';
import { Modal } from 'react-native';

export const Widget = styled(_Widget)`
  background-color: #fbe5cc;
  align-items: flex-start;
  gap: 6px;
  padding: 0;
`;

export const LargeContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;

export const TopContent = styled.View<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : 10)}px;
`;

export const TextMedium = styled.Text<{ fontSize?: number; color?: string }>`
  font-family: 'Rubik_Medium';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: ${({ color }) => (color ? color : '#491C0D')};
  font-weight: 600;
`;

export const TextRegular = styled.Text<{ fontSize?: number; color?: string }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
  color: ${({ color }) => (color ? color : '#491C0D')};
  font-weight: 400;
`;

export const UploadContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: rgba(73, 28, 13, 0.2);
  width: 100%;
  height: 90px;
  border-radius: 8px;
`;

export const UploadSmallContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgba(73, 28, 13, 0.2);
  width: 100%;
  border-radius: 8px;
  padding: 10px;
`;
export const UploadMediumContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: rgba(73, 28, 13, 0.2);
  width: 100%;
  border-radius: 8px;
  padding: 5px 25%;
`;

export const DownloadButton = styled.TouchableOpacity<{ maxWidth?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #491c0d;
  padding: 5px 20px;
  border-radius: 7px;
  margin-top: 4px;
  width: ${({ maxWidth }) => (maxWidth ? '100%' : 'auto')};
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const HorizontalContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const MediumContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 10px 20px;
`;

export const FlexColumnContainer = styled.View<{ paddingTop?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : 0)}px;
`;

export const SmallContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 10px;
`;

export const ModalContainer = styled(Modal)``;

export const ModalContent = styled.View<{ basicColor?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ basicColor }) =>
    basicColor ? 'rgba(0, 0, 0, 0.2)' : 'rgba(73, 28, 13, 0.6)'};
  padding: 20px;
`;

export const FileDownloadContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid rgba(154, 151, 151, 0.2);
`;

export const FilesDownloadContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const DownloadFilesContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  background-color: #fafaff;
  border: 2px solid rgba(154, 151, 151, 0.2);
  border-radius: 10px;
  width: 100%;
  transition: ease-out 150ms;
  height: 40%;
  gap: 20px;
`;

export const TopContentDownload = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
