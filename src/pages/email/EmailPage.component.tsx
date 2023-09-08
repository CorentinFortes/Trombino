import { AntDesign, Feather } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import {
  MailContainer,
  MailDescription,
  MailSeparator,
  MailTitle,
  MailTopContent,
  MailTopLeftWrapper,
  MailsContainer,
  MailsContent,
  PageContainer,
  PointUnread,
  ScrollMail,
  TextUnread,
  TitleText,
  TopContent,
  TopLeftWrapper,
  TopRightContent,
} from './EmailPage.style';
import { BoxIcon } from '../../svg/BoxIcon';
import { tmpMail } from '../../utils/mock/mail';
import { SenderText } from '../../components/MailWidget/MailWidget.style';

type EmailProps = StackScreenProps<RootStackParamList, 'Email'>;

export const EmailPage: React.FC<EmailProps> = ({ route, navigation }) => {
  const token = route.params.token;
  return (
    <PageContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Home', { token })}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <TopContent>
        <TopLeftWrapper>
          <Feather name="mail" size={24} color="#1E1E1E" />
          <TitleText>Mail</TitleText>
        </TopLeftWrapper>
        {route.params.unread && (
          <TopRightContent>
            <BoxIcon width={28} height={28} />
            <TextUnread>
              {route.params.unread}
              {` `}
              {`unread${route.params.unread > 1 ? 's' : ''}`}
            </TextUnread>
          </TopRightContent>
        )}
      </TopContent>
      <MailsContainer>
        <ScrollMail>
          <MailsContent>
            {tmpMail.map((mail) => (
              <View key={mail.id} style={{ width: '100%' }}>
                <MailContainer key={mail.id}>
                  <MailTopContent>
                    <MailTopLeftWrapper>
                      {!mail.read && <PointUnread />}
                      <MailTitle>{mail.title}</MailTitle>
                    </MailTopLeftWrapper>
                    <SenderText>
                      from{` `}
                      {mail.sender}
                    </SenderText>
                  </MailTopContent>
                  <MailDescription numberOfLines={2}>
                    {mail.content}
                  </MailDescription>
                  <MailTopContent>
                    <MailDescription>{mail.date}</MailDescription>
                    <MailDescription>{mail.time}</MailDescription>
                  </MailTopContent>
                </MailContainer>
                <MailSeparator />
              </View>
            ))}
          </MailsContent>
        </ScrollMail>
      </MailsContainer>
    </PageContainer>
  );
};
