import React, { useState } from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BackButton } from "../../components/BackButton";

import * as Sty from "./styles";
import { TextField } from "../../components/TextField";
import { SubmitButton } from "../../components/SubmitButton";
import { useTheme } from "styled-components";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";

interface ISubmitForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export function ProfileEdit() {
  const theme = useTheme();
  const navigation = useNavigation() as NavigationProp<ParamListBase>;
  const { user } = useAuth();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const onSubmit = ({
    name,
    email,
    password,
    passwordConfirm,
  }: ISubmitForm) => {
    setLoadingSubmit(true);
    setLoadingSubmit(false);
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Sty.Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <Sty.Header>
            <Sty.BackButtonWrapper>
              <BackButton onPress={handleBack} />
            </Sty.BackButtonWrapper>

            <Sty.Title>Editar Perfil</Sty.Title>
          </Sty.Header>

          <Sty.Content>
            <Sty.InputWrapper>
              <Sty.Label>Nome Completo</Sty.Label>
              <Controller
                name="name"
                defaultValue={user.name}
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    placeholder="Digite seu nome"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    keyboardType="default"
                    autoCapitalize="words"
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
                defaultValue={user.email}
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextField
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
                  <TextField
                    placeholder="Digite a nova senha"
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
                  <TextField
                    placeholder="Confirme a nova senha"
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
                title="SALVAR"
                backgroundColor={theme.colors.main}
                onPress={handleSubmit(onSubmit)}
                loading={loadingSubmit}
              />
            </Sty.ButtonWrapper>
          </Sty.Content>
        </Sty.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
