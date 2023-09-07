import React, { useState } from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
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
  MediumContainer,
  TextMedium,
  TextRegular,
  TopContent,
  Widget,
} from './CalendarWidget.style';
import moment from 'moment';

const CalendarWidgetComponent: React.FC<WidgetType> = ({
  size,
  deleteFunction,
  id,
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
            <MaterialCommunityIcons name="calendar" size={24} color="black" />
          }
          onLongPress={() => setOpenSizeModal(true)}
        >
          {currentSize === 'LARGE' && (
            <>
              <TopContent gap={6}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="#49136A"
                />
                <TextMedium>Calendar</TextMedium>
              </TopContent>
              <EventContainer>
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={18}
                  color="white"
                />
                <TextMedium color="#FFF" fontSize={12}>
                  1 event
                </TextMedium>
              </EventContainer>
              <TextMedium
                fontSize={36}
                color="rgba(73, 19, 106, 0.50)"
                style={{ paddingTop: 20 }}
              >
                {date}
              </TextMedium>
            </>
          )}
          {currentSize === 'HEADER' && (
            <>
              <HeaderContainer>
                <TopContent>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={18}
                    color="#49136A"
                  />
                  <TextMedium fontSize={14}>1 event today!</TextMedium>
                </TopContent>
                <TextRegular fontSize={10} color="#9970B3">
                  {date}
                </TextRegular>
              </HeaderContainer>
            </>
          )}
          {currentSize === 'SMALL' && (
            <>
              <TopContent gap={6}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={18}
                  color="#49136A"
                />
                <TextMedium fontSize={12}>Calendar</TextMedium>
              </TopContent>
              <TextMedium fontSize={32}>1</TextMedium>
              <FlexColumnContainer>
                <TextMedium fontSize={14}>Event Today</TextMedium>
                <TextRegular fontSize={12}>{date}</TextRegular>
              </FlexColumnContainer>
            </>
          )}
          {currentSize === 'MEDIUM' && (
            <>
              <MediumContainer>
                <TopContent gap={6}>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={18}
                    color="#49136A"
                  />
                  <TextMedium fontSize={12}>Calendar</TextMedium>
                </TopContent>
                <HeaderContainer style={{ paddingTop: 5 }}>
                  <TextMedium fontSize={14}>1 event today!</TextMedium>
                  <TextRegular fontSize={16}>{date}</TextRegular>
                </HeaderContainer>
              </MediumContainer>
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

export const CalendarWidget = React.memo(CalendarWidgetComponent);
