import React, { useState } from 'react';
import { WidgetSize, WidgetType } from '../../types/widgetType';
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
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
import { SmallContent, Widget } from './ChatWidget.style';
import { Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ChatWidgetProps = {
  test: number;
} & WidgetType;

const ChatWidgetComponent: React.FC<ChatWidgetProps> = ({ size, onPress }) => {
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize(targetSize);
    setOpenSizeModal(false);
  };
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={() => setOpenSizeModal(true)}
      >
        <Widget
          size={currentSize}
          icon={<MaterialCommunityIcons name="wall" size={24} color="black" />}
          onPress={onPress}
          onLongPress={() => setOpenSizeModal(true)}
        >
          <>
            {currentSize === 'LARGE' && (
              <>
                <Text>medium</Text>
              </>
            )}
            {currentSize === 'HEADER' && (
              <>
                <Text>medium</Text>
              </>
            )}
            {currentSize === 'SMALL' && (
              <>
                <Text>medium</Text>
              </>
            )}
            {currentSize === 'MEDIUM' && (
              <>
                <Text>medium</Text>
              </>
            )}
          </>
        </Widget>
      </TouchableOpacity>
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
    </>
  );
};

export const ChatWidget = React.memo(ChatWidgetComponent);
