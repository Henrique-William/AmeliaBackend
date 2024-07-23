"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoute_1 = require("./routes/userRoute");
require("dotenv/config");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', userRoute_1.default);
exports.default = app;
