const { Router } = require("express");
const usersController = require('../controllers/controller');
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);


module.exports = usersRouter;
