import styled from 'styled-components/native';
import { WeatherSunIcon } from '../../svg/WeatherSunIcon';
import { WeatherCloudIcon } from '../../svg/WeatherCloudIcon';
import { WeatherSnowIcon } from '../../svg/WeatherSnowIcon';
import { WeatherThunderIcon } from '../../svg/WeatherThunderIcon';
import { WeatherWindIcon } from '../../svg/WeatherWindIcon';
import { WeatherMoonIcon } from '../../svg/WeatherMoonIcon';

export const PageContainer = styled.View<{ weather: string }>`
  background-color: ${({ weather }) =>
    weather === 'Thunderstorm'
      ? '#AFAFAF'
      : weather === 'Drizzle'
      ? '#869EAC'
      : weather === 'Rain'
      ? '#869EAC'
      : weather === 'Snow'
      ? '#AFAFAF'
      : weather === 'Mist'
      ? '#AFAFAF'
      : weather === 'Clear'
      ? '#7BD0FF'
      : weather === 'Clouds'
      ? '#DEE6EA'
      : '7BD0FF'};
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 20px;
  gap: 25px;
`;
export const TopContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 200px;
  gap: 10px;
`;

export const DatasContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
export const DatasContainerRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 40px;
`;

export const InfoContent = styled.View`
  display: flex;
  flex-direction: column;
  flex: wrap;
`;

export const DataCardContainer = styled.View<{ spaceBetween: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? 'space-between' : 'flex-start'};
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  flex: 1;
  height: 100px;
  gap: ${({ spaceBetween }) => (spaceBetween ? 0 : 10)}px;
`;

export const MediumText = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Medium';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  color: #0c3247;
  font-weight: 500;
`;

export const RegularText = styled.Text<{ fontSize?: number }>`
  font-family: 'Rubik_Regular';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;
  color: #0c3247;
  font-weight: 400;
`;

export const BorderRight = styled.View`
  position: absolute;
  z-index: 0;
`;

export const TempText = styled.Text`
  font-family: 'Rubik_Medium';
  font-size: 130px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const ButtonChangeLocation = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1.667px solid #0c3247;
  padding: 8.333px 33.333px;
  width: 100%;
`;

export const SunIcon = styled(WeatherSunIcon)`
  position: absolute;
  top: -50px;
`;

export const CloudIcon = styled(WeatherCloudIcon)`
  position: absolute;
  top: -50px;
`;

export const RainIcon = styled(WeatherCloudIcon)`
  position: absolute;
  top: -50px;
`;

export const SnowIcon = styled(WeatherSnowIcon)`
  position: absolute;
  top: -50px;
`;

export const ThunderIcon = styled(WeatherThunderIcon)`
  position: absolute;
  top: -50px;
`;

export const WindIcon = styled(WeatherWindIcon)`
  position: absolute;
  top: -50px;
`;

export const MoonIcon = styled(WeatherMoonIcon)`
  position: absolute;
  top: -50px;
`;
