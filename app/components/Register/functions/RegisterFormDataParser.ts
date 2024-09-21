import { UserProfile } from "~/components/_Config/types/User";
import { RegisterFormInterface } from "../context/registerFormContext";

export function RegisterFormDataParser(data: RegisterFormInterface) {
    interface UserCredentials {
        dodid: number,
        username: string,
        password: string
    }
    
    const {
        dodid, rank, last, first, middle, noMiddle, company,
        companyAccess, password
    } = data

    const name = `${last}, ${first} ${middle}`.toUpperCase().trim()
    const signature = `${rank} ${last}, ${first[0]} (${dodid})`.toUpperCase()
    const initials = noMiddle ? 
        `${first[0]}${last[0]}`.toUpperCase() : 
        `${first[0]}${middle[0]}${last[0]}`.toUpperCase()
    const role = data.role.includes('ADMIN') ? 'ADMIN' : data.role.includes('MANAGER') ? 'MANAGER' : data.role.includes('TRAINER') ? 'TRAINER' : 'VIEWER'
    const evaluator = data.role.includes('EVALUATOR')

    const username = noMiddle ? 
        `${first}.${last}`.toLowerCase() : 
        `${first}.${middle[0]}.${last}`.toLowerCase()

    
    const user: UserCredentials = {
        // @ts-ignore
        dodid, username, password
    }
    const userProfile: UserProfile = {
        // @ts-ignore
        dodid, rank, name, signature, initials, company, role, 
        evaluator
    }

    return {user, userProfile}
}