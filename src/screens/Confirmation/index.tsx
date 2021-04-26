import React from "react";
import { Container, Wrapper, Emoji, Title, SubTitle, Footer } from "./styles";
import { StatusBar } from "react-native";
import { ConfirmButton } from "../../components";

export default function Confirmation() {
  return (
    <Container>
      <StatusBar backgroundColor={"#fff"} translucent />
      <Wrapper>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das duas plantinhas com muito cuidado
        </SubTitle>
        <Footer>
          <ConfirmButton title="Começar" />
        </Footer>
      </Wrapper>
    </Container>
  );
}
