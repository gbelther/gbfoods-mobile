import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background_inverted};
  border-radius: 4px;
  font-size: ${RFValue(24)}px;

  padding: 8px;
`;
