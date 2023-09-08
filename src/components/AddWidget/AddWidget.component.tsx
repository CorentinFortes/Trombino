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
  WidgetButton,
  WidgetTitle,
} from './AddWidget.style';
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { LargeSizeIcon } from '../../svg/LargeSizeIcon';
import { MediumSizeIcon } from '../../svg/MediumSizeIcon';
import { SmallSizeIcon } from '../../svg/SmallSizeIcon';
import { HeaderSizeIcon } from '../../svg/HeaderSizeIcon';
import { Animated, FlatList, View } from 'react-native';

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
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const addNewWidget = (sizeTmp: WidgetSize) => {
    setWidgetSize(sizeTmp);
    setStep(0);
    if (widgetType && sizeTmp) {
      const newWidget: CustomWidgetProps = {
        id: customWidgets.length + 1,
        widget: widgetType,
        size: sizeTmp,
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
                <ModalTitle>Select your widget</ModalTitle>
                <CrossButton onPress={() => setStep(0)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <FlatList
                renderItem={({ item, index }) => (
                  <View
                    style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
                  >
                    <SizeContainer center>
                      <WidgetButton
                        onPress={() => {
                          setWidgetType('Mail');
                          setStep(2);
                        }}
                      >
                        <Feather name="mail" size={24} color="#1E1E1E" />
                        <WidgetTitle>Mail</WidgetTitle>
                      </WidgetButton>
                      <WidgetButton
                        onPress={() => {
                          setWidgetType('Trombino');
                          setStep(2);
                        }}
                      >
                        <MaterialCommunityIcons
                          name="wall"
                          size={26}
                          color="#1E1E1E"
                        />
                        <WidgetTitle>Trombino</WidgetTitle>
                      </WidgetButton>
                      <WidgetButton
                        onPress={() => {
                          setWidgetType('Weather');
                          setStep(2);
                        }}
                      >
                        <Ionicons
                          name="cloud-outline"
                          size={24}
                          color="#1E1E1E"
                        />
                        <WidgetTitle>Weather</WidgetTitle>
                      </WidgetButton>
                      <WidgetButton
                        onPress={() => {
                          setWidgetType('Calendar');
                          setStep(2);
                        }}
                      >
                        <MaterialCommunityIcons
                          name="calendar"
                          size={24}
                          color="black"
                        />
                        <WidgetTitle>Calendar</WidgetTitle>
                      </WidgetButton>
                    </SizeContainer>
                    <SizeContainer center={false}>
                      <WidgetButton
                        onPress={() => {
                          setWidgetType('Cloud');
                          setStep(2);
                        }}
                      >
                        <MaterialCommunityIcons
                          name="cloud-download-outline"
                          size={24}
                          color="black"
                        />
                        <WidgetTitle>Cloud</WidgetTitle>
                      </WidgetButton>
                    </SizeContainer>
                  </View>
                )}
                data={[1]}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
                // keyExtractor={(item) => item.id}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false },
                )}
              />
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
              <SizeContainer center>
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
