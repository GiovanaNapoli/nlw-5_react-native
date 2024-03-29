import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import { Platform } from "react-native";
import fonts from "../../styles/fonts";

const statusBarHeight =
  Platform.OS == "android" ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #52665a;
  font-family: ${fonts.heading};
  line-height: 34px;
  margin-top: ${statusBarHeight}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 20px;
  color: #52665a;
  font-family: ${fonts.text};
`;

export const Thumb = styled.Image`
  height: ${Dimensions.get("window").width * 0.7}px;
`;
