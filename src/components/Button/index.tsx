import React from "react";
import { TouchableOpacityProps } from "react-native";
import { EnterButton, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <EnterButton activeOpacity={0.7} {...rest}>
      <ButtonText> {title} </ButtonText>
    </EnterButton>
  );
}
