import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Emoji,
  Form,
  Input,
  Title,
  Footer,
  ContentKeyboard,
} from "./styles";
import { ConfirmButton } from "../../components";
import { Platform, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilld, setIsFilld] = useState(false);

  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleSubimit() {
    navigation.navigate("Confirmation");
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilld(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilld(!!value);
    setName(value);
  }

  return (
    <Container>
      <StatusBar backgroundColor={"#fff"} translucent />
      <ContentKeyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Wrapper>
          <Form>
            <>
              <Emoji>{isFilld ? "😄" : "😃"}</Emoji>
              <Title>
                Como podemos {"\n"}
                ajudar você?
              </Title>
            </>
            <Input
              placeholder="Digite um nome"
              isFocused={isFocused}
              isFillded={isFilld}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <Footer>
              <ConfirmButton title="Confirmar" onPress={handleSubimit} />
            </Footer>
          </Form>
        </Wrapper>
      </ContentKeyboard>
    </Container>
  );
}
