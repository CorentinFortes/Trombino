import React from 'react';
import { WeatherWidget } from '../../components/WeatherWidget';
import { PageContainer } from './HomePage.style';
import { MailWidget } from '../../components/MailWidget';
import { tmpMail } from '../../utils/mock/mail';

export const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <WeatherWidget
        size="SMALL"
        localization="Marseille, FR"
        weather="Clear"
        temperature={20}
        description="Sunny"
      />
      <WeatherWidget
        size="SMALL"
        localization="Marseille, FR"
        weather="Clouds"
        temperature={20}
        description="Sunny"
      />
      <WeatherWidget
        size="SMALL"
        localization="Marseille, FR"
        weather="Thunderstorm"
        temperature={20}
        description="Sunny"
      />
      <WeatherWidget
        size="SMALL"
        localization="Marseille, FR"
        weather="Rain"
        temperature={20}
        description="Sunny"
      />
      <WeatherWidget
        size="SMALL"
        localization="Marseille, FR"
        weather="Snow"
        temperature={20}
        description="Sunny"
      />
    </PageContainer>
  );
};
