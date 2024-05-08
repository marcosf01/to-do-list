import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    width: 100%;
    height: 173px;
    padding: 70px 24px 0 24px;
    margin-bottom: 55px;
`;

export const ContainerInput = styled.View`
    align-self: center;
    flex-direction: row;
    position: absolute;
    bottom: -27px ;
`;

export const Logo = styled.Image`
    width: 110px;
    height: 32px;
    align-self: center;
`;