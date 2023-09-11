import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { featherIconType } from '../../types/Icon/icon';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { StackScreenProps } from '@react-navigation/stack';
import {
  DataCardContainer,
  DatasContainerRow,
  MediumText,
  PageContainer,
  RegularText,
  TopContent,
  BorderRight,
  DatasContainer,
  TempText,
  ButtonChangeLocation,
  SunIcon,
  CloudIcon,
  RainIcon,
  SnowIcon,
  MoonIcon,
  ThunderIcon,
  WindIcon,
} from './weatherPage.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WeatherModeType } from '../../types/Widget/weather';
import {
  InfoContent,
  WeatherText,
  WeatherBigText,
} from '../../components/WeatherWidget/WeatherWidget.style';
import { View } from 'react-native';

type WeatherProps = StackScreenProps<RootStackParamList, 'Weather'>;

const WeatherIcon: { [key in WeatherModeType]: featherIconType } = {
  Clear: 'sun',
  Clouds: 'cloud',
  Rain: 'cloud-rain',
  Snow: 'cloud-snow',
  Thunderstorm: 'cloud-lightning',
  Drizzle: 'cloud-drizzle',
  Mist: 'wind',
};

const WeatherImage: { [key in WeatherModeType]: React.ReactNode } = {
  Clear: <SunIcon width={200} height={200} />,
  Clouds: <CloudIcon width={200} height={200} />,
  Rain: <RainIcon width={200} height={200} />,
  Snow: <SnowIcon width={200} height={200} />,
  Thunderstorm: <ThunderIcon width={200} height={200} />,
  Drizzle: <RainIcon width={200} height={200} />,
  Mist: <WindIcon width={200} height={200} />,
};

export const WeatherPage: React.FC<WeatherProps> = ({ route, navigation }) => {
  const weather = route.params.weather;
  const token = route.params.token;
  const weathermode = route.params.weathermode;
  const night = false;

  React.useEffect(() => {
    console.log('WeatherPage', weather);
  }, []);

  const getTextColor = () => {
    if (night) {
      return '#69A1BF';
    }
    return '#0c3247';
  };
  return (
    <>
      <View>
        <PageContainer weather={weather?.main}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home', { token })}
          >
            <AntDesign name="arrowleft" size={32} color="black" />
          </TouchableOpacity>
          <TopContent>
            <TempText>{weather?.temperature}°</TempText>
            {night ? <MoonIcon /> : WeatherImage[weathermode]}
          </TopContent>
          <InfoContent>
            <Ionicons name="cloud-outline" size={30} color={getTextColor()} />
            <WeatherBigText color={getTextColor()} size="very-large">
              {weather?.city}
            </WeatherBigText>
          </InfoContent>
          <InfoContent>
            <Feather
              name={WeatherIcon[weathermode]}
              size={24}
              color={getTextColor()}
            />
            <WeatherText color={getTextColor()} size="large">
              {weather?.main}
            </WeatherText>
          </InfoContent>
          <DatasContainer>
            <DatasContainerRow>
              <DataCardContainer spaceBetween>
                <MediumText>Pressure</MediumText>
                <MediumText fontSize={20}>{weather?.pressure}</MediumText>
                <RegularText>hPa</RegularText>
              </DataCardContainer>
              <DataCardContainer spaceBetween>
                <MediumText>Wind</MediumText>
                <MediumText fontSize={20}>{weather?.wind_speed}</MediumText>
                <RegularText>km/h</RegularText>
              </DataCardContainer>
            </DatasContainerRow>
            <DatasContainerRow>
              <DataCardContainer spaceBetween={false}>
                <MediumText>Feels like</MediumText>
                <MediumText fontSize={20}>{weather?.feels_like}°</MediumText>
              </DataCardContainer>
              <DataCardContainer spaceBetween={false}>
                <MediumText>Humidity</MediumText>
                <MediumText fontSize={20}>{weather?.humidity}%</MediumText>
              </DataCardContainer>
            </DatasContainerRow>
          </DatasContainer>
          <ButtonChangeLocation>
            <MediumText fontSize={20}>Change location</MediumText>
          </ButtonChangeLocation>
        </PageContainer>
      </View>
    </>
  );
};
