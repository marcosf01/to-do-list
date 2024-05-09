import { useState } from "react";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { Concluidas, Container, ContainerInfo, Criadas, Indicador, InfoConcluidas, InfoConcluidasIndicador, InfoCriadas, InfoCriadasIndicador } from "./styles";
import { TaskDTO } from "../../dtos/TaskDTO";
import { Alert, FlatList } from "react-native";
import { uuid } from "../../utils/uuid";
import { Empty } from "../../components/Empty";

export function Home() {
    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newTask, setNewTask] = useState('')

    function AdicionarTask() {
        if (newTask !== '' && newTask.length >= 5) {
            setTasks((tasks) => [...tasks, {id: uuid(), isCompleted: false, title: newTask.trim()}])
        }
        
    }

    function ExcluirTask(id: string) {
        Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () => setTasks((tasks) => tasks.filter((task) => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            } 
        ])
    }

    function ConcluidaTask(id: string) {
        setTasks((tasks) => tasks.map((task) => {task.id === id ? (task.isCompleted = !task.isCompleted) : null
            return task
        }))
    }

    const totalConcluidas = tasks.filter(({isCompleted}) => isCompleted).length;
    const totalCriadas = tasks.length;

    return(
        <Container>
            <Header onPress={AdicionarTask} onChangeText={setNewTask} />
            <ContainerInfo>
                <InfoCriadas>
                    <Criadas>
                        Criadas
                    </Criadas>
                    <InfoCriadasIndicador>
                        <Indicador>
                            {totalCriadas}
                        </Indicador>
                    </InfoCriadasIndicador>
                </InfoCriadas>

                <InfoConcluidas>
                    <Concluidas>
                        Concluidas
                    </Concluidas>
                    <InfoConcluidasIndicador>
                        <Indicador>
                            {totalConcluidas}
                        </Indicador>
                    </InfoConcluidasIndicador>
                </InfoConcluidas>
            </ContainerInfo>

            <FlatList 
                data={tasks}
                keyExtractor={(tasks) => tasks.id}
                renderItem={({ item }) => (
                    <Task 
                        key={item.id}
                        title={item.title}
                        isCompleted={item.isCompleted}
                        onTaskDeleted={() => ExcluirTask(item.id)}
                        onTaskDone={() => ConcluidaTask(item.id)} id={""}                    />
                ) }

                ListEmptyComponent={<Empty />}
            />
        </Container>
    )
}