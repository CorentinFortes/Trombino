import React from 'react';
import {
  CardContainer,
  InfoContainer,
  TextEmail,
  TextName,
} from './EmployeeCard.style';
import { TouchableOpacity } from 'react-native';

export enum CardSize {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export type CardType = {
  size: 'MEDIUM' | 'SMALL';
};

type EmployeeCardProps = {
  image: React.ReactNode;
  name: string;
  surname: string;
  email: string;
  size?: 'MEDIUM' | 'SMALL';
  func?: () => void;
};

const EmployeeCardComponent: React.FC<EmployeeCardProps> = ({
  image,
  name,
  surname,
  email,
  size,
  func,
}) => {
  return size === 'MEDIUM' ? (
    <>
      <TouchableOpacity onPress={func}>
        <CardContainer width={110} height={157}>
          {image}
          <InfoContainer>
            <TextName fontSize={10} numberOfLines={1}>
              {name} {surname}
            </TextName>
            <TextEmail fontSize={7.5} numberOfLines={1}>
              {email}
            </TextEmail>
          </InfoContainer>
        </CardContainer>
      </TouchableOpacity>
    </>
  ) : (
    <>
      <CardContainer>
        {image}
        <InfoContainer>
          <TextName>
            {name} {surname}
          </TextName>
          <TextEmail>{email}</TextEmail>
        </InfoContainer>
      </CardContainer>
    </>
  );
};

export const EmployeeCard = React.memo(EmployeeCardComponent);
