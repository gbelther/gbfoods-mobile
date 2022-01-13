import React, { useEffect } from "react";
import {
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

interface ISubmitForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export function Register() {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    name,
    email,
    password,
    passwordConfirm,
  }: ISubmitForm) => {
    console.log({
      name,
      email,
      password,
      passwordConfirm,
    });
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
            <Sty.Title>Registre-se</Sty.Title>
            <Sty.Subtitle>e peça seu lanche agora!</Sty.Subtitle>
          </Sty.Header>

          <Sty.Content>
            <Sty.InputWrapper>
              <Sty.Label>Nome Completo</Sty.Label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Sty.Input
                    placeholder="Digite seu nome"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                )}
              />
              <Sty.ErrorFeedback>
                {!!errors.name ? errors.name.message : ""}
              </Sty.ErrorFeedback>
            </Sty.InputWrapper>
            <Sty.InputWrapper>
              <Sty.Label>E-mail</Sty.Label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Sty.Input
                    placeholder="Digite seu E-mail"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                )}
              />
              <Sty.ErrorFeedback>
                {!!errors.email ? errors.email.message : ""}
              </Sty.ErrorFeedback>
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
                  <Sty.Input
                    placeholder="Digite sua senha"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={true}
                  />
                )}
              />
              <Sty.ErrorFeedback>
                {errors.password ? errors.password.message : ""}
              </Sty.ErrorFeedback>
            </Sty.InputWrapper>
            <Sty.InputWrapper>
              <Sty.Label>Confirmar Senha</Sty.Label>
              <Controller
                name="passwordConfirm"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Sty.Input
                    placeholder="Confirme sua senha"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={true}
                  />
                )}
              />
              <Sty.ErrorFeedback>
                {errors.passwordConfirm ? errors.passwordConfirm.message : ""}
              </Sty.ErrorFeedback>
            </Sty.InputWrapper>
            <Sty.ButtonWrapper>
              <SubmitButton
                title="CADASTRAR"
                backgroundColor={theme.colors.main}
                onPress={handleSubmit(onSubmit)}
              />
              <SubmitButton
                title="VOLTAR"
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
