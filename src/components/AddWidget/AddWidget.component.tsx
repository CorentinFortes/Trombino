import React from 'react';
import {
  CustomWidgetProps,
  WidgetSize,
  WidgetsType,
} from '../../types/widgetType';
import {
  AddWidgetContainer,
  CrossButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
  SelectSizeContainer,
  SizeButton,
  SizeContainer,
} from './AddWidget.style';
import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';

type Props = {
  customWidgets: CustomWidgetProps[];
  setCustomWidgets: React.Dispatch<React.SetStateAction<CustomWidgetProps[]>>;
};

export const AddWidget: React.FC<Props> = ({
  customWidgets,
  setCustomWidgets,
}) => {
  const [step, setStep] = React.useState<number>(0);
  const [widgetType, setWidgetType] = React.useState<WidgetsType>();
  const [widgetSize, setWidgetSize] = React.useState<WidgetSize>();
  const addNewWidget = (size: WidgetSize) => {
    setWidgetSize(size);
    setStep(0);
    if (widgetType && widgetSize) {
      const newWidget: CustomWidgetProps = {
        id: customWidgets.length + 1,
        widget: widgetType,
        size: widgetSize,
      };
      setCustomWidgets([...customWidgets, newWidget]);
    }
  };
  return (
    <>
      <AddWidgetContainer onPress={() => setStep(1)}>
        <AntDesign name="plus" size={24} color="black" />
      </AddWidgetContainer>
      {step === 1 && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setStep(0)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <SizeContainer>
                <SizeButton
                  onPress={() => {
                    setWidgetType('Mail');
                    setStep(2);
                  }}
                >
                  <Text>Mail</Text>
                </SizeButton>
                <SizeButton
                  onPress={() => {
                    setWidgetType('Trombino');
                    setStep(2);
                  }}
                >
                  <Text>Trombinoscope</Text>
                </SizeButton>
                <SizeButton
                  onPress={() => {
                    setWidgetType('Weather');
                    setStep(2);
                  }}
                >
                  <Text>Weather</Text>
                </SizeButton>
              </SizeContainer>
            </SelectSizeContainer>
          </ModalContent>
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer transparent>
          <ModalContent>
            <SelectSizeContainer>
              <ModalHeader>
                <CrossButton onPress={() => setStep(1)}>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </CrossButton>
                <ModalTitle>Select your size</ModalTitle>
                <CrossButton onPress={() => setStep(0)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <SizeContainer>
                <SizeButton onPress={() => addNewWidget(WidgetSize.LARGE)}>
                  <LargeSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => addNewWidget(WidgetSize.MEDIUM)}>
                  <MediumSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => addNewWidget(WidgetSize.SMALL)}>
                  <SmallSizeIcon />
                </SizeButton>
                <SizeButton onPress={() => addNewWidget(WidgetSize.HEADER)}>
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
