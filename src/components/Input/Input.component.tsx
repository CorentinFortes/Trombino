import React from 'react';
import { InputContainer, LoginInput } from './Input.style';

type InputProps = {
  icon?: React.ReactNode;
  type: 'text' | 'password';
  value?: string;
  placeholder?: string;
};

const InputComponent: React.FC<InputProps> = ({
  icon,
  type,
  value,
  placeholder,
}) => {
  return (
    <InputContainer>
      {icon}
      <LoginInput
        value={value}
        autoCapitalize="none"
        secureTextEntry={type === 'password'}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export const Input = React.memo(InputComponent);
