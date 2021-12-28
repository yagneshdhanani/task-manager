const Joi = require("joi");

const taskValidation = (data) => {
  const noteSchema = Joi.object({
    name: Joi.string().max(255).required().label("Name"),
    description: Joi.string().max(255).required().label("Description"),
    subTask: Joi.string().label("SubTask"),
    date: Joi.date().iso().label("Date"),
    isCompleted: Joi.boolean().label("isCompleted"),
  }).options({ abortEarly: false });

  return noteSchema.validate(data);
};

module.exports = { taskValidation };
