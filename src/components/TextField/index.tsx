import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface IProps extends TextInputProps {}

export function TextField({ ...rest }: IProps) {
  return <Container {...rest} />;
}
