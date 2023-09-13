import React, { useState } from 'react';
import { AntDesign, Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { WidgetType } from '../../types/widgetType';
import {
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import {
  DownloadButton,
  DownloadFilesContainer,
  FileDownloadContainer,
  FilesDownloadContainer,
  FlexColumnContainer,
  HeaderContainer,
  HorizontalContainer,
  LargeContainer,
  MediumContainer,
  ModalContainer,
  ModalContent,
  SmallContainer,
  TextMedium,
  TextRegular,
  TopContent,
  TopContentDownload,
  UploadButton,
  UploadContainer,
  UploadMediumContainer,
  UploadSmallContainer,
  Widget,
} from './CloudWidget.style';
import {
  DownloadFile,
  File,
  UploadFile,
  listAllFiles,
} from '../../api/storage';
import * as DocumentPicker from 'expo-document-picker';
import LottieView from 'lottie-react-native';

const CalendarWidgetComponent: React.FC<WidgetType> = ({
  size,
  deleteFunction,
  id,
}) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const [fileName, setFileName] = useState('');
  const [blobFile, setBlobFile] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const animation: React.LegacyRef<LottieView> = React.useRef(null);
  const [modalOpenDownload, setModalOpenDownload] = useState(false);
  const [downloadsFiles, setDownloadsFiles] = useState<File[]>([]);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result !== null && result.assets) {
      const r = await fetch(result.assets[0].uri);
      const b = await r.blob();
      setFileName(result.assets[0].name);
      setBlobFile(b);
      setIsUploading(true);
      animation.current?.play();
    }
  };

  React.useEffect(() => {
    if (blobFile !== null && fileName !== '') {
      UploadFile(blobFile, fileName);
      setFileName('');
      setBlobFile(null);
    }
  }, [blobFile, fileName]);
  const downloading = false;
  return (
    <>
      <TouchableOpacity onLongPress={() => setOpenSizeModal(true)}>
        <Widget
          size={currentSize}
          icon={
            <Ionicons name="cloud-download-outline" size={24} color="black" />
          }
          onLongPress={() => setOpenSizeModal(true)}
          setCurrentSize={setCurrentSize}
          setOpenSizeModal={setOpenSizeModal}
          openSizeModal={openSizeModal}
          deleteFunction={deleteFunction}
          id={id}
        >
          {currentSize === 'LARGE' && (
            <>
              <LargeContainer>
                <TopContent>
                  <Ionicons
                    name="cloud-download-outline"
                    size={24}
                    color="#491C0D"
                  />
                  <TextMedium>Cloud</TextMedium>
                </TopContent>
                <UploadContainer onPress={pickDocument}>
                  <Feather name="upload" size={16} color="#491C0D" />
                  <TextMedium fontSize={14}>Add new file</TextMedium>
                </UploadContainer>
                <DownloadButton
                  onPress={() => {
                    listAllFiles().then((res) => {
                      if (res) {
                        setDownloadsFiles(res);
                      }
                      setModalOpenDownload(true);
                    });
                  }}
                  maxWidth
                >
                  <TextMedium color="#FAFAFF" fontSize={16}>
                    Download files
                  </TextMedium>
                </DownloadButton>
              </LargeContainer>
            </>
          )}
          {currentSize === 'HEADER' && (
            <>
              <HeaderContainer>
                <TopContent>
                  <Ionicons
                    name="cloud-download-outline"
                    size={16}
                    color="#491C0D"
                  />
                </TopContent>
                <TopContent>
                  <DownloadButton
                    onPress={() => {
                      listAllFiles().then((res) => {
                        if (res) {
                          setDownloadsFiles(res);
                        }
                        setModalOpenDownload(true);
                      });
                    }}
                  >
                    <TextMedium color="#FAFAFF" fontSize={14}>
                      Download files
                    </TextMedium>
                  </DownloadButton>
                  <DownloadButton onPress={pickDocument}>
                    <TextMedium color="#FAFAFF" fontSize={14}>
                      Upload files
                    </TextMedium>
                  </DownloadButton>
                </TopContent>
              </HeaderContainer>
            </>
          )}
          {currentSize === 'SMALL' && (
            <>
              <SmallContainer>
                <TopContent gap={5}>
                  <Ionicons
                    name="cloud-download-outline"
                    size={16}
                    color="#491C0D"
                  />
                  <TextMedium fontSize={12}>Cloud</TextMedium>
                </TopContent>
                <FlexColumnContainer>
                  <UploadSmallContainer onPress={pickDocument}>
                    <Feather name="upload" size={12} color="#491C0D" />
                    <TextMedium fontSize={12}>Add new file</TextMedium>
                  </UploadSmallContainer>
                  <DownloadButton
                    onPress={() => {
                      listAllFiles().then((res) => {
                        if (res) {
                          setDownloadsFiles(res);
                        }
                        setModalOpenDownload(true);
                      });
                    }}
                    maxWidth
                  >
                    <TextMedium color="#FAFAFF" fontSize={12}>
                      Download files
                    </TextMedium>
                  </DownloadButton>
                </FlexColumnContainer>
              </SmallContainer>
            </>
          )}
          {currentSize === 'MEDIUM' && (
            <>
              <MediumContainer>
                <TopContent gap={6}>
                  <Ionicons
                    name="cloud-download-outline"
                    size={20}
                    color="#491C0D"
                  />
                  <TextMedium fontSize={16}>Cloud</TextMedium>
                </TopContent>
                <FlexColumnContainer>
                  <UploadMediumContainer onPress={pickDocument}>
                    <Feather name="upload" size={10} color="#491C0D" />
                    <TextMedium fontSize={10}>Add new file</TextMedium>
                  </UploadMediumContainer>
                  <DownloadButton
                    onPress={() => {
                      listAllFiles().then((res) => {
                        if (res) {
                          setDownloadsFiles(res);
                        }
                        setModalOpenDownload(true);
                      });
                    }}
                    maxWidth
                  >
                    <TextMedium color="#FAFAFF" fontSize={10}>
                      Download files
                    </TextMedium>
                  </DownloadButton>
                </FlexColumnContainer>
              </MediumContainer>
            </>
          )}
        </Widget>
      </TouchableOpacity>
      {isUploading && (
        <ModalContainer transparent>
          <ModalContent>
            <LottieView
              ref={animation}
              source={require('../../../assets/uploadAnimation.json')}
              loop={false}
              onAnimationFinish={() => setIsUploading(false)}
              style={{
                width: 200,
                height: 200,
              }}
              speed={3}
            />
          </ModalContent>
        </ModalContainer>
      )}
      {modalOpenDownload && (
        <ModalContainer transparent>
          <ModalContent basicColor>
            <DownloadFilesContainer>
              <TopContentDownload>
                <TopContent>
                  <Ionicons
                    name="cloud-download-outline"
                    size={24}
                    color="#491C0D"
                  />
                  <TextMedium>Cloud</TextMedium>
                </TopContent>
                <TouchableOpacity onPress={() => setModalOpenDownload(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </TouchableOpacity>
              </TopContentDownload>
              <ScrollView style={{ width: '100%' }}>
                <FilesDownloadContainer>
                  {downloadsFiles.map((file, index) => (
                    <FileDownloadContainer
                      key={index}
                      onPress={() => DownloadFile(file)}
                    >
                      <TextRegular fontSize={16} numberOfLines={1}>
                        {file.name}
                      </TextRegular>
                      <Feather name="download" size={16} color="#491C0D" />
                    </FileDownloadContainer>
                  ))}
                </FilesDownloadContainer>
              </ScrollView>
            </DownloadFilesContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export const CloudWidget = React.memo(CalendarWidgetComponent);
