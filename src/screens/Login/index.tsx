import React from "react";
import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "styled-components";
import * as yup from "yup";

import { SubmitButton } from "../../components/SubmitButton";

import * as Sty from "./styles";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export function Login() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Sty.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Sty.Header>
            <Sty.Title>Faça login</Sty.Title>
            <Sty.Subtitle>e peça seu lanche agora!</Sty.Subtitle>
          </Sty.Header>

          <Sty.Content>
            <Sty.InputWrapper>
              <Sty.Label>E-mail</Sty.Label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Sty.Input onChangeText={onChange} value={value} />
                )}
              />
              <Sty.ErrorFeedback>E-mail inválido</Sty.ErrorFeedback>
            </Sty.InputWrapper>
            <Sty.InputWrapper>
              <Sty.Label>Senha</Sty.Label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Sty.Input onChangeText={onChange} value={value} />
                )}
              />
              <Sty.ErrorFeedback>Senha inválida</Sty.ErrorFeedback>
            </Sty.InputWrapper>
            <Sty.ButtonWrapper>
              <SubmitButton
                title="ENTRAR"
                backgroundColor={theme.colors.main}
                onPress={handleSubmit(onSubmit)}
              />
              <SubmitButton
                title="CADASTRE-SE"
                backgroundColor={theme.colors.background_inverted}
                fontColor={theme.colors.text_inverted}
                onPress={() => console.log("Cadastre-se")}
              />
            </Sty.ButtonWrapper>
          </Sty.Content>
        </Sty.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
