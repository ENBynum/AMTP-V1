import { Group, Text, UnstyledButton } from "@mantine/core";


export default function LoginRegisterRedirect() {
    return (
        <Group gap={4} w={'100%'} justify={'center'} align={'center'}>
            <Text>Need to register for an account?</Text>
            <UnstyledButton
                onClick={() => console.log('Register Now')}
            >
                <Text c={'yellow'}><u>Register Now!</u></Text>
            </UnstyledButton>
        </Group>
    )
}