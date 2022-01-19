import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_main};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
  margin-top: ${getStatusBarHeight()}px;
  padding-bottom: 24px;

  display: flex;
  align-items: center;
`;

export const BackButtonWrapper = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + -8}px;
  left: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    display: "flex",
    alignItems: "center",
  },
})`
  width: 80%;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(20)}px;

  display: flex;
`;

export const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background_inverted};
  border-radius: 4px;
  font-size: ${RFValue(24)}px;

  padding: 8px;
`;

export const ErrorFeedback = styled.Text`
  color: ${({ theme }) => theme.colors.failure};
`;

export const ButtonWrapper = styled.View`
  width: 100%;
`;
