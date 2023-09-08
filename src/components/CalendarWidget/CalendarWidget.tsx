import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetType } from '../../types/widgetType';
import { TouchableOpacity } from 'react-native';
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
import { getNbEvents } from '.';
import { getEvents, getFulldate } from '../../pages/calendar';

const CalendarWidgetComponent: React.FC<WidgetType> = ({
  size,
  deleteFunction,
  id,
  onPress,
}) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const date = moment().format('L');
  const [nbEvents, setNbEvents] = useState<number>(0);

  useEffect(() => {
    getEvents().then((events) => {
      if (events.nbEvents > 0) {
        const tmpDate = getFulldate();
        if (events && events.events[tmpDate]) {
          setNbEvents(events.events[tmpDate].length);
        }
      }
    });
  }, []);

  return (
    <>
      <TouchableOpacity
        onLongPress={() => setOpenSizeModal(true)}
        onPress={onPress}
      >
        <Widget
          size={currentSize}
          icon={
            <MaterialCommunityIcons name="calendar" size={24} color="black" />
          }
          onLongPress={() => setOpenSizeModal(true)}
          setCurrentSize={setCurrentSize}
          setOpenSizeModal={setOpenSizeModal}
          openSizeModal={openSizeModal}
          id={id}
          deleteFunction={deleteFunction}
          onPress={onPress}
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
                  {nbEvents} event today!
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
                  <TextMedium fontSize={14}>{nbEvents} event today!</TextMedium>
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
              <TextMedium fontSize={32}>{nbEvents}</TextMedium>
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
                  <TextMedium fontSize={14}>{nbEvents} event today!</TextMedium>
                  <TextRegular fontSize={16}>{date}</TextRegular>
                </HeaderContainer>
              </MediumContainer>
            </>
          )}
        </Widget>
      </TouchableOpacity>
    </>
  );
};

export const CalendarWidget = React.memo(CalendarWidgetComponent);
