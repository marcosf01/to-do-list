import { TouchableOpacity } from "react-native";
import { Container, TextContainer, TextCriated, TextDone } from "./styles";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TaskDTO } from "../../dtos/TaskDTO";

type Props = TaskDTO & {
    title: string,
    isCompleted: boolean,
    onTaskDeleted: (id: string) => void
    onTaskDone: (id: string) => void
}

export function Task({ id, title, isCompleted, onTaskDeleted, onTaskDone }: Props) {
    return(
        <Container>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
                <MaterialCommunityIcons 
                    name={isCompleted ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline"} 
                    size={21} 
                    color={isCompleted ? '#8284FA' : '#4EA8DE'} 
            />
            </TouchableOpacity>

            <TextContainer>
                {isCompleted ? <TextDone>{title}</TextDone> : <TextCriated>{title}</TextCriated>}
            </TextContainer>

            <TouchableOpacity onPress={() => onTaskDeleted(id)}>
                <MaterialCommunityIcons name="trash-can-outline" size={20} color="#808080" />
            </TouchableOpacity>
        </Container>
    )
}