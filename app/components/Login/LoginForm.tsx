import { Button, PasswordInput, Stack, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import axios from "axios"


interface LoginFormProps {
    setAccountDisabled: (e: any) => void,
    setInvalidCredentials: (e: any) => void,
    setLoginSuccess: (e: any) => void
}

export default function LoginForm({setAccountDisabled, setInvalidCredentials, setLoginSuccess}: LoginFormProps) {
    interface LoginForm {
        username: string,
        password: string
    }

    const loginForm = useForm<LoginForm>({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: ''
        }
    })

    async function handleSubmit(data: LoginForm) {
        try {
            const res = await axios.post(
                'http://localhost:3000/api/auth/user/login',
                data
            )
                setLoginSuccess(true)
            setTimeout(() => {
                setLoginSuccess(false)
            }, 2000)
        } catch (error) {
            // @ts-ignore
            if (error.status === 401) {
                setInvalidCredentials(true)
                setTimeout( () => {
                    setInvalidCredentials(false)
                }, 3000)
                // @ts-ignore
            } else if (error.status === 423) {
                setAccountDisabled(true)
                setTimeout( () => {
                    setAccountDisabled(false)
                }, 3000)
            } else {
                // @ts-ignore
                console.log(error.message)
            }
        }
    }

    return (
        <form onSubmit={loginForm.onSubmit(handleSubmit)}>
            <Stack key={'loginForm'} gap={'xl'}>
                <Stack key={'formFields'} gap={'xs'}>
                    <TextInput
                        w={'100%'}
                        label={'Username'}
                        required
                        placeholder={'first.m.last'}
                        key={loginForm.key('username')}
                        {...loginForm.getInputProps('username')}
                    />
                    <PasswordInput
                        w={'100%'}
                        label={'Password'}
                        required
                        placeholder={'secret.123'}
                        key={loginForm.key('password')}
                        {...loginForm.getInputProps('password')}
                    />
                </Stack>
                <Button key={'loginFormSubmitButton'} type={'submit'}>
                    Login
                </Button>
            </Stack>
        </form>
    )
}