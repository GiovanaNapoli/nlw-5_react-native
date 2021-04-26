import React from "react";
import { StatusBar } from "react-native";
import { Container, Title, SubTitle, Thumb, Wrapper } from "./styles";
import { WelcomeButton } from "../../components";

import wateringImg from "../../assets/watering.png";
import { useNavigation } from "@react-navigation/core";

export default function Welcome() {
  const navigation = useNavigation()

  function handleStart(){
    navigation.navigate('UserIdentification')
  }

  return (
    <Container>
      <StatusBar backgroundColor={"#fff"} translucent />
      <Wrapper>
        <Title>
          Gerencie {"\n"}
          suas plantas de {"\n"}
          forma fácil
        </Title>
        <Thumb source={wateringImg} resizeMode="contain" />
        <SubTitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </SubTitle>
        <WelcomeButton title="Ir" onPress={handleStart} />
      </Wrapper>
    </Container>
  );
}
