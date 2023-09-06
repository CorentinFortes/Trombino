import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';
import { featherIconType } from '../../types/Icon/icon';
import { WeatherModeType, WeatherType } from '../../types/Widget/weather';
import { WidgetSize, WidgetType } from '../../types/widgetType';
import {
  CrossButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SelectSizeContainer,
  SizeButton,
  SizeContainer,
} from '../Widget/Widget.style';
import {
  HeaderContent,
  HeaderLeftWrapper,
  InfoContent,
  InfosWrapper,
  LargeContent,
  LocalizationText,
  MediumBotContent,
  SmallContent,
  TemperatureText,
  TitleWidget,
  TopContent,
  TopLeftContent,
  WeatherGroup,
  WeatherText,
  Widget,
} from './WeatherWidget.style';

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
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize(targetSize);
    setOpenSizeModal(false);
  };
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
      >
        <>
          {currentSize === 'LARGE' && (
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
      {openSizeModal && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setOpenSizeModal(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <SizeContainer>
                <SizeButton onPress={() => changeSize(WidgetSize.LARGE)}>
                  <LargeSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.MEDIUM)}>
                  <MediumSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.SMALL)}>
                  <SmallSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.HEADER)}>
                  <HeaderSizeIcon />
                </SizeButton>
              </SizeContainer>
            </SelectSizeContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export const WeatherWidget = React.memo(WeatherWidgetComponent);
