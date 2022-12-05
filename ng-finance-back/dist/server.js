"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var index_1 = __importDefault(require("./index"));
var PORT = 5000;
index_1["default"].listen(PORT, function () {
    console.log("It's alive on port ".concat(PORT));
});
