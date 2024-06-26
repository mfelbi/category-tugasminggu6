const { body } = require("express-validator");

const productValidationCreate = [
  body("name").exists().withMessage("Name is required"),
  body("price")
    .exists()
    .withMessage("Price is required")
    .bail()
    .isInt({ min: 1000, max: 20000 })
    .withMessage("Price invalid"),
  body("stock")
    .exists()
    .withMessage("Stock is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Stock invalid"),
];

const productValidationUpdate = [
  body("name").optional().exists().withMessage("Name is required"),
  body("price")
    .optional()
    .exists()
    .withMessage("Price is required")
    .bail()
    .isInt({ min: 1000, max: 20000 })
    .withMessage("Price invalid"),
  body("stock")
    .optional()
    .exists()
    .withMessage("Stock is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Stock invalid"),
];

module.exports = {
  productValidationCreate,
  productValidationUpdate,
};
