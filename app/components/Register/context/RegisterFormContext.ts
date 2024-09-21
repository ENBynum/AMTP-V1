import { createFormContext } from "@mantine/form"



export interface RegisterFormInterface {
    dodid: number | null,
    dodidConfirm: number | null,
    rank: string,
    last: string,
    first: string,
    middle: string,
    noMiddle: boolean,
    company: string,
    role: string[],
    companyAccess: string[],
    password: string,
    passwordConfirm: string
}

export const [
    RegisterFormProvider,
    useRegisterFormContext,
    useRegisterForm 
] = createFormContext<RegisterFormInterface>()