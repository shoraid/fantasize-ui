import { InferType, object, ref, string } from "yup";

export const LoginSchema = object({
	email: string().email().required(),
	password: string().required(),
}).required();

export type LoginValidation = InferType<typeof LoginSchema>;

export const RegisterSchema = object({
	firstName: string().label("first name").max(50).required(),
	lastName: string().label("last name").max(50),
	email: string().email().max(80).required(),
	phoneNumber: string().label("phone number").max(20).required(),
	password: string().min(8).required(),
	passwordConfirmation: string()
		.label("password confirmation")
		.oneOf([ref('password'), ""], 'Passwords must match')
		.required(),
}).required();

export type RegisterValidation = InferType<typeof RegisterSchema>;

export const ForgotPasswordSchema = object({
	email: string().email().required(),
}).required();

export type ForgotPasswordValidation = InferType<typeof ForgotPasswordSchema>;