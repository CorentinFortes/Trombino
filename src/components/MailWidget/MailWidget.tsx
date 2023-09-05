import React from 'react';
import { WidgetType } from '../../types/widgetType';
import {
  MailContainer,
  MailContent,
  MailTitle,
  MailsContainer,
  MainContent,
  PointUnread,
  SenderText,
  TextUnread,
  TitleAndSender,
  TitleWidget,
  TopContent,
  TopLeftContent,
  TopRightContent,
} from './MailWidget.style';
import { MailIcon } from '../../svg/MailIcon';
import { BoxIcon } from '../../svg/BoxIcon';
import { Text } from 'react-native';
import { Widget } from '../Widget';

export type Mail = {
  title: string;
  content: string;
  sender: string;
  read: boolean;
};

type MailWidgetProps = {
  nbUnread: number;
  mails: Mail[];
} & WidgetType;

const MailWidgetComponent: React.FC<MailWidgetProps> = ({
  nbUnread,
  mails,
  size,
  icon,
}) => {
  return (
    <Widget
      size={size}
      title={
        <TopContent>
          <TopLeftContent>
            <MailIcon />
            <TitleWidget>Mail</TitleWidget>
          </TopLeftContent>
          <TopRightContent>
            <BoxIcon />
            <TextUnread>{nbUnread} unread</TextUnread>
          </TopRightContent>
        </TopContent>
      }
    >
      <MailsContainer>
        <MailContainer>
          <TitleAndSender>
            <TopLeftContent>
              {!mails[0].read && <PointUnread />}
              <MailTitle>{mails[0].title}</MailTitle>
            </TopLeftContent>
            <SenderText>de {mails[0].sender}</SenderText>
          </TitleAndSender>
          <MailContent numberOfLines={2}>
            <Text>{mails[0].content}</Text>
          </MailContent>
        </MailContainer>
        <MailContainer>
          <TitleAndSender>
            <TopLeftContent>
              {!mails[1].read && <PointUnread />}
              <MailTitle>{mails[1].title}</MailTitle>
            </TopLeftContent>
            <SenderText>de {mails[1].sender}</SenderText>
          </TitleAndSender>
          <MailContent numberOfLines={2}>
            <Text>{mails[1].content}</Text>
          </MailContent>
        </MailContainer>
      </MailsContainer>
    </Widget>
  );
};

export const MailWidget = React.memo(MailWidgetComponent);
