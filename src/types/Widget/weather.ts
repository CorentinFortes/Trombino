export enum WEATHER_MODE {
  Thunderstorm = 'Thunderstorm',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  Snow = 'Snow',
  Mist = 'Mist',
  Clear = 'Clear',
  Clouds = 'Clouds',
}

export type WeatherModeType =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Mist'
  | 'Clear'
  | 'Clouds';

export type WeatherType = {
  localization: string;
  temperature: number;
  weather: WeatherModeType;
  description: string;
};
