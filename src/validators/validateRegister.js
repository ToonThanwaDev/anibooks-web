import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Username is required"
  }),
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({ "string.empty": "Email is required" }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "Password is required",
    "string.alphanum": "Password must contain number or alphabet",
    "string.min": "Password mush have at least 6 characters"
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "Password and confirm password did not match",
      "string.empty": "Confirm password is required"
    })
});

const validateRegister = input => {
  const { error } = registerSchema.validate(input, {
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

export default validateRegister;
