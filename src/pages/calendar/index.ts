import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { AgendaSchedule } from 'react-native-calendars';

export interface Event {
  events: AgendaSchedule;
  nbEvents: number;
}

export const getEvent = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getEvents = async () => {
  let i = 1;
  let events: AgendaSchedule = {};
  let tmp = true;
  let count = 0;

  while (tmp) {
    const res: AgendaSchedule = await getEvent(`event${i}`);
    if (res) {
      events = {
        ...events,
        [Object.keys(res)[0]]: [
          ...(events[Object.keys(res)[0]] || []),
          {
            name: Object.values(res)[0][0].name,
            height: 51,
            day: Object.keys(res)[0],
          },
        ],
      };
      count++;
    } else {
      tmp = false;
    }
    i++;
  }

  const result: Event = {
    events: events,
    nbEvents: count,
  };
  return result;
};

export const getDate = () => {
  const tmp = moment().format('l').split('/');
  const date = `${tmp[2]}-${tmp[0]}-${tmp[1]}`;
  return date;
};

export const getFulldate = () => {
  const tmp = moment().format('l').split('/');
  const date = `${tmp[2]}-${tmp[0].length === 1 ? '0' + tmp[0] : tmp[0]}-${
    tmp[1].length === 1 ? '0' + tmp[1] : tmp[1]
  }`;
  return date;
};
