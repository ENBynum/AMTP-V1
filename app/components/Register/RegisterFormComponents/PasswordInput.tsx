import { Grid, PasswordInput } from "@mantine/core";
import { useRegisterForm } from "../context/RegisterFormContext";



export default function RegisterFormPasswordInput() {
    const form = useRegisterForm()

    return (
        <Grid key={'PasswordInputs'}>
            <Grid.Col span={6}>
                <PasswordInput
                    w={'100%'}
                    label={'Password'}
                    placeholder={'secret.123'}
                    required
                    error={form.errors.password}
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <PasswordInput
                    w={'100%'}
                    label={'Confirm Password'}
                    placeholder={'secret.123'}
                    required
                    error={form.errors.passwordConfirm}
                    key={form.key('passwordConfirm')}
                    {...form.getInputProps('passwordConfirm')}
                />
            </Grid.Col>
        </Grid>
    )
}