import { Center, Stack, Title } from "@mantine/core";
import ArmyAviationWings from '/ArmyAviationWngs.svg'


export default function LoginHeader() {
    return (
        <Stack gap={9} key={'header'}>
            <img
                src={ArmyAviationWings}
                alt={'Aviation Wings'}
                height={'100px'}
                width={'auto'}
            />
            <Center>
                <Title order={2}>Login to AMTP Management</Title>
            </Center>
        </Stack>
    )
}