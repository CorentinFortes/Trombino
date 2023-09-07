import React, { useState } from 'react';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';
import { WidgetSize, WidgetType } from '../../types/widgetType';
import { TouchableOpacity } from 'react-native';
import {
  CrossButton,
  DeleteButton,
  DeleteButtonText,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SelectSizeContainer,
  SizeButton,
  SizeContainer,
} from '../Widget/Widget.style';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import {
  EventContainer,
  FlexColumnContainer,
  HeaderContainer,
  HorizontalContainer,
  MediumContainer,
  SmallContainer,
  TextMedium,
  TextRegular,
  TopContent,
  UploadButton,
  UploadContainer,
  Widget,
} from './CloudWidget.style';
import moment from 'moment';

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
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize(targetSize);
    setOpenSizeModal(false);
  };
  const date = moment().format('L');
  const deleteWidget = () => {
    setOpenSizeModal(false);
    deleteFunction(id);
  };
  return (
    <>
      <TouchableOpacity onLongPress={() => setOpenSizeModal(true)}>
        <Widget
          size={currentSize}
          icon={
            <Ionicons name="cloud-download-outline" size={24} color="black" />
          }
          onLongPress={() => setOpenSizeModal(true)}
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
      {openSizeModal && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setOpenSizeModal(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <SizeContainer>
                <SizeButton onPress={() => changeSize(WidgetSize.LARGE)}>
                  <LargeSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.MEDIUM)}>
                  <MediumSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.SMALL)}>
                  <SmallSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.HEADER)}>
                  <HeaderSizeIcon />
                </SizeButton>
              </SizeContainer>
              <DeleteButton onPress={() => deleteWidget()}>
                <DeleteButtonText>Delete</DeleteButtonText>
              </DeleteButton>
            </SelectSizeContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export const CloudWidget = React.memo(CalendarWidgetComponent);
