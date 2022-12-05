"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
// import errorHandler from "./Middlewares/errorHandler";
// import routes from "./Routers/Index";
var server = (0, express_1["default"])();
server.use(express_1["default"].json());
server.use((0, cors_1["default"])());
// server.use(routes);
// server.use(errorHandler);
exports["default"] = server;
