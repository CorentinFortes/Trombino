import React from 'react';
import { ButtonContainer, ButtonText } from './Button.style';

type ButtonProps = {
  children: string;
  onPress?: () => void;
  onLongPress?: () => void;
  type: 'primary' | 'secondary';
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  small?: boolean;
};

type ButtonType =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'elevated'
  | 'contained-tonal';

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onPress,
  onLongPress,
  type,
  backgroundColor,
  color,
  small,
  ...props
}) => {
  const getType: {
    [key in typeof type]: ButtonType;
  } = {
    primary: 'contained',
    secondary: 'outlined',
  };
  const getColor = () => {
    if (backgroundColor) {
      return backgroundColor;
    }
    if (type === 'primary') {
      return '#1E1E1E';
    } else if (type === 'secondary') {
      return '#FFFAFA';
    }
  };
  return (
    <ButtonContainer
      mode={getType[type]}
      backgroundColor={backgroundColor}
      onPress={onPress}
      onLongPress={onLongPress}
      compact={small}
      buttonColor={getColor()}
      textColor={color ? color : 'white'}
      {...props}
    >
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export const Button = React.memo(ButtonComponent);
