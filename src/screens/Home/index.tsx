import { AxiosError } from "axios";
import { useState } from "react";
import { Button, Text } from "react-native";

import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { ErrorHandling } from "../../utils/errors/implementation/ErrorHandling";

import * as Sty from "./styles";

interface ICategory {
  id: string;
  name: string;
}

const erroHandling = new ErrorHandling();

export function Home() {
  const { logout, user, verifyError } = useAuth();

  const [categories, setCategories] = useState<ICategory[]>([]);

  const handleLogoutUser = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("logout:", error);
    }
  };

  const handleLoadCategories = async () => {
    try {
      const response = await api.get("/categories");

      if (response.data && response.data.length > 0) {
        setCategories(response.data);
      }
    } catch (error) {
      const { message, statusCode } = verifyError(
        erroHandling.getInformations(error as AxiosError)
      );
    }
  };

  return (
    <Sty.Container>
      <Text>{user && user.refresh_token}</Text>

      <Button title="Deslogar" onPress={handleLogoutUser} />
      <Button title="Carregar categorias" onPress={handleLoadCategories} />

      {categories.map((category) => (
        <Text key={category.id}>{category.name}</Text>
      ))}
    </Sty.Container>
  );
}
