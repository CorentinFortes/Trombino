import React from 'react';
import {
  CardContainer,
  InfoContainer,
  TextEmail,
  TextName,
} from './EmployeeCard.style';

type EmployeeCardProps = {
  image: React.ReactNode;
  name: string;
  surname: string;
  email: string;
};

const EmployeeCardComponent: React.FC<EmployeeCardProps> = ({
  image,
  name,
  surname,
  email,
}) => {
  return (
    <CardContainer>
      {image}
      <InfoContainer>
        <TextName>
          {name} {surname}
        </TextName>
        <TextEmail>{email}</TextEmail>
      </InfoContainer>
    </CardContainer>
  );
};

export const EmployeeCard = React.memo(EmployeeCardComponent);
