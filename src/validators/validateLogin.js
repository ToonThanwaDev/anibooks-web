import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "Email is required",
    "string.empty": "Email is required"
  }),
  password: Joi.string().required().messages({
    "string.empty": "Email is required"
  })
});

const validateLogin = input => {
  const { error } = loginSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
