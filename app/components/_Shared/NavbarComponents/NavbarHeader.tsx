import { Group, Title } from "@mantine/core";
import { useAuth } from "~/components/_Config/context/AuthContext";
import ArmyAviationWings from '/ArmyAviationWngs.svg'



export default function NavbarHeader() {
    const auth = useAuth()
    const username = 'SGT BYNUM, EMMANUEL NATHAN'

    return (
        <Group align={'center'}>
            <img
                src={ArmyAviationWings}
                alt={"Aviation Wings"}
                height={"30px"}
                width={"auto"}
            />
            {auth.user ?
            <Title order={4}>{username}</Title> :
            <Title order={4}>AMTP MANAGEMENT</Title>}
        </Group>
    )
}