import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 54px;
    max-height: 54px;

    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 6px;

    margin-right: 4px;
`;