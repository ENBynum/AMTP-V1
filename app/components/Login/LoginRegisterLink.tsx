import { Group, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "@remix-run/react";


export default function LoginRegisterLink() {
    const navigate = useNavigate()

    return (
        <Group gap={4} w={'100%'} justify={'center'} align={'center'}>
            <Text>Need to register for an account?</Text>
            <UnstyledButton
                onClick={() => navigate('/register')}
            >
                <Text c={'yellow'}><u>Register Now!</u></Text>
            </UnstyledButton>
        </Group>
    )
}