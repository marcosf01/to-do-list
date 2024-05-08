import { TouchableOpacityProps } from "react-native"
import { Container} from "./styles"
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps

export function Button({ ...rest }: Props) {
    return(
        <Container {...rest}>
            <MaterialCommunityIcons name="plus-circle-outline" size={16} />
        </Container>
    )
}