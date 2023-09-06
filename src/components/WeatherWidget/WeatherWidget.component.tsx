import React from 'react';
import { WeatherModeType, WeatherType } from '../../types/Widget/weather';
import { WidgetType } from '../../types/widgetType';
import {
  LargeContent,
  InfoContent,
  LocalizationText,
  TitleWidget,
  TopContent,
  TopLeftContent,
  Widget,
  WeatherText,
  TemperatureText,
  WeatherGroup,
  HeaderContent,
  HeaderLeftWrapper,
  SmallContent,
  InfosWrapper,
  MediumBotContent,
} from './WeatherWidget.style';
import { Ionicons, Feather } from '@expo/vector-icons';

const WeatherIcon: { [key in WeatherModeType]: string } = {
  Clear: 'sun',
  Clouds: 'cloud',
  Rain: 'cloud-rain',
  Snow: 'cloud-snow',
  Thunderstorm: 'cloud-lightning',
  Drizzle: 'cloud-drizzle',
  Mist: 'wind',
};

const WeatherWidgetComponent: React.FC<WeatherType & WidgetType> = ({
  localization,
  temperature,
  weather,
  description,
  size,
}) => {
  // todo : add weather icon for lage size
  return (
    <Widget
      size={size}
      icon={<Ionicons name="cloud-outline" size={24} color="#0c3247" />}
      weather={weather}
    >
      <>
        {size === 'LARGE' && (
          <LargeContent>
            <TopContent>
              <TopLeftContent>
                <Ionicons name="cloud-outline" size={24} color="#0c3247" />
                <TitleWidget>Weather</TitleWidget>
              </TopLeftContent>
            </TopContent>
            <WeatherGroup>
              <InfoContent>
                <Ionicons name="location-sharp" size={24} color="#0c3247" />
                <LocalizationText size="large">{localization}</LocalizationText>
              </InfoContent>
            </WeatherGroup>
            <WeatherGroup>
              <InfoContent>
                <Feather
                  name={WeatherIcon[weather] as string} // faut overlap le type mais flemme
                  size={24}
                  color="#0c3247"
                />
                <WeatherText size="large">{description}</WeatherText>
              </InfoContent>
              <TemperatureText>{temperature}°</TemperatureText>
            </WeatherGroup>
          </LargeContent>
        )}
        {size === 'HEADER' && (
          <HeaderContent>
            <HeaderLeftWrapper>
              <TemperatureText small>{temperature}°</TemperatureText>
              <InfoContent small>
                <Feather
                  name={WeatherIcon[weather] as string} // faut overlap le type mais flemme
                  size={24}
                  color="black"
                />
                <WeatherText size="medium">{description}</WeatherText>
              </InfoContent>
            </HeaderLeftWrapper>
            <LocalizationText size="large">{localization}</LocalizationText>
          </HeaderContent>
        )}
        {size === 'SMALL' && (
          <SmallContent>
            <TopContent>
              <TopLeftContent>
                <Ionicons name="cloud-outline" size={16} color="#0c3247" />
                <TitleWidget small>Weather</TitleWidget>
              </TopLeftContent>
            </TopContent>
            <TemperatureText small>{temperature}°</TemperatureText>
            <InfosWrapper>
              <InfoContent small>
                <Feather
                  name={WeatherIcon[weather] as string} // faut overlap le type mais flemme
                  size={24}
                  color="#0c3247"
                />
                <WeatherText size="medium">{description}</WeatherText>
              </InfoContent>
              <InfoContent small>
                <Ionicons name="location-sharp" size={24} color="#0c3247" />
                <LocalizationText size="medium">
                  {localization}
                </LocalizationText>
              </InfoContent>
            </InfosWrapper>
          </SmallContent>
        )}
        {size === 'MEDIUM' && (
          <SmallContent>
            <MediumBotContent>
              <InfosWrapper>
                <InfoContent small>
                  <Feather
                    name={WeatherIcon[weather] as string} // faut overlap le type mais flemme
                    size={24}
                    color="#0c3247"
                  />
                  <WeatherText size="medium">{description}</WeatherText>
                </InfoContent>
                <InfoContent small>
                  <Ionicons name="location-sharp" size={24} color="#0c3247" />
                  <LocalizationText size="medium">
                    {localization}
                  </LocalizationText>
                </InfoContent>
              </InfosWrapper>
              <TemperatureText small>{temperature}°</TemperatureText>
            </MediumBotContent>
          </SmallContent>
        )}
      </>
    </Widget>
  );
};

export const WeatherWidget = React.memo(WeatherWidgetComponent);
