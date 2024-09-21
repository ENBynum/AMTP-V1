import bcrypt from 'bcrypt';
import { json } from "@remix-run/node";
import { prisma } from "./prisma.server";
import { LoginData, RegisterData } from "~/utils/types.server";
import { RegisterFormDataParser } from "./parsers.server";



export async function register(data: RegisterData) {

    try {
        const exists = await prisma.user.count({where:{dodid: data.dodid}})
        if (exists) {
            return json({error: 'User Already Exists'}, {status: 409})
        }

        const {userCredentials, userProfile} = RegisterFormDataParser(data)
        
        let username = userCredentials.username
        const usernameExists = await prisma.user.count({where:{username}})
        if (usernameExists) {
            let usernameNumber: number = 0
            do {
                usernameNumber++
                username = `${username}${usernameNumber}`
            } while (await prisma.user.count({where:{username: username}}))
        }

        const password = await bcrypt.hash(userCredentials.password, 10)
        const credentials = {
            dodid: userCredentials.dodid,
            username,
            password,
            tryAttempts: 0,
            enabled: true
        }

        await prisma.user.create({data: credentials})
        await prisma.userProfile.create({data: userProfile})
    } catch (error: any) {
        return json({error}, {status: 500})
    }
}

export async function login(data: LoginData) {
    try {
        const user = await prisma.user.findFirst({where:{username: data.username}})
        if (!user) {
            return json({error: 'Invalid Credentials'}, {status: 401})
        }

        const passMatch = await bcrypt.compare(data.password, user.password)
        if (!passMatch) {
            user.tryAttempts++
            if (user.tryAttempts >= 3) {
                user.enabled = false
                await prisma.user.update({where:{username: data.username}, data: user})
                return json({error: 'Account Disabled'}, {status: 423})
            }
            await prisma.user.update({where:{username: data.username}, data: user})
            return json({error: 'Invalid Credentials'}, {status: 401})
        }

        if (!user.enabled) {
            return json({error: 'Account Disabled'}, {status: 423})
        }

        user.tryAttempts = 0
        await prisma.user.update({where:{username: data.username}, data: user})
        const userProfile = await prisma.userProfile.findFirst({where:{dodid: user.dodid}})
        return json({dodid: userProfile?.dodid, role: userProfile?.role})
    } catch (error: any) {
        return json({error}, {status: 500})
    }
}