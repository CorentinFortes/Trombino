import React from 'react';
import { PageContainer } from './HomePage.style';
import { Text } from 'react-native';
import { MailWidget } from '../../components/MailWidget/MailWidget';
import { tmpMail } from '../../utils/mock/mail';

export const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <Text>Bhahaha</Text>
      <MailWidget nbUnread={1} mails={tmpMail} size="BIG" />
    </PageContainer>
  );
};
