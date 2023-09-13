import React from 'react';
import { LoginInput } from './Input.style';

type InputProps = {
  icon?: React.ReactNode;
  type: 'text' | 'password';
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: string;
};

const InputComponent: React.FC<InputProps> = ({
  icon,
  type,
  value,
  placeholder,
  onChangeText,
  placeholderTextColor,
}) => {
  return (
    <LoginInput
      style={{ width: 300 }}
      left={icon}
      value={value}
      mode="outlined"
      autoCapitalize="none"
      secureTextEntry={type === 'password'}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      outlineColor="#c2bfbf"
      activeOutlineColor="#c2bfbf"
      textColor="#1E1E1E"
    />
  );
};

export const Input = React.memo(InputComponent);
