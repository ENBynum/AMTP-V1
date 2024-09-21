export interface LoginData {
    username: string,
    password: string
}

export interface RegisterData {
    dodid: number,
    dodidConfirm: number,
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

export interface UserCredentials {
    dodid: number,
    username: string,
    password: string
}

export interface UserProfile {
    dodid: number,
    rank: string,
    name: string,
    signature: string,
    initials: string,
    company: string,
    role: string,
    evaluator: boolean,
    companyAccess: string[]
}