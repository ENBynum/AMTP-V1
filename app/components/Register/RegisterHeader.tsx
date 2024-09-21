import { Center, Stack, Title } from "@mantine/core";
import ArmyAviationWings from '/ArmyAviationWngs.svg'


export default function RegisterHeader() {
    return (
        <Stack gap={9} key={'header'}>
            <img
                src={ArmyAviationWings}
                alt={'Aviation Wings'}
                height={'50px'}
                width={'auto'}
            />
            <Center>
                <Title order={2}>Register for AMTP Management</Title>
            </Center>
        </Stack>
    )
}