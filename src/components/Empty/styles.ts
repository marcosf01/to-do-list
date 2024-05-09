import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin: 20px 24px;

    height: 208px;

    border-top-width: 1;
    border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};

    align-items: center;
    justify-content: center;
`;

export const ListImagem = styled.Image`
    width: 56px;
    height: 56px;

    margin-bottom: 16px;
`;

export const TextImagem = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`;