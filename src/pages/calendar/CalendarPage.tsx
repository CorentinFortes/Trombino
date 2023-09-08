import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda, AgendaSchedule } from 'react-native-calendars';
import {
  AddEventButton,
  AddEventContainer,
  ButtonsContainer,
  EventButton,
  InputContainer,
  MediumText,
  ModalContainer,
  ModalContent,
  PageContainer,
  RenderDay,
} from './CalendarPage.style';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '../../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDate, getEvents } from '.';
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
            <TouchableOpacity style={styles.item} onPress={() => {}}>
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
