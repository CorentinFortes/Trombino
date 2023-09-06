import React from 'react';
import { WeatherWidget } from '../../components/WeatherWidget';
import {
  FavoritesContent,
  PageContainer,
  FavoritesWrapper,
} from './HomePage.style';
import { MailWidget } from '../../components/MailWidget';
import { tmpMail } from '../../utils/mock/mail';
import { ScrollView } from 'react-native';

export const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <FavoritesContent>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            rowGap: 10,
          }}
          horizontal
          alwaysBounceHorizontal={true}
          bounces={true}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          pagingEnabled={true}
        >
          <FavoritesWrapper>
            <WeatherWidget
              size="SMALL"
              localization="Marseille, FR"
              weather="Clear"
              temperature={20}
              description="Sunny"
              night={false}
            />
            <MailWidget mails={tmpMail} nbUnread={1} size="SMALL" />
          </FavoritesWrapper>
        </ScrollView>
      </FavoritesContent>
    </PageContainer>
  );
};
