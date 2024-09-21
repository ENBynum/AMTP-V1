import { Grid, MultiSelect, Select, Stack } from "@mantine/core";
import { useRegisterFormContext } from "../context/registerFormContext";



export default function RegisterFormPrivilegeInput() {
    const form = useRegisterFormContext()

    const companies = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "FOXTROT", "GOLF"]
    const roles = ['VIEWER', 'TRAINER', 'MANAGER', 'ADMIN']

    return (
        <Stack key={'PrivilegesInputs'} gap={'xs'}>
            <Grid>
                <Grid.Col span={4}>
                    <Select
                        w={'100%'}
                            label={'Company'}
                            data={companies}
                            required
                            error={form.errors.company}
                            key={form.key('company')}
                            {...form.getInputProps('company')}
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <MultiSelect
                        w={'100%'}
                        label={'Roles'}
                        data={[
                            {group: 'Roles', items: roles},
                            {group: "Evaluator?", items: ['EVALUATOR']}
                        ]}
                        maxValues={2}
                        clearable
                        maxDropdownHeight={500}
                        required
                        error={form.errors.role}
                        key={form.key('role')}
                        {...form.getInputProps('role')}
                    />
                </Grid.Col>
            </Grid>
            <MultiSelect
                w={'100%'}
                label={'Company Access'}
                data={companies}
                clearable
                required
                error={form.errors.companyAccess}
                key={form.key('companyAccess')}
                {...form.getInputProps('companyAccess')}
            />
        </Stack>
    )
}