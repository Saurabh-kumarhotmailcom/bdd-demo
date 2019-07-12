"use strict";
// Uncomment these imports to begin using these cool features!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {inject} from '@loopback/context';
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const user_model_1 = require("../models/user.model");
const LOGIN_RESPONSE = {
    description: 'login succeess Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                },
            },
        },
    },
};
let LoginController = class LoginController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    login(user) {
        if (user.username === 'xyz' && user.password === 'xyz') {
            return {
                message: 'login sucessfull'
            };
        }
        else {
            this.res.sendStatus(401);
            return { message: 'login failed' };
        }
    }
};
__decorate([
    rest_1.post('/login', {
        responses: {
            '200': LOGIN_RESPONSE,
        },
    }),
    __param(0, rest_1.requestBody({ description: 'username and password' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Object)
], LoginController.prototype, "login", null);
LoginController = __decorate([
    __param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)), __param(1, context_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    __metadata("design:paramtypes", [Object, Object])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map