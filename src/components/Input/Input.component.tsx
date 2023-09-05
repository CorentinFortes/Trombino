import React from 'react';
import { InputContainer, LoginInput } from './Input.style';

type InputProps = {
  icon?: React.ReactNode;
  type: 'text' | 'password';
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};

const InputComponent: React.FC<InputProps> = ({
  icon,
  type,
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <InputContainer>
      {icon}
      <LoginInput
        value={value}
        autoCapitalize="none"
        secureTextEntry={type === 'password'}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </InputContainer>
  );
};

export const Input = React.memo(InputComponent);
