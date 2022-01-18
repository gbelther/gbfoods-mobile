import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface IButtonProps {
  backgroundColor: string;
}

interface ITitleProps {
  fontColor: string;
}

export const Container = styled(TouchableOpacity)<IButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.background_main};
`;

export const Title = styled.Text<ITitleProps>`
  color: ${({ theme, fontColor }) => fontColor ?? theme.colors.text};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
