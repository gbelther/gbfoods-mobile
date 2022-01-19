import { Button } from "react-native";
import { useAuth } from "../../hooks/useAuth";

import * as Sty from "./styles";

export function Home() {
  const { logout } = useAuth();

  const handleLogoutUser = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sty.Container>
      <Button title="Deslogar" onPress={handleLogoutUser} />
    </Sty.Container>
  );
}
