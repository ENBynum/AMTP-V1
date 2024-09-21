import { Center, Divider, Paper, Stack } from "@mantine/core"
import { MetaFunction } from "@remix-run/node"
import { useState } from "react"
import RegisterForm from "~/components/Register/RegisterForm"
import RegisterHeader from "~/components/Register/RegisterHeader"
import RegisterLoginLink from "~/components/Register/RegisterLoginLink"
import RegisterNotifications from "~/components/Register/RegisterNotifications"



export const meta: MetaFunction = () => {
    return [
        { title: "AMTP Management" },
        { name: "description", content: "Register for AMTP Management!" },
    ]
}

export default function RegisterPage() {
    const [userExists, setUserExists] = useState(false)
    const [registerSuccess, setRegisterSuccess] = useState(false)

    return (
        <Center w={'100vw'} h={'100vh'}>
            <RegisterNotifications
                userExists={userExists}
                registerSuccess={registerSuccess}
            />
            <Paper
                miw={'24vw'}
                mih={'32vh'}
                shadow={'xl'}
                p={'xl'}
                radius={'lg'}
                withBorder
            >
                <Stack>
                    <RegisterHeader/>
                    <Divider/>
                    <RegisterForm
                        setUserExits={setUserExists}
                        setRegisterSuccess={setRegisterSuccess}
                    />
                    <Divider/>
                    <RegisterLoginLink/>
                </Stack>
            </Paper>
        </Center>
    )
}