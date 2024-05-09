import { Container, ListImagem, TextImagem } from "./styles";

import imagemListaVazia from '../../assets/Clipboard.png'

export function Empty() {
    return(
        <Container>
            <ListImagem source={imagemListaVazia} />
            <TextImagem>
                Você ainda não tem tarefas cadastradas
            </TextImagem>
            <TextImagem>
                Crie tarefas e organize seus itens a fazer
            </TextImagem>
        </Container>
    )
}