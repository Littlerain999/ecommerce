const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': '"name" should be a string',
      'string.empty': '"name" cannot be empty',
      'string.min': '"name" should have at least {#limit} characters',
      'string.max': '"name" should have at most {#limit} characters',
      'any.required': '"name" is required'
    }),
  
  brand: Joi.string().min(2).max(50).required()
    .messages({
      'string.base': '"brand" should be a string',
      'string.empty': '"brand" cannot be empty',
      'string.min': '"brand" should have at least {#limit} characters',
      'string.max': '"brand" should have at most {#limit} characters',
      'any.required': '"brand" is required'
    }),

  model: Joi.string().min(2).max(100).required()
    .messages({
      'string.base': '"model" should be a string',
      'string.empty': '"model" cannot be empty',
      'string.min': '"model" should have at least {#limit} characters',
      'string.max': '"model" should have at most {#limit} characters',
      'any.required': '"model" is required'
    }),

  price: Joi.number().positive().precision(2).required()
    .messages({
      'number.base': '"price" should be a number',
      'number.positive': '"price" must be a positive number',
      'number.precision': '"price" can have at most 2 decimal places',
      'any.required': '"price" is required'
    }),

  description: Joi.string().min(10).max(500).required()
    .messages({
      'string.base': '"description" should be a string',
      'string.empty': '"description" cannot be empty',
      'string.min': '"description" should have at least {#limit} characters',
      'string.max': '"description" should have at most {#limit} characters',
      'any.required': '"description" is required'
    }),

  specifications: Joi.object({
    screenSize: Joi.string().min(3).max(10).required()
      .messages({
        'string.base': '"screenSize" should be a string',
        'string.empty': '"screenSize" cannot be empty',
        'string.min': '"screenSize" should have at least {#limit} characters',
        'string.max': '"screenSize" should have at most {#limit} characters',
        'any.required': '"screenSize" is required'
      }),

    storage: Joi.string().valid('128GB', '256GB', '512GB', '1TB').required()
      .messages({
        'string.base': '"storage" should be a string',
        'any.only': '"storage" must be one of [128GB, 256GB, 512GB, 1TB]',
        'any.required': '"storage" is required'
      }),

    ram: Joi.string().valid('4GB', '6GB', '8GB').required()
      .messages({
        'string.base': '"ram" should be a string',
        'any.only': '"ram" must be one of [4GB, 6GB, 8GB]',
        'any.required': '"ram" is required'
      }),

    processor: Joi.string().min(2).max(50).required()
      .messages({
        'string.base': '"processor" should be a string',
        'string.empty': '"processor" cannot be empty',
        'string.min': '"processor" should have at least {#limit} characters',
        'string.max': '"processor" should have at most {#limit} characters',
        'any.required': '"processor" is required'
      }),

    camera: Joi.object({
      front: Joi.string().min(3).max(10).required()
        .messages({
          'string.base': '"front camera" should be a string',
          'string.empty': '"front camera" cannot be empty',
          'string.min': '"front camera" should have at least {#limit} characters',
          'string.max': '"front camera" should have at most {#limit} characters',
          'any.required': '"front camera" is required'
        }),

      rear: Joi.string().min(3).max(10).required()
        .messages({
          'string.base': '"rear camera" should be a string',
          'string.empty': '"rear camera" cannot be empty',
          'string.min': '"rear camera" should have at least {#limit} characters',
          'string.max': '"rear camera" should have at most {#limit} characters',
          'any.required': '"rear camera" is required'
        })
    }).required(),

    battery: Joi.string().min(4).max(10).required()
      .messages({
        'string.base': '"battery" should be a string',
        'string.empty': '"battery" cannot be empty',
        'string.min': '"battery" should have at least {#limit} characters',
        'string.max': '"battery" should have at most {#limit} characters',
        'any.required': '"battery" is required'
      }),

    color: Joi.array().items(Joi.string().min(3).max(20)).min(1).required()
      .messages({
        'array.base': '"color" should be an array of strings',
        'array.min': '"color" should have at least one value',
        'string.base': '"color" items should be strings',
        'any.required': '"color" is required'
      }),

    operatingSystem: Joi.string().valid('iOS', 'Android').required()
      .messages({
        'string.base': '"operatingSystem" should be a string',
        'any.only': '"operatingSystem" must be one of ["iOS", "Android"]',
        'any.required': '"operatingSystem" is required'
      }),

    is5GEnabled: Joi.boolean().required()
      .messages({
        'boolean.base': '"is5GEnabled" should be a boolean',
        'any.required': '"is5GEnabled" is required'
      })
  }).required(),

  images: Joi.array().items(Joi.string().uri()).min(1).required()
    .messages({
      'array.base': '"images" should be an array',
      'array.min': '"images" should contain at least one valid image URL',
      'string.base': '"images" should be an array of strings',
      'string.uri': '"images" should be valid URLs',
      'any.required': '"images" is required'
    }),

  stockQuantity: Joi.number().integer().min(0).required()
    .messages({
      'number.base': '"stockQuantity" should be a number',
      'number.integer': '"stockQuantity" should be an integer',
      'number.min': '"stockQuantity" cannot be negative',
      'any.required': '"stockQuantity" is required'
    }),

  isAvailable: Joi.boolean().required()
    .messages({
      'boolean.base': '"isAvailable" should be a boolean',
      'any.required': '"isAvailable" is required'
    }),

  dateAdded: Joi.date().iso().required()
    .messages({
      'date.base': '"dateAdded" should be a valid date',
      'date.iso': '"dateAdded" should be in ISO 8601 format',
      'any.required': '"dateAdded" is required'
    })
});

