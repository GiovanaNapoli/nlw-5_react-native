import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Button, ButtonText } from "./styles";

interface ConfirmButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function ConfirmButton({ title, ...rest }: ConfirmButtonProps) {
  return (
    <Button activeOpacity={0.7} {...rest}>
      <ButtonText> {title} </ButtonText>
    </Button>
  );
}
