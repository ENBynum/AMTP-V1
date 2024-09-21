type Rank = 'PVT'|'PV2'|'PFC'|'SPC'|'CPL'|'SGT'|'SSG'|'SFC'
type Company = 'ALPHA'|'BRAVO'|'CHARLIE'|'DELTA'|'FOXTROT'|'GOLF'
type Role = 'VIEWER'|'TRAINER'|'MANAGER'|'ADMIN'


export interface UserProfile {
    dodid: number,
    rank: string,
    name: string,
    signature: string,
    initials: string,
    company: string,
    role: string,
    evaluator: boolean
}