import React, { useState } from 'react';
import { Feather, Ionicons, Octicons } from '@expo/vector-icons';
import { WidgetType } from '../../types/widgetType';
import { TouchableOpacity } from 'react-native';
import {
  FlexColumnContainer,
  HeaderContainer,
  HorizontalContainer,
  SmallContainer,
  TextMedium,
  TextRegular,
  TopContent,
  UploadButton,
  UploadContainer,
  Widget,
} from './CloudWidget.style';

type CloudWidgetProps = {
  downloading: boolean;
} & WidgetType;

const CalendarWidgetComponent: React.FC<CloudWidgetProps> = ({
  size,
  deleteFunction,
  id,
  downloading,
}) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
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
              <TopContent>
                <Ionicons
                  name="cloud-download-outline"
                  size={24}
                  color="#491C0D"
                />
                <TextMedium>Cloud</TextMedium>
              </TopContent>
              <UploadContainer>
                <Feather name="upload" size={16} color="#491C0D" />
                <TextMedium fontSize={14}>Add new downloading</TextMedium>
              </UploadContainer>
              <UploadButton>
                <TextMedium color="#FAFAFF" fontSize={16}>
                  Upload files
                </TextMedium>
              </UploadButton>
            </>
          )}
          {currentSize === 'HEADER' && (
            <>
              {!downloading ? (
                <HeaderContainer>
                  <TopContent gap={5}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={14}>Personnal</TextMedium>
                  </TopContent>
                  <TopContent>
                    <Octicons name="stack" size={16} color="#491C0D" />
                    <TextMedium fontSize={14}>0.1 / 10 gb</TextMedium>
                  </TopContent>
                </HeaderContainer>
              ) : (
                <HeaderContainer>
                  <TopContent gap={5}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={14}>Picture.png</TextMedium>
                  </TopContent>
                  <TopContent>
                    <Feather name="download" size={16} color="black" />
                    <TextMedium fontSize={14}>10/100%</TextMedium>
                  </TopContent>
                </HeaderContainer>
              )}
            </>
          )}
          {currentSize === 'SMALL' && (
            <>
              {downloading ? (
                <SmallContainer>
                  <TopContent gap={5}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={12}>Cloud</TextMedium>
                  </TopContent>
                  <TopContent>
                    <Feather name="download" size={24} color="black" />
                    <TextMedium fontSize={16}>10/100%</TextMedium>
                  </TopContent>
                  <FlexColumnContainer>
                    <TextMedium fontSize={12}>Available space</TextMedium>
                    <TextRegular fontSize={12}>9.9 gB</TextRegular>
                  </FlexColumnContainer>
                </SmallContainer>
              ) : (
                <SmallContainer>
                  <TopContent gap={5}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={12}>Cloud</TextMedium>
                  </TopContent>
                  <TextMedium fontSize={12}>No download</TextMedium>
                  <FlexColumnContainer paddingTop={15}>
                    <TextMedium fontSize={12}>Available space</TextMedium>
                    <TextRegular fontSize={12}>9.9 gB</TextRegular>
                  </FlexColumnContainer>
                </SmallContainer>
              )}
            </>
          )}
          {currentSize === 'MEDIUM' && (
            <>
              {downloading ? (
                <>
                  <TopContent gap={6}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={12}>Cloud</TextMedium>
                  </TopContent>
                  <HorizontalContainer>
                    <FlexColumnContainer>
                      <TextMedium fontSize={14}>Picture.png</TextMedium>
                      <TextRegular fontSize={10}>
                        Available space 9.9gb
                      </TextRegular>
                    </FlexColumnContainer>
                    <TopContent gap={10}>
                      <Feather name="download" size={16} color="black" />
                      <TextMedium fontSize={14}>10/100%</TextMedium>
                    </TopContent>
                  </HorizontalContainer>
                </>
              ) : (
                <>
                  <TopContent gap={6}>
                    <Ionicons
                      name="cloud-download-outline"
                      size={16}
                      color="#491C0D"
                    />
                    <TextMedium fontSize={12}>Cloud</TextMedium>
                  </TopContent>
                  <FlexColumnContainer>
                    <TextMedium fontSize={14}>No download</TextMedium>
                    <TextRegular fontSize={10}>
                      Available space 9.9gb
                    </TextRegular>
                  </FlexColumnContainer>
                </>
              )}
            </>
          )}
        </Widget>
      </TouchableOpacity>
    </>
  );
};

export const CloudWidget = React.memo(CalendarWidgetComponent);
