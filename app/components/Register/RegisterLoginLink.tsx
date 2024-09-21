import { Group, Text, UnstyledButton } from "@mantine/core";


export default function RegisterLoginLink() {
    return (
        <Group gap={4} w={'100%'} justify={'center'} align={'center'}>
            <Text>Already have an account?</Text>
            <UnstyledButton
                onClick={() => console.log('Login')}
            >
                <Text c={'yellow'}><u>Login!</u></Text>
            </UnstyledButton>
        </Group>
    )
}