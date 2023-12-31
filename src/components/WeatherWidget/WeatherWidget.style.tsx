import styled from 'styled-components/native';
import { Widget as _Widget } from '../Widget';
import { WeatherModeType } from '../../types/Widget/weather';
import { WeatherSunIcon } from '../../svg/WeatherSunIcon';
import { WeatherCloudIcon } from '../../svg/WeatherCloudIcon';
import { WeatherSnowIcon } from '../../svg/WeatherSnowIcon';
import { WeatherThunderIcon } from '../../svg/WeatherThunderIcon';
import { WeatherWindIcon } from '../../svg/WeatherWindIcon';
import { WeatherMoonIcon } from '../../svg/WeatherMoonIcon';

const WeatherBackground: { [key in WeatherModeType]: string } = {
  Clear: '#7bd0ff',
  Clouds: '#DEE6EA',
  Rain: '#869EAC',
  Snow: '#869EAC',
  Thunderstorm: '#AFAFAF',
  Drizzle: '#AFAFAF',
  Mist: '#6DBBE7',
};

export const Widget = styled(_Widget)<{
  weather: WeatherModeType;
  night: boolean;
}>`
  background-color: ${({ night, weather }) =>
    night ? '#06132C' : WeatherBackground[weather]};
  padding: 0;
`;

export const LargeContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const LargeContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: 'hidden';
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

export const SmallContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const HeaderLeftWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
`;

export const TopContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TopLeftContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const TitleWidget = styled.Text<{ small?: boolean; color: string }>`
  font-size: ${({ small }) => (small ? '14px' : '24px')};
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: ${({ color }) => color};
`;

export const SmallTitleWidget = styled.Text`
  font-size: 16px;
  font-family: 'Rubik_Medium';
  font-weight: 600;
  color: #1e1e1e;
`;

export const InfoContent = styled.View<{ small?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${({ small }) => (small ? '5px' : '10px')};
  align-items: center;
  aign-self: flex-start;
  justify-self: flex-start;
  justify-content: flex-start;
`;

export const LocalizationText = styled.Text<{
  size: 'large' | 'medium' | 'small';
  color: string;
}>`
  font-size: ${({ size }) =>
    size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px'};
  color: ${({ color }) => color};
  font-family: 'Rubik_SemiBold';
  ${({ size }) => size === 'small' && 'max-width: 105px'};
`;

export const WeatherText = styled.Text<{
  size: 'large' | 'medium' | 'small';
  color: string;
}>`
  font-size: ${({ size }) =>
    size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px'};
  color: ${({ color }) => color};
  font-family: 'Rubik_Regular';
`;

export const WeatherGroup = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  gap: -5px;
`;

export const InfosWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  gap: 5px;
`;

export const TemperatureText = styled.Text<{ small?: boolean; color: string }>`
  font-size: ${({ small }) => (small ? '40px' : '64px')};
  font-family: 'Rubik_SemiBold';
  color: ${({ color }) => color};
`;

export const MediumBotContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const SunIcon = styled(WeatherSunIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const CloudIcon = styled(WeatherCloudIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const RainIcon = styled(WeatherCloudIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const SnowIcon = styled(WeatherSnowIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const ThunderIcon = styled(WeatherThunderIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const WindIcon = styled(WeatherWindIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;

export const MoonIcon = styled(WeatherMoonIcon)`
  position: absolute;
  right: -30px;
  bottom: 0;
`;
