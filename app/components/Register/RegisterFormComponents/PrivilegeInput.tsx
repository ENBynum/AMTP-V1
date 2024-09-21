import { Grid, MultiSelect, Select, Stack } from "@mantine/core";
import { useRegisterFormContext } from "../context/RegisterFormContext";
import { Companies, Roles } from "~/utils/variables.server";


export default function RegisterFormPrivilegeInput() {
    const form = useRegisterFormContext()

    return (
        <Stack key={'PrivilegesInputs'} gap={'xs'}>
            <Grid>
                <Grid.Col span={4}>
                    <Select
                        w={'100%'}
                            label={'Company'}
                            data={Companies}
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
                            {group: 'Roles', items: Roles},
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
                data={Companies}
                clearable
                required
                error={form.errors.companyAccess}
                key={form.key('companyAccess')}
                {...form.getInputProps('companyAccess')}
            />
        </Stack>
    )
}