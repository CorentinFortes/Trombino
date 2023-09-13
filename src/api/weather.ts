import axios from 'axios';

export interface Root {
  main: Main;
  name: string;
  weather: Weather[];
  sys: Sys;
  wind: Wind;
}

export interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
}

export interface Sys {
  country: string;
}

export interface Weather {
  description: string;
  main: string;
}

export interface Wind {
  speed: number;
}

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  description: string;
  main: string;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
}

export const getWeather = async (lat: number, lon: number) => {
  const API_KEY = 'e7bd99ef74848cbddfd691a6d9555fba';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=daily,hourly,minutely,alerts&units=metric&appid=${API_KEY}`;
  try {
    const res = await axios.get(apiUrl);
    const data: Root = res.data;
    const weatherData: WeatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.floor(data.main.temp),
      description:
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1),
      main: data.weather[0].main,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,

    };
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};
