import { Burger, getEnv, Menu, MenuItem } from "@mantine/core";
import mongoose from "mongoose";
import { useAuth } from "~/components/_Config/context/AuthContext";



export const loader = async (dodid: number|null) => {
    if (dodid) {
         
    }
}

export default function NavbarMenu() {
    const auth = useAuth()

    // @ts-ignore
    const role = auth.role

    const adminAccess = ['ADMIN']
    const managerAccess = ['MANAGER', 'ADMIN']
    const trainerAccess = ['TRAINER', 'MANAGER', 'ADMIN']

    return (
        <>
            {trainerAccess.includes(role) && <Menu
                width={'auto'}
                shadow={'xl'}
            >
                <Menu.Target><Burger/></Menu.Target>
                <Menu.Item 
                    component="a" 
                    href="/company"
                >
                    Company Dashboard
                </Menu.Item>
            </Menu>}
        </>
    )
}