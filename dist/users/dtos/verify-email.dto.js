"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyEmailInput = exports.VerifyEmailOutput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../commo/dtos/output.dto");
const verification_entitiy_1 = require("../entities/verification.entitiy");
let VerifyEmailOutput = class VerifyEmailOutput extends output_dto_1.CoreOutput {
};
VerifyEmailOutput = __decorate([
    (0, graphql_1.ObjectType)()
], VerifyEmailOutput);
exports.VerifyEmailOutput = VerifyEmailOutput;
let VerifyEmailInput = class VerifyEmailInput extends (0, graphql_1.PickType)(verification_entitiy_1.Verification, ['code']) {
};
VerifyEmailInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyEmailInput);
exports.VerifyEmailInput = VerifyEmailInput;
//# sourceMappingURL=verify-email.dto.js.map