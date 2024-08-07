import { z } from 'zod'

const requiredString = z.string().trim().min(1, "Required")

export const singUpSchema = z.object({
    email: requiredString.email('Invalid email address'),
    username: requiredString.regex(
        /^[a-zA-Z0-9_-]+$/, "Only letters, numbers - and _ allowed"
    ),
    password: requiredString.min(8, "Must be a least 8 characthers")
})

export type SingUp = z.infer<typeof singUpSchema>

export const loginSchema = z.object({
    username: requiredString,
    password: requiredString,
})

export type Login = z.infer<typeof loginSchema>