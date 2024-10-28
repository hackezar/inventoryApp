/ controllers/usersController.js
const usersStorage = require("../storages/usersStorage");

const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 ad 10 characters";

const validateUser = [
    body("firstName").trim()
        .isAlpha().withMessage(`First name ${alphaErr}`)
        .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
];

// We can pass an entire array of middleware validations to our controller.

exports.getIndex = (req, res) => {
    res.render("index", {
        title: "index",
        users: usersStorage.getUsers(),
    });
};
