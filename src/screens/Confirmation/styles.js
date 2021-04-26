import styled from "styled-components/native";

import Constants from "expo-constants";
import { Platform } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const statusBarHeight =
  Platform.OS == "android" ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-top: ${statusBarHeight}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.heading};
  padding: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 50px;
  margin-top: 20px;
`;
