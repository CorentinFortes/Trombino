import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Employee,
  EmployeeDetail,
  GetEmployeeImage,
  GetEmployees,
  getMe,
} from '../../api/api';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { MailWidget } from '../../components/MailWidget';
import { TrombinoscopeWidget } from '../../components/TrombinoscopeWidget';
import { WeatherWidget } from '../../components/WeatherWidget';
import { SmallLogo } from '../../svg/SmallLogo';
import { tmpMail } from '../../utils/mock/mail';
import {
  ContentContainer,
  FavoritesContent,
  FavoritesWrapper,
  HeaderProfileContainer,
  HeaderProfileLeftWrapper,
  HeaderText,
  HorizontalScrollView,
  PageContainer,
  ProfileImage,
  ScrollContent,
  SectionContainer,
  SectionTitle,
} from './HomePage.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WeatherData, getWeather } from '../../api/weather';
import { WeatherModeType } from '../../types/Widget/weather';

type HomePageProps = StackScreenProps<RootStackParamList, 'Home'>;

export const HomePage: React.FC<HomePageProps> = ({ route, navigation }) => {
  const token = route.params.token;
  const [me, setMe] = React.useState<EmployeeDetail>();
  const [employees, setEmployees] = React.useState<Employee[]>();
  const [lat, setLat] = React.useState<number>();
  const [long, setLong] = React.useState<number>();
  const [weather, setWeather] = React.useState<WeatherData>();

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
      <ScrollContent>
        <ContentContainer>
          <SectionContainer>
            <SectionTitle>Your trombinoscope</SectionTitle>
            <TrombinoscopeWidget
              size="LARGE"
              token={token}
              employees={employees}
              onPress={() => navigation.navigate('Trombinoscope', { token })}
            />
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Must-haves</SectionTitle>
            <FavoritesContent>
              <HorizontalScrollView
                horizontal
                alwaysBounceHorizontal={true}
                bounces={true}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                pagingEnabled={true}
              >
                <FavoritesWrapper>
                  <WeatherWidget
                    size="SMALL"
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
                    temperature={
                      weather !== undefined ? weather.temperature : 20
                    }
                    description={
                      weather !== undefined ? weather.description : 'Sunny'
                    }
                    night={false}
                  />
                  <MailWidget mails={tmpMail} nbUnread={1} size="SMALL" />
                </FavoritesWrapper>
              </HorizontalScrollView>
            </FavoritesContent>
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Your Widgets</SectionTitle>
            <WeatherWidget
              size="HEADER"
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
          </SectionContainer>
        </ContentContainer>
      </ScrollContent>
    </PageContainer>
  );
};
