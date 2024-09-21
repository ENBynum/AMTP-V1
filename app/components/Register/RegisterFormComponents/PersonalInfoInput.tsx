import { Grid, Group, NumberInput, Select, Stack, Switch, TextInput } from "@mantine/core"
import { useRegisterFormContext } from "../context/RegisterFormContext"
import { Ranks } from "~/utils/variables.server"



export default function RegisterFormPersonalInfoInput() {
    const form = useRegisterFormContext()

    function onNoMiddleToggle(event: { currentTarget: { checked: any } }) {
        const isChecked = event.currentTarget.checked
        if (isChecked) {
            form.setFieldValue('middle', '')
        }
    }

    return (
        <Stack key={'PersonalInfoInput'} gap={'xs'}>
            <Grid key={'Rank&LastNameInput'}>
                <Grid.Col span={3}>
                    <Select
                        w={'100%'}
                        label={'Rank'}
                        data={Ranks}
                        required
                        error={form.errors.rank}
                        key={form.key('rank')}
                        {...form.getInputProps('rank')}
                    />
                </Grid.Col>
                <Grid.Col span={9}>
                    <TextInput
                        w={'100%'}
                        label={'Last Name'}
                        placeholder={'Last'}
                        required
                        error={form.errors.last}
                        key={form.key('last')}
                        {...form.getInputProps('last')}
                    />
                </Grid.Col>
            </Grid>
            <Grid key={'firstMiddleInput'}>
                <Grid.Col span={6}>
                    <TextInput
                        w={'100%'}
                        label={'First Name'}
                        placeholder={'First'}
                        required
                        error={form.errors.first}
                        key={form.key('first')}
                        {...form.getInputProps('first')}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        id={'middle'}
                        w={'100%'}
                        label={'Middle Name'}
                        placeholder={'Middle'}
                        required={!form.getValues().noMiddle}
                        error={form.errors.middle}
                        key={form.key('middle')}
                        {...form.getInputProps('middle')}
                        disabled={form.getValues().noMiddle}
                    />
                </Grid.Col>
            </Grid>
            <Group key={'NoMiddleInput'} justify={'flex-end'}>
                <Switch
                    label={'No Middle Name'}
                    onClick={onNoMiddleToggle}
                    key={form.key('noMiddle')}
                    {...form.getInputProps('noMiddle')}
                />
            </Group>
        </Stack>
    )
}