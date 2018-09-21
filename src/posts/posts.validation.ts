import Joi from "joi"

export default {
    createPost: {
        body: {
            title: Joi.string().required(),
            postBody: Joi.string().required(),
        }
    },
    updatePost: {
        body: {
            title: Joi.string(),
            postBody: Joi.string()
        }
    }
}