import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(SafeAreaView)`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacings.tab_height}px;
  flex: 1;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.colors.background_main};
`;

export const LogoutWrapper = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 25}px;
  right: 5%;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const Options = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Option = styled(RectButton)`
  background-color: #eeeeee;
  width: 100%;
  margin-bottom: 12px;
  padding: 4px 0;
  border-radius: 4px;
`;

export const OptionText = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-transform: uppercase;
  text-align: center;
`;

export const ProfileWrapper = styled.View`
  width: 80%;
  height: 100%;
  margin-top: ${getStatusBarHeight() + 25}px;
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.View`
  width: 120px;
  height: 120px;
  margin-bottom: 40px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const InformationsWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InformationText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(24)}px;

  margin-bottom: 12px;
`;
