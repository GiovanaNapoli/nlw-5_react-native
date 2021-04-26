import React from "react";
import { TouchableOpacityProps } from "react-native";
import { EnterButton, ButtonText } from "./styles";
import { Feather } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function WelcomeButton({ title, ...rest }: ButtonProps) {
  return (
    <EnterButton activeOpacity={0.7} {...rest}>
      <ButtonText>
        <Feather name="chevron-right" size={32} />
      </ButtonText>
    </EnterButton>
  );
}
