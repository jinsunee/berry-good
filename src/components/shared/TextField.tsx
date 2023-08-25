import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

interface TextFieldProps extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

export const TextField = ({
  value,
  onChangeText,
  placeholder,
  ...props
}: TextFieldProps) => {
  const theme = useTheme();

  const [isFocosed, setIsFocused] = useState(false);

  return (
    <StyledTextInput
      isFocused={isFocosed}
      value={value}
      onChangeText={text => onChangeText?.(text)}
      placeholder={placeholder}
      placeholderTextColor={theme.secondary[1]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

const StyledTextInput = styled.TextInput<{isFocused: boolean}>`
  border-radius: 30px;
  border: 1px solid
    ${({theme, isFocused}) => (isFocused ? theme.text : theme.secondary[1])};
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
`;
