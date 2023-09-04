import { View, Text } from "react-native";
import { Logo } from "../svg/Logo";
import { LoginPageContainer } from "./LoginScreen.style";

function LoginScreen() {
    return (
        <LoginPageContainer>
            <Logo/>
        </LoginPageContainer>
    )
}

export default LoginScreen;