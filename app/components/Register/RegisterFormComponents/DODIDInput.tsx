import { Grid, NumberInput } from "@mantine/core";
import { useRegisterFormContext } from "../context/RegisterFormContext";



export default function RegisterFormDODIDInput() {
    const form = useRegisterFormContext()

    return (
        <Grid key={'DODIDInput'}>
            <Grid.Col span={6}>
                <NumberInput
                    w={'100%'}
                    label={'DoD ID'}
                    placeholder={'1234567890'}
                    minLength={10}
                    maxLength={10}
                    hideControls
                    required
                    error={form.errors.dodid}
                    key={form.key('dodid')}
                    {...form.getInputProps('dodid')}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <NumberInput
                    w={'100%'}
                    label={'DoD ID Confirm'}
                    placeholder={'1234567890'}
                    hideControls
                    required
                    error={form.errors.dodidConfirm}
                    key={form.key('dodidConfirm')}
                    {...form.getInputProps('dodidConfirm')}
                />
            </Grid.Col>
        </Grid>
    )
}