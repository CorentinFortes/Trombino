import React, { useState } from 'react';
import { Text } from 'react-native';
import { BoxIcon } from '../../svg/BoxIcon';
import { MailIcon } from '../../svg/MailIcon';
import { WidgetSize, WidgetType } from '../../types/widgetType';
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
import {
  CrossButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SelectSizeContainer,
  SizeButton,
  SizeContainer,
} from '../Widget/Widget.style';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type Mail = {
  id: number;
  title: string;
  content: string;
  sender: string;
  read: boolean;
  time: string;
  date: string;
};

type MailWidgetProps = {
  nbUnread: number;
  mails: Mail[];
  onPress?: () => void;
} & WidgetType;

const MailWidgetComponent: React.FC<MailWidgetProps> = ({
  nbUnread,
  mails,
  size,
  onPress,
}) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize(targetSize);
    setOpenSizeModal(false);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Widget
        size={currentSize}
        icon={<MailIcon />}
        onLongPress={() => setOpenSizeModal(true)}
      >
        <>
          {currentSize === 'LARGE' && (
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
          {currentSize === 'HEADER' && (
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
          {currentSize === 'SMALL' && (
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
          {currentSize === 'MEDIUM' && (
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
      {openSizeModal && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setOpenSizeModal(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <SizeContainer>
                <SizeButton onPress={() => changeSize(WidgetSize.LARGE)}>
                  <LargeSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.MEDIUM)}>
                  <MediumSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.SMALL)}>
                  <SmallSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.HEADER)}>
                  <HeaderSizeIcon />
                </SizeButton>
              </SizeContainer>
            </SelectSizeContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </TouchableOpacity>
  );
};

export const MailWidget = React.memo(MailWidgetComponent);
