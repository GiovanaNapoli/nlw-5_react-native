import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform } from "react-native";

const statusBarHeight =
  Platform.OS == "android" ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #52665a;
  margin-top: ${statusBarHeight}px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 20px;
  color: #52665a;
`;
