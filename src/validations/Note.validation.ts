import * as Joi from 'joi'

export const noteQuery = Joi.object({
    page: Joi.string().trim(),
    limit: Joi.string().trim(),
    tags: Joi.string().trim(),
})

export const noteApp = Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().trim().required(),
    tagsTags:  Joi.array().items(Joi.string().trim()).required(),
})
