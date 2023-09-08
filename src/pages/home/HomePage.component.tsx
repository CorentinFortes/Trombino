import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Employee,
  EmployeeDetail,
  GetEmployeeImage,
  GetEmployees,
  getMe,
} from '../../api/api';
import { WeatherData, getWeather } from '../../api/weather';
import { AddWidget } from '../../components/AddWidget/AddWidget.component';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { CalendarWidget } from '../../components/CalendarWidget';
import { MailWidget } from '../../components/MailWidget/MailWidget';
import { TrombinoscopeWidget } from '../../components/TrombinoscopeWidget';
import { WeatherWidget } from '../../components/WeatherWidget';
import { SmallLogo } from '../../svg/SmallLogo';
import { WeatherModeType } from '../../types/Widget/weather';
import { CustomWidgetProps, WidgetSize } from '../../types/widgetType';
import { tmpMail } from '../../utils/mock/mail';
import {
  ContentContainer,
  CustomsWidgetsContainer,
  HeaderProfileContainer,
  HeaderProfileLeftWrapper,
  HeaderText,
  PageContainer,
  ProfileImage,
  ScrollContent,
  SectionContainer,
  SectionTitle,
} from './HomePage.style';
import { CloudWidget } from '../../components/CloudWidget';
import { TodoWidget } from '../../components/TodoWidget/TodoWidget.component';

type HomePageProps = StackScreenProps<RootStackParamList, 'Home'>;

export const HomePage: React.FC<HomePageProps> = ({ route, navigation }) => {
  const token = route.params.token;
  const [me, setMe] = React.useState<EmployeeDetail>();
  const [employees, setEmployees] = React.useState<Employee[]>();
  const [lat, setLat] = React.useState<number>();
  const [long, setLong] = React.useState<number>();
  const [weather, setWeather] = React.useState<WeatherData>();
  const [customWidgets, setCustomWidgets] = React.useState<CustomWidgetProps[]>(
    [
      {
        id: 0,
        widget: 'Weather',
        size: WidgetSize.MEDIUM,
      },
      {
        id: 1,
        widget: 'Calendar',
        size: WidgetSize.HEADER,
      },
      {
        id: 2,
        widget: 'Mail',
        size: WidgetSize.SMALL,
      },
      {
        id: 3,
        widget: 'Trombino',
        size: WidgetSize.SMALL,
      },
    ],
  );

  React.useEffect(() => {
    if (token) {
      getMe(token).then((me) => {
        if (me !== undefined) {
          me.surname = me.surname.toUpperCase();
        }
        setMe(me);
      });
      GetEmployees(token).then((employees) => {
        if (employees !== undefined) {
          setEmployees(employees!);
        }
      });
    }
  }, [token]);

  React.useEffect(() => {
    AsyncStorage.getItem('lat').then((res) => {
      if (res !== null) {
        setLat(parseFloat(res));
      }
    });
    AsyncStorage.getItem('long').then((res) => {
      if (res !== null) {
        setLong(parseFloat(res));
      }
    });
  }, []);

  React.useEffect(() => {
    if (lat && long) {
      getWeather(lat, long).then((weather) => {
        if (weather !== undefined) {
          setWeather(weather);
        }
      });
    }
  }, [lat, long]);

  const deleteWidget = (id: number) => {
    setCustomWidgets(customWidgets.filter((widget) => widget.id !== id));
  };

  return (
    <PageContainer>
      <SmallLogo />
      {me && (
        <HeaderProfileContainer>
          <HeaderProfileLeftWrapper>
            <ProfileImage source={GetEmployeeImage(token, me.id)} />
            <HeaderText>{me.name}</HeaderText>
          </HeaderProfileLeftWrapper>
          <HeaderText>
            <AntDesign
              name="arrowright"
              size={32}
              color="#1E1E1E"
              onPress={() => navigation.navigate('Profile', { token })}
            />
          </HeaderText>
        </HeaderProfileContainer>
      )}
      <ScrollContent
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ContentContainer>
          <SectionContainer>
            <SectionTitle>Your trombinoscope</SectionTitle>
            <TrombinoscopeWidget
              id={-1}
              deleteFunction={deleteWidget}
              size="LARGE"
              token={token}
              employees={employees}
              onPress={() => navigation.navigate('Trombinoscope', { token })}
            />
            <TodoWidget
              todos={[]}
              onPress={() => navigation.navigate('Todo', { token })}
              size="LARGE"
            />
          </SectionContainer>
          <SectionTitle>Your Widgets</SectionTitle>
          <CustomsWidgetsContainer>
            {customWidgets.map((widget) =>
              widget.widget === 'Mail' ? (
                <MailWidget
                  id={widget.id}
                  deleteFunction={deleteWidget}
                  key={widget.id}
                  nbUnread={1}
                  mails={tmpMail}
                  size={widget.size}
                  onPress={() =>
                    navigation.navigate('Email', {
                      token,
                      unread: 1,
                    })
                  }
                />
              ) : widget.widget === 'Trombino' ? (
                <TrombinoscopeWidget
                  deleteFunction={deleteWidget}
                  id={widget.id}
                  key={widget.id}
                  size={widget.size}
                  token={token}
                  employees={employees}
                  onPress={() =>
                    navigation.navigate('Trombinoscope', { token })
                  }
                />
              ) : widget.widget === 'Weather' ? (
                <WeatherWidget
                  id={widget.id}
                  deleteFunction={deleteWidget}
                  key={widget.id}
                  size={widget.size}
                  localization={
                    weather !== undefined
                      ? weather.city + ', ' + weather.country
                      : 'Marseille, FR'
                  }
                  weather={
                    weather !== undefined
                      ? (weather.main as WeatherModeType)
                      : 'Clear'
                  }
                  temperature={weather !== undefined ? weather.temperature : 20}
                  description={
                    weather !== undefined ? weather.description : 'Sunny'
                  }
                  night={false}
                />
              ) : widget.widget === 'Calendar' ? (
                <CalendarWidget
                  id={widget.id}
                  key={widget.id}
                  size={widget.size}
                  deleteFunction={deleteWidget}
                />
              ) : widget.widget === 'Cloud' ? (
                <CloudWidget
                  id={widget.id}
                  key={widget.id}
                  size={widget.size}
                  deleteFunction={deleteWidget}
                  downloading={false}
                />
              ) : widget.widget === 'Todo' ? (
                <TodoWidget
                  id={widget.id}
                  key={widget.id}
                  todos={[]}
                  onPress={() => navigation.navigate('Todo', { token })}
                  size={widget.size}
                />
              ) : null,
            )}
            <AddWidget
              customWidgets={customWidgets}
              setCustomWidgets={setCustomWidgets}
            />
          </CustomsWidgetsContainer>
        </ContentContainer>
      </ScrollContent>
    </PageContainer>
  );
};
