import React, { useState } from "react";
import { StatusBar, Image } from "react-native";
import { Container, Title, SubTitle } from "./styles";
import { Button } from "../../components";

import wateringImg from "../../assets/watering.png";

export default function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(true);
  }

  return (
    <Container>
      <StatusBar backgroundColor={"#fff"} translucent />
      <Title>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Title>
      {visible && <Image source={wateringImg} />}
      <SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </SubTitle>
      <Button title="Ir" />
    </Container>
  );
}
