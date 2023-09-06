import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { WidgetSize, WidgetType } from '../../types/widgetType';
import {
  EmployeeContainer,
  TextMedium,
  TopContent,
  Widget,
  HeaderContainer,
  TextRegular,
  TeamTextContainer,
} from './TrombinoscopeWidget.style';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Employee, GetEmployeeImage } from '../../api/api';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

type TrombinoWidgetProps = {
  employees: Employee[] | undefined;
  token: string;
  onPress: () => void;
} & WidgetType;

const TrominoWidgetComponent: React.FC<TrombinoWidgetProps> = ({
  employees,
  token,
  size,
  onPress,
}) => {
  const [lastTeamMemnber, setLastTeamMember] =
    React.useState<string>('Loading...');
  const [nbMembers, setNbMembers] = React.useState<number>(0);
  const [openSizeModal, setOpenSizeModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    'LARGE' | 'MEDIUM' | 'SMALL' | 'HEADER'
  >(size);
  const changeSize = (targetSize: WidgetSize) => {
    setCurrentSize(targetSize);
    setOpenSizeModal(false);
  };

  React.useEffect(() => {
    if (employees != undefined) {
      setLastTeamMember(employees[employees.length - 1].name);
      setNbMembers(employees.length);
    }
  }, [employees]);

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={() => setOpenSizeModal(true)}
      >
        <Widget
          size={currentSize}
          icon={<MaterialCommunityIcons name="wall" size={24} color="black" />}
        >
          <>
            {currentSize === 'LARGE' && (
              <>
                <TopContent>
                  <MaterialCommunityIcons name="wall" size={26} color="black" />
                  <TextMedium>Trombinoscope</TextMedium>
                </TopContent>
                <TextMedium fontSize={10}>
                  Let&apos;s discover the team!
                </TextMedium>
                <EmployeeContainer>
                  {employees != undefined ? (
                    <EmployeeCard
                      name={employees![0].name}
                      surname={employees![0].surname}
                      email={employees![0].email}
                      image={
                        <Image
                          source={GetEmployeeImage(token, employees![0].id)}
                          width={85}
                          height={80}
                          borderTopLeftRadius={6.66}
                          borderTopRightRadius={6.66}
                        />
                      }
                    />
                  ) : (
                    <Text>loading...</Text>
                  )}
                  {employees != undefined ? (
                    <EmployeeCard
                      name={employees![1].name}
                      surname={employees![1].surname}
                      email={employees![1].email}
                      image={
                        <Image
                          source={GetEmployeeImage(token, employees![1].id)}
                          width={85}
                          height={80}
                          borderTopLeftRadius={6.66}
                          borderTopRightRadius={6.66}
                        />
                      }
                    />
                  ) : (
                    <Text>loading...</Text>
                  )}
                  {employees != undefined ? (
                    <EmployeeCard
                      name={employees![2].name}
                      surname={employees![2].surname}
                      email={employees![2].email}
                      image={
                        <Image
                          source={GetEmployeeImage(token, employees![2].id)}
                          width={85}
                          height={80}
                          borderTopLeftRadius={6.66}
                          borderTopRightRadius={6.66}
                        />
                      }
                    />
                  ) : (
                    <Text>loading...</Text>
                  )}
                </EmployeeContainer>
              </>
            )}
            {currentSize === 'HEADER' && (
              <>
                <TopContent gap={15}>
                  <MaterialCommunityIcons name="wall" size={16} color="black" />
                  <HeaderContainer>
                    <TextMedium fontSize={14}>
                      {lastTeamMemnber} is on Trombino!
                    </TextMedium>
                    <TextRegular fontSize={10}>
                      Let&apos;s discover the other team members !
                    </TextRegular>
                  </HeaderContainer>
                </TopContent>
              </>
            )}
            {currentSize === 'SMALL' && (
              <>
                <TopContent gap={6}>
                  <MaterialCommunityIcons name="wall" size={16} color="black" />
                  <TextMedium fontSize={12}>Trombinoscope</TextMedium>
                </TopContent>
                <TextMedium fontSize={32}>{nbMembers}</TextMedium>
                <TeamTextContainer>
                  <TextMedium fontSize={14}>Team members</TextMedium>
                  <TextRegular fontSize={12}>are on Trombino!</TextRegular>
                </TeamTextContainer>
              </>
            )}
            {currentSize === 'MEDIUM' && (
              <>
                <TopContent gap={6}>
                  <MaterialCommunityIcons name="wall" size={16} color="black" />
                  <TextMedium fontSize={12}>Trombinoscope</TextMedium>
                </TopContent>
                <HeaderContainer>
                  <TextMedium fontSize={14}>
                    {lastTeamMemnber} is on Trombino!
                  </TextMedium>
                  <TextRegular fontSize={10}>
                    {nbMembers - 1} other team members are also present!
                    Let&apos;s find out who they are
                  </TextRegular>
                </HeaderContainer>
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

export const TrombinoscopeWidget = React.memo(TrominoWidgetComponent);
