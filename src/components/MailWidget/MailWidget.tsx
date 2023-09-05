import React from 'react';
import { Text } from 'react-native';
import { BoxIcon } from '../../svg/BoxIcon';
import { MailIcon } from '../../svg/MailIcon';
import { WidgetType } from '../../types/widgetType';
import { Widget } from '../Widget';
import {
  MailContainer,
  MailContent,
  MailTitle,
  MailsContainer,
  PointUnread,
  SenderText,
  TextUnread,
  TitleAndSender,
  TitleWidget,
  TopContent,
  TopLeftContent,
  TopRightContent,
} from './MailWidget.style';

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
            <TextUnread>
              {nbUnread}
              {` `}
              {`unread${nbUnread > 1 ? 's' : ''}`}
            </TextUnread>
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
            <SenderText>from {mails[0].sender}</SenderText>
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
            <SenderText>from {mails[1].sender}</SenderText>
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
