import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_main};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  margin-top: ${getStatusBarHeight() + 10}px;

  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(24)}px;

  display: flex;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const ErrorFeedback = styled.Text`
  color: ${({ theme }) => theme.colors.failure};
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 16px;
`;
