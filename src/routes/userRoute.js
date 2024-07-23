"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController = require("../controllers/userController");
var userRouter = (0, express_1.Router)();
userRouter.get('/:id', userController.getUser);
exports.default = userRouter;
