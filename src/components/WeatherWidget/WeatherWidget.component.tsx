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
import { featherIconType } from '../../types/Icon/icon';

const WeatherIcon: { [key in WeatherModeType]: featherIconType } = {
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
  night,
}) => {
  // todo : add weather icon for lage size
  const getTextColor = () => {
    if (night) {
      return '#69A1BF';
    }
    return '#0c3247';
  };
  const getTemperatureColor = () => {
    if (night) {
      return 'rgba(105, 161, 191, 0.49)';
    }
    return 'rgba(12, 50, 71, 0.49)';
  };
  return (
    <Widget
      size={size}
      icon={<Ionicons name="cloud-outline" size={24} color={getTextColor()} />}
      weather={weather}
      night={night}
    >
      <>
        {size === 'LARGE' && (
          <LargeContent>
            <TopContent>
              <TopLeftContent>
                <Ionicons
                  name="cloud-outline"
                  size={24}
                  color={getTextColor()}
                />
                <TitleWidget color={getTextColor()}>Weather</TitleWidget>
              </TopLeftContent>
            </TopContent>
            <WeatherGroup>
              <InfoContent>
                <Ionicons
                  name="location-sharp"
                  size={24}
                  color={getTextColor()}
                />
                <LocalizationText color={getTextColor()} size="large">
                  {localization}
                </LocalizationText>
              </InfoContent>
            </WeatherGroup>
            <WeatherGroup>
              <InfoContent>
                <Feather
                  name={WeatherIcon[weather]}
                  size={24}
                  color={getTextColor()}
                />
                <WeatherText color={getTextColor()} size="large">
                  {description}
                </WeatherText>
              </InfoContent>
              <TemperatureText color={getTemperatureColor()}>
                {temperature}°
              </TemperatureText>
            </WeatherGroup>
          </LargeContent>
        )}
        {size === 'HEADER' && (
          <HeaderContent>
            <HeaderLeftWrapper>
              <TemperatureText small color={getTemperatureColor()}>
                {temperature}°
              </TemperatureText>
              <InfoContent small>
                <Feather
                  name={WeatherIcon[weather]}
                  size={24}
                  color={getTextColor()}
                />
                <WeatherText color={getTextColor()} size="medium">
                  {description}
                </WeatherText>
              </InfoContent>
            </HeaderLeftWrapper>
            <LocalizationText color={getTextColor()} size="large">
              {localization}
            </LocalizationText>
          </HeaderContent>
        )}
        {size === 'SMALL' && (
          <SmallContent>
            <TopContent>
              <TopLeftContent>
                <Ionicons
                  name="cloud-outline"
                  size={16}
                  color={getTextColor()}
                />
                <TitleWidget small color={getTextColor()}>
                  Weather
                </TitleWidget>
              </TopLeftContent>
            </TopContent>
            <TemperatureText color={getTemperatureColor()} small>
              {temperature}°
            </TemperatureText>
            <InfosWrapper>
              <InfoContent small>
                <Feather
                  name={WeatherIcon[weather]}
                  size={24}
                  color={getTextColor()}
                />
                <WeatherText color={getTextColor()} size="medium">
                  {description}
                </WeatherText>
              </InfoContent>
              <InfoContent small>
                <Ionicons
                  name="location-sharp"
                  size={24}
                  color={getTextColor()}
                />
                <LocalizationText color={getTextColor()} size="medium">
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
                    name={WeatherIcon[weather]}
                    size={24}
                    color={getTextColor()}
                  />
                  <WeatherText color={getTextColor()} size="medium">
                    {description}
                  </WeatherText>
                </InfoContent>
                <InfoContent small>
                  <Ionicons
                    name="location-sharp"
                    size={24}
                    color={getTextColor()}
                  />
                  <LocalizationText color={getTextColor()} size="medium">
                    {localization}
                  </LocalizationText>
                </InfoContent>
              </InfosWrapper>
              <TemperatureText color={getTemperatureColor()} small>
                {temperature}°
              </TemperatureText>
            </MediumBotContent>
          </SmallContent>
        )}
      </>
    </Widget>
  );
};

export const WeatherWidget = React.memo(WeatherWidgetComponent);
