"use server"

import {z} from "zod"
import { redirect } from "next/navigation"
import { createSession, deleteSession } from "../libs/session"

const testUser = {
    id: "1",
    email: "thisiskelechi@gmail.com",
    password: 123456
}

const loginSchema = z.object({
    email: z.string().email({message: "Invalid email address"}).trim(),
    password: z.string().min(6, {message: "Password must be at least 6 characters long."}).trim()
})


export async function login(prevState, formData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData))
    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const {email, password} = result.data

    if(email !== testUser.email || password !== testUser.password) {
        return {
            errors: {
                email: ["Invalid email or password"]
            }
        }
    }

    // create a session
    await createSession(testUser.id)
    redirect("/")
}


export async function logout() {
    await deleteSession()
    redirect("/login")
}