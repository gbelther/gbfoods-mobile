import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { AxiosError } from "axios";

import { SubmitButton } from "../../components/SubmitButton";
import { BackButton } from "../../components/BackButton";

import { api } from "../../services/api";
import { ErrorHandling } from "../../utils/errors/implementation/ErrorHandling";

import * as Sty from "./styles";
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
  password: yup.string().required("Campo obrigatório"),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

export function Register() {
  const theme = useTheme();
  const navigation = useNavigation() as NavigationProp<ParamListBase>;

  const { register } = useAuth();

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorRequest, setErrorRequest] = useState({
    isShow: false,
    message: "",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({
    name,
    email,
    password,
    passwordConfirm,
  }: ISubmitForm) => {
    setLoadingSubmit(true);

    try {
      await register({
        name,
        email,
        password,
      });

      navigation.navigate("Login");
    } catch (error) {
      const errorHandling = new ErrorHandling();
      const errorMessage = errorHandling.getMessage(error as AxiosError);

      setErrorRequest({
        isShow: true,
        message: errorMessage,
      });
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Sty.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Sty.Header>
            <Sty.BackButtonWrapper>
              <BackButton onPress={handleBack} />
            </Sty.BackButtonWrapper>

            <Sty.Title>Registre-se</Sty.Title>
            <Sty.Subtitle>e peça seu lanche agora!</Sty.Subtitle>
          </Sty.Header>

          {errorRequest.isShow && (
            <Sty.ErrorFeedback>{errorRequest.message}</Sty.ErrorFeedback>
          )}

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
                loading={loadingSubmit}
              />
            </Sty.ButtonWrapper>
          </Sty.Content>
        </Sty.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
