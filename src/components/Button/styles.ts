import styled from "styled-components/native";
import { TouchableOpacity } from "react-native"


export const Container = styled(TouchableOpacity)`
    width: 52px;
    height: 52px;

    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

    align-items: center;
    justify-content: center;

    border-radius: 6px;
`;