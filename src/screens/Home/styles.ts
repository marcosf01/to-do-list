import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ContainerInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 20px;
`;

export const InfoCriadas = styled.View`
    flex-direction: row;
`;

export const Criadas = styled.Text`
    color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const InfoCriadasIndicador = styled.View`
    width: 25px;
    height: 19px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    margin-left: 8px;
`;

export const Indicador = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const InfoConcluidas = styled.View`
    flex-direction: row;
`;

export const Concluidas = styled.Text`
    color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const InfoConcluidasIndicador = styled.View`
    width: 25px;
    height: 19px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    margin-left: 8px;
`;

export const IndicadorConcluidas = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
