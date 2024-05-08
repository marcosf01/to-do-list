import { Button } from "../Button";
import { Input } from "../Input";
import { Container, ContainerInput, Logo } from "./styles";
import logoImg from "../../assets/Logo.png"
import { TextInputProps, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & TextInputProps;

export function Header({ ...rest }: Props) {
    return (
        <Container>
            <Logo source={logoImg} />
            <ContainerInput>
                <Input {...rest} />
                <Button {...rest} />
            </ContainerInput>
        </Container>
    );
}