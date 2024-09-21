import { Group, Text, UnstyledButton } from "@mantine/core";
import { useNavigate } from "@remix-run/react";


export default function RegisterLoginLink() {
    const navigate = useNavigate()

    return (
        <Group gap={4} w={'100%'} justify={'center'} align={'center'}>
            <Text>Already have an account?</Text>
            <UnstyledButton
                onClick={() => navigate('/login')}
            >
                <Text c={'yellow'}><u>Login!</u></Text>
            </UnstyledButton>
        </Group>
    )
}