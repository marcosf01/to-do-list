import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    height: 64px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 6px;

    margin-left: 24px;
    margin-right: 24px;

    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    padding:  12px;

    margin-bottom: 8px;
`;

export const TextContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    margin-right: 8px;
`;

export const TextCriated = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-decoration: none;
`;

export const TextDone = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-decoration-line: line-through;
`;



