import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaSchedule } from 'react-native-calendars';
import {
  AddEventButton,
  AddEventContainer,
  ButtonsContainer,
  CrossButton,
  DeleteButton,
  DeleteButtonText,
  EventButton,
  InputContainer,
  MediumText,
  ModalContainer,
  ModalContent,
  ModalHeader,
  PageContainer,
  RenderDay,
} from './CalendarPage.style';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeKeyOfStorage, findItemInStorage, getDate, getEvents } from '.';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

type CalendarProps = StackScreenProps<RootStackParamList, 'Calendar'>;

export const CalendarPage: React.FC<CalendarProps> = ({
  navigation,
  route,
}) => {
  const [items, setItems] = React.useState<AgendaSchedule>({});
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>('');
  const [date, setDate] = React.useState<string>('');
  const [nbEvents, setNbEvents] = React.useState<number>(0);
  const [modalEvent, setModalEvent] = React.useState<boolean>(false);
  const [eventSelectedName, setEventSelectedName] = React.useState<string>('');
  const [eventSelectedDate, setEventSelectedDate] = React.useState<string>('');
  const [newDate, setNewDate] = React.useState<string>('');
  const [newContent, setNewContent] = React.useState<string>('');
  const actualDate = getDate();
  React.useEffect(() => {
    getEvents().then((events) => {
      if (events.nbEvents > 0) {
        setItems(events.events);
        setNbEvents(events.nbEvents);
      }
    });
  }, []);

  const addEvent = (content: string, date: string) => {
    const tmp = {
      [date]: [
        {
          name: content,
          height: 51,
          day: date,
        },
      ],
    };
    setItems((prev) => {
      return {
        ...prev,
        [date]: [
          ...(prev[date] || []),
          {
            name: content,
            height: 51,
            day: date,
          },
        ],
      };
    });
    setModalOpen(false);
    setContent('');
    setDate('');
    AsyncStorage.setItem(`event${nbEvents + 1}`, JSON.stringify(tmp));
    setNbEvents(nbEvents + 1);
  };

  const deleteEvent = (date: string, content: string) => {
    setItems((prev) => {
      const tmp = {
        ...prev,
        [date]: prev[date].filter((item) => item.name !== content),
      };
      if (tmp[date].length === 0) {
        delete tmp[date];
      }
      return tmp;
    });
    setNbEvents(nbEvents - 1);
    setModalEvent(false);
    findItemInStorage(content).then((key) => {
      AsyncStorage.removeItem(`event${key}`);
      changeKeyOfStorage(key);
    });
    setContent('');
    setDate('');
    setEventSelectedDate('');
    setEventSelectedName('');
  };

  const ModifyEvent = (date: string, content: string) => {
    if (date !== '' && date !== eventSelectedDate) {
      deleteEvent(eventSelectedDate, eventSelectedName);
      addEvent(content !== '' ? content : eventSelectedName, date);
    } else if (content !== '' && content !== eventSelectedName) {
      deleteEvent(eventSelectedDate, eventSelectedName);
      addEvent(content, date !== '' ? date : eventSelectedDate);
    }
    setModalEvent(false);
  };

  return (
    <>
      <PageContainer>
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 20 }}
          onPress={() =>
            navigation.navigate('Home', { token: route.params.token })
          }
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Agenda
          renderEmptyData={() => {
            return (
              <RenderDay>
                <MediumText style={{ alignSelf: 'center', paddingTop: 80 }}>
                  No events for this day
                </MediumText>
              </RenderDay>
            );
          }}
          selected={actualDate}
          items={items}
          renderItem={(item, isFirst) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                setModalEvent(true);
                setEventSelectedName(item.name);
                setEventSelectedDate(item.day);
              }}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          theme={{
            backgroundColor: '#ffffff',
            textSectionTitleColor: '#49136A',
            textSectionTitleDisabledColor: '#49136A',
            selectedDayBackgroundColor: '#E9CCFB',
            selectedDayTextColor: 'rgba(73, 19, 106, 0.5)',
            todayTextColor: 'rgba(73, 19, 106, 0.5)',
            dayTextColor: '#49136A',
            textDisabledColor: 'rgba(73, 19, 106, 0.50);',
            textDayFontFamily: 'Rubik_Medium',
            textMonthFontFamily: 'Rubik_Medium',
            textDayHeaderFontFamily: 'Rubik_Medium',
            textDayFontWeight: '300',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textDayHeaderFontSize: 16,
            agendaDayNumColor: '#49136A',
            agendaDayTextColor: '#49136A',
            agendaKnobColor: '#49136A',
            agendaTodayColor: 'rgba(73, 19, 106, 0.5)',
            monthTextColor: '#49136A',
            dotColor: '#E9CCFB',
          }}
        />
        <AddEventButton onPress={() => setModalOpen(true)}>
          <AntDesign name="pluscircle" color="#283747" size={65} />
        </AddEventButton>
      </PageContainer>
      {modalOpen && (
        <ModalContainer transparent>
          <ModalContent>
            <AddEventContainer>
              <MediumText>Add your Event</MediumText>
              <InputContainer>
                <Input
                  placeholder="Enter the event name"
                  type={'text'}
                  placeholderTextColor="rgba(30, 30, 30, 0.40);"
                  onChangeText={setContent}
                />
                <Input
                  placeholder="Date (YYYY-MM-DD)"
                  type={'text'}
                  placeholderTextColor="rgba(30, 30, 30, 0.40);"
                  value={date}
                  onChangeText={setDate}
                />
              </InputContainer>
              <ButtonsContainer>
                <EventButton onPress={() => addEvent(content, date)}>
                  <MediumText color="#fff">Confirm Event</MediumText>
                </EventButton>
                <EventButton color="#fff" onPress={() => setModalOpen(false)}>
                  <MediumText color="#1E1E1E">Cancel</MediumText>
                </EventButton>
              </ButtonsContainer>
            </AddEventContainer>
          </ModalContent>
        </ModalContainer>
      )}
      {modalEvent && (
        <ModalContainer transparent>
          <ModalContent>
            <AddEventContainer>
              <ModalHeader>
                <MediumText>Modify your Event</MediumText>
                <CrossButton onPress={() => setModalEvent(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <InputContainer>
                <Input
                  placeholder="Enter the event name"
                  type={'text'}
                  placeholderTextColor="rgba(30, 30, 30, 0.40);"
                  onChangeText={setContent}
                />
                <Input
                  placeholder="Date (YYYY-MM-DD)"
                  type={'text'}
                  placeholderTextColor="rgba(30, 30, 30, 0.40);"
                  value={date}
                  onChangeText={setDate}
                />
              </InputContainer>
              <ButtonsContainer>
                <EventButton onPress={() => ModifyEvent(date, content)}>
                  <MediumText color="#fff">Confirm modification</MediumText>
                </EventButton>
                <DeleteButton
                  onPress={() =>
                    deleteEvent(eventSelectedDate, eventSelectedName)
                  }
                >
                  <DeleteButtonText>Delete</DeleteButtonText>
                </DeleteButton>
              </ButtonsContainer>
            </AddEventContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },
});
