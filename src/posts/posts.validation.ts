import Joi from "joi"

export default {
    createPost: {
        title: Joi.string().required(),
        postBody: Joi.string().required(),
    }
}