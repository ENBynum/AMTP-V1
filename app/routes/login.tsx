import { Center, Divider, Paper, Stack } from "@mantine/core";
import { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import LoginForm from "~/components/Login/LoginForm";
import LoginHeader from "~/components/Login/LoginHeader";
import LoginNotifications from "~/components/Login/LoginNotifications";
import LoginRegisterLink from "~/components/Login/LoginRegisterLink";

export const meta: MetaFunction = () => {
    return [
        { title: "AMTP Management" },
        { name: "description", content: "Login to AMTP Management!" },
    ]
}


export default function LoginPage() {
    const [accountDisabled, setAccountDisabled] = useState(false)
    const [invalidCredentials, setInvalidCreds] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)

    return (
        <Center w={'100vw'} h={'100vh'}>
            <LoginNotifications
                accountDisabled={accountDisabled}
                invalidCredentials={invalidCredentials}
                loginSuccess={loginSuccess}
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
                    <LoginHeader/>
                    <Divider/>
                    <LoginForm 
                        setAccountDisabled={setAccountDisabled}
                        setInvalidCredentials={setInvalidCreds}
                        setLoginSuccess={setLoginSuccess}
                    />
                    <Divider/>
                    <LoginRegisterLink/>
                </Stack>
            </Paper>
        </Center>
    )
    
}