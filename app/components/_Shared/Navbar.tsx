import { Container, Group } from "@mantine/core";
import { useAuth } from "../_Config/context/AuthContext";
import { getColorScheme } from "../_Config/functions/getColorScheme";



export default function Navbar() {
    const auth = useAuth()

    return (
        <Container 
            h={'60px'}
            fluid={true}
            bg={getColorScheme() === 'dark' ? 'dark' : '#EFF0F3'}
        >
            <Group
                w={'100%'}
                h={'100%'}
                justify={'space-between'}
                align={'center'}
            >

            </Group>
        </Container> 
    )
}