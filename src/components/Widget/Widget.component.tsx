import React from 'react';
import { WidgetSize, WidgetType } from '../../types/widgetType';
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  SelectSizeContainer,
  WidgetContainer,
  SizeContainer,
  SizeButton,
  ModalTitle,
  CrossButton,
  DeleteButton,
  DeleteButtonText,
} from './Widget.style';
import { AntDesign } from '@expo/vector-icons';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';

const WidgetComponent: React.FC<WidgetType> = ({
  size,
  icon,
  title,
  children,
  id,
  onLongPress,
  onPress,
  deleteFunction,
  setCurrentSize,
  setOpenSizeModal,
  openSizeModal,
  ...props
}) => {
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize!(targetSize);
    setOpenSizeModal!(false);
  };
  const deleteWidget = () => {
    setOpenSizeModal!(false);
    deleteFunction!(id!);
  };
  return (
    <>
      <WidgetContainer
        size={size}
        onPress={onPress}
        onLongPress={onLongPress}
        {...props}
      >
        {children}
      </WidgetContainer>
      {openSizeModal && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setOpenSizeModal!(false)}>
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
              </SizeContainer>
              <SizeContainer>
                <SizeButton onPress={() => changeSize(WidgetSize.SMALL)}>
                  <SmallSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => changeSize(WidgetSize.HEADER)}>
                  <HeaderSizeIcon />
                </SizeButton>
              </SizeContainer>
              {id != -1 && (
                <DeleteButton onPress={() => deleteWidget()}>
                  <DeleteButtonText>Delete</DeleteButtonText>
                </DeleteButton>
              )}
            </SelectSizeContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export const Widget = React.memo(WidgetComponent);
