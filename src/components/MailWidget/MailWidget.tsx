import React from 'react';
import { Text } from 'react-native';
import { BoxIcon } from '../../svg/BoxIcon';
import { MailIcon } from '../../svg/MailIcon';
import { WidgetType } from '../../types/widgetType';
import { Widget } from '../Widget';
import {
  HeaderContainer,
  HeaderLeftWrapper,
  LastReceivedText,
  MailContainer,
  MailContent,
  MailSmallContent,
  MailTitle,
  MailsContainer,
  MailsMediumContainer,
  MailsNumber,
  PointUnread,
  SenderText,
  SmallBotContent,
  SmallContent,
  SmallLastReceivedText,
  SmallMailTitle,
  SmallSenderText,
  SmallTextUnread,
  SmallTitleWidget,
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
    <Widget size={size} icon={<MailIcon />}>
      <>
        {size === 'LARGE' && (
          <>
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
          </>
        )}
        {size === 'HEADER' && (
          <HeaderContainer>
            <HeaderLeftWrapper>
              <MailIcon />
              <TopLeftContent>
                {!mails[0].read && <PointUnread />}
                <MailTitle>{mails[0].title}</MailTitle>
              </TopLeftContent>
            </HeaderLeftWrapper>
            <SenderText>from {mails[0].sender}</SenderText>
          </HeaderContainer>
        )}
        {size === 'SMALL' && (
          <>
            <TopContent>
              <TopLeftContent>
                <MailIcon />
                <SmallTitleWidget>Mail</SmallTitleWidget>
              </TopLeftContent>
            </TopContent>
            <SmallContent>
              <MailsNumber>40</MailsNumber>
              <TopRightContent>
                <BoxIcon />
                <SmallTextUnread>
                  {nbUnread}
                  {` `}
                  {`unread${nbUnread > 1 ? 's' : ''}`}
                </SmallTextUnread>
              </TopRightContent>
              <SmallBotContent>
                <LastReceivedText>Last received:</LastReceivedText>
                <SmallLastReceivedText>
                  from {mails[0].sender}
                </SmallLastReceivedText>
              </SmallBotContent>
            </SmallContent>
          </>
        )}
        {size === 'MEDIUM' && (
          <>
            <TopContent>
              <TopLeftContent>
                <MailIcon />
                <SmallTitleWidget>Mail</SmallTitleWidget>
              </TopLeftContent>
              <TopRightContent>
                <BoxIcon />
                <SmallTextUnread>
                  {nbUnread}
                  {` `}
                  {`unread${nbUnread > 1 ? 's' : ''}`}
                </SmallTextUnread>
              </TopRightContent>
            </TopContent>
            <MailsMediumContainer>
              <MailContainer>
                <TitleAndSender>
                  <TopLeftContent>
                    {!mails[0].read && <PointUnread />}
                    <SmallMailTitle>{mails[0].title}</SmallMailTitle>
                  </TopLeftContent>
                  <SmallSenderText>from {mails[0].sender}</SmallSenderText>
                </TitleAndSender>
                <MailSmallContent numberOfLines={2}>
                  <Text>{mails[0].content}</Text>
                </MailSmallContent>
              </MailContainer>
            </MailsMediumContainer>
          </>
        )}
      </>
    </Widget>
  );
};

export const MailWidget = React.memo(MailWidgetComponent);
