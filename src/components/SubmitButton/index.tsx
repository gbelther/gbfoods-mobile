import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface IProps extends RectButtonProps {
  title: string;
  backgroundColor?: string;
  fontColor?: string;
  onPress: () => void;
}

export function SubmitButton({
  title,
  backgroundColor,
  fontColor,
  onPress,
  ...rest
}: IProps) {
  return (
    <Container {...rest} onPress={onPress} backgroundColor={backgroundColor}>
      <Title fontColor={fontColor}>{title}</Title>
    </Container>
  );
}
