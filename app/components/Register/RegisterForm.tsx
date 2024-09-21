import { Button, Stack } from "@mantine/core";
import { RegisterFormInterface, RegisterFormProvider, useRegisterForm } from "./context/registerFormContext";
import RegisterFormDODIDInput from "./RegisterFormComponents/DODIDInput";
import RegisterFormPersonalInfoInput from "./RegisterFormComponents/PersonalInfoInput";
import RegisterFormPrivilegeInput from "./RegisterFormComponents/PrivilegeInput";
import RegisterFormPasswordInput from "./RegisterFormComponents/PasswordInput";
import axios from "axios";
import { RegisterFormDataParser } from "./functions/RegisterFormDataParser";



interface RegisterFormProps {
    setUserExits: (e: any) => void,
    setRegisterSuccess: (e: any) => void
}

export default function RegisterForm({setUserExits, setRegisterSuccess}: RegisterFormProps) {
    function validRole(selectedRoles: string[]) {
        const roles: string[] = ['VIEWER', 'TRAINER', 'MANAGER', 'ADMIN']
        let valid: boolean = false

        selectedRoles.map((e: string) => {
            roles.includes(e) ? valid = true : null
        })

        return valid
    }
    
    const form = useRegisterForm({
        mode: 'uncontrolled',
        initialValues: {
            dodid: null,
            dodidConfirm: null,
            rank: '',
            last: '',
            first: '',
            middle: '',
            noMiddle: false,
            company: '',
            role: [],
            companyAccess: [],
            password: '',
            passwordConfirm: ''
        },
        validateInputOnBlur: true,
        validate: {
            dodid: (value) => value && value.toString().length !== 10 && "Must be 10 digits",
            dodidConfirm: (value) => value !== form.getValues().dodid && "Does not match DoD ID",
            rank: (value) => !value && "Select rank",
            last: (value) => value === "" ? "Required" : !/^[a-zA-Z]+$/.test(value) ? "Must only contain letters" : null,
            first:  (value) => value === "" ? "Required" : !/^[a-zA-Z]+$/.test(value) ? "Must only contain letters" : null,
            middle: (value) =>  form.getValues().noMiddle ? null : value === "" ? "Required" : !/^[a-zA-Z]+$/.test(value) ? "Must only contain letters" : null,
            company: (value) => value.length === 0 ? "Select company" : null,
            role: (value) => value.length === 0 || !validRole(value) ? "Select role" :  null,
            companyAccess: (value) => value.length === 0 ? "Select companies to access" : form.getValues().company !== '' && !value.includes(form.getValues().company) ? "Select home company" : null,
            password: (value) => value.length <= 8 ? "Must be at least 8 characters long" : !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%.*?&]*$/.test(value) ? "Must contain letters, numbers, and special characters" : null,
            passwordConfirm: (value) => value !== form.getValues().password ? "Does not match password" : null
        }
    })

    async function handleSubmit(data: RegisterFormInterface) {
        try {
            const reqData = RegisterFormDataParser(data)
            const res = await axios.post(
                'http://localhost:3000/api/auth/user/register',
                reqData
            )
            setRegisterSuccess(true)
            setTimeout(() => {
                setRegisterSuccess(false)
            }, 2000)
        } catch (error: any) {
            if (error.status === 409) {
                setUserExits(true)
                setTimeout(() => {
                    setUserExits(false)
                }, 3000)
            }
            
            console.log(error.message)
        }
        

    }

    return (
        <RegisterFormProvider form={form}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={'xl'}>
                    <Stack key={'RegisterFormFields'} gap={'lg'}>
                        <RegisterFormDODIDInput/>
                        <RegisterFormPersonalInfoInput/>
                        <RegisterFormPrivilegeInput/>
                        <RegisterFormPasswordInput/>
                    </Stack>
                    <Button key={'RegisterFormSubmitButton'} type={'submit'}>
                        Register
                    </Button>
                </Stack>
            </form>
        </RegisterFormProvider>
    )
}