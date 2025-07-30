import joi from 'joi';

export const registerSchema = joi.object({
    Name: joi.string().min(3).required(),
    Email: joi.string().email().required(),
    Password: joi.string().min(5).required()
})

export const loginSchema = joi.object({
    Email: joi.string().email().required(),
    Password: joi.string().required(),
})