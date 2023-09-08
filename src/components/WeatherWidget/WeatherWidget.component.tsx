import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { featherIconType } from '../../types/Icon/icon';
import { WeatherModeType, WeatherType } from '../../types/Widget/weather';
import { WidgetType } from '../../types/widgetType';
import {
  CloudIcon,
  HeaderContent,
  HeaderLeftWrapper,
  InfoContent,
  InfosWrapper,
  LargeContainer,
  LargeContent,
  LocalizationText,
  MediumBotContent,
  MoonIcon,
  RainIcon,
  SmallContent,
  SnowIcon,
  SunIcon,
  TemperatureText,
  ThunderIcon,
  TitleWidget,
  TopContent,
  TopLeftContent,
  WeatherGroup,
  WeatherIconContainer,
  WeatherText,
  Widget,
  WindIcon,
} from './WeatherWidget.style';
import { WeatherSunIcon } from '../../svg/WeatherSunIcon';

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
  Clear: <SunIcon />,
  Clouds: <CloudIcon />,
  Rain: <RainIcon />,
  Snow: <SnowIcon />,
  Thunderstorm: <ThunderIcon />,
  Drizzle: <RainIcon />,
  Mist: <WindIcon />,
};

const WeatherWidgetComponent: React.FC<WeatherType & WidgetType> = ({
  localization,
  temperature,
  weather,
  description,
  size,
  night,
  id,
  deleteFunction,
}) => {
  // todo : add weather icon for lage size
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
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
    <>
      <Widget
        size={currentSize}
        icon={
          <Ionicons name="cloud-outline" size={24} color={getTextColor()} />
        }
        weather={weather}
        night={night}
        onLongPress={() => setOpenSizeModal(true)}
        id={id}
        deleteFunction={deleteFunction}
        setCurrentSize={setCurrentSize}
        setOpenSizeModal={setOpenSizeModal}
        openSizeModal={openSizeModal}
      >
        <>
          {currentSize === 'LARGE' && (
            <LargeContainer>
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
              {night ? <MoonIcon /> : WeatherImage[weather]}
            </LargeContainer>
          )}
          {currentSize === 'HEADER' && (
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
                  <WeatherText color={getTextColor()} size="small">
                    {description}
                  </WeatherText>
                </InfoContent>
              </HeaderLeftWrapper>
              <LocalizationText color={getTextColor()} size="medium">
                {localization}
              </LocalizationText>
            </HeaderContent>
          )}
          {currentSize === 'SMALL' && (
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
                  <LocalizationText
                    color={getTextColor()}
                    size="small"
                    numberOfLines={1}
                  >
                    {localization}
                  </LocalizationText>
                </InfoContent>
              </InfosWrapper>
            </SmallContent>
          )}
          {currentSize === 'MEDIUM' && (
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
    </>
  );
};

export const WeatherWidget = React.memo(WeatherWidgetComponent);
