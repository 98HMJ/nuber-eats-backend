"use strict";
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
exports.UserReslover = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./user.entity");
const users_service_1 = require("./users.service");
const create_account_dto_1 = require("../dtos/create-account.dto");
const login_dto_1 = require("../dtos/login.dto");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const auth_user_decorator_1 = require("../../auth/auth-user.decorator");
const user_profile_dto_1 = require("../dtos/user-profile.dto");
const edit_profile_dto_1 = require("../dtos/edit-profile.dto");
const verify_email_dto_1 = require("../dtos/verify-email.dto");
let UserReslover = class UserReslover {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createAccount(createAccountInput) {
        return this.usersService.createAccount(createAccountInput);
    }
    async login(loginInput) {
        return this.usersService.login(loginInput);
    }
    me(authUser) {
        return authUser;
    }
    async userProfile(userProfileInput) {
        return this.usersService.findById(userProfileInput.userId);
    }
    async editProfile(authUser, editProfileInput) {
        return this.usersService.editProfile(authUser.id, editProfileInput);
    }
    verifyEmail({ code }) {
        return this.usersService.verifyEmail(code);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => create_account_dto_1.CreateAccountOutput),
    __param(0, (0, graphql_1.Args)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], UserReslover.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Mutation)(returns => login_dto_1.LoginOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserReslover.prototype, "login", null);
__decorate([
    (0, graphql_1.Query)(returns => user_entity_1.User),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserReslover.prototype, "me", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)(returns => user_profile_dto_1.UserProfileOutput),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_profile_dto_1.UserProfileInput]),
    __metadata("design:returntype", Promise)
], UserReslover.prototype, "userProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(returns => edit_profile_dto_1.EditProfileOutput),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        edit_profile_dto_1.EditProfileInput]),
    __metadata("design:returntype", Promise)
], UserReslover.prototype, "editProfile", null);
__decorate([
    (0, graphql_1.Mutation)(returns => verify_email_dto_1.VerifyEmailOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_email_dto_1.VerifyEmailInput]),
    __metadata("design:returntype", Promise)
], UserReslover.prototype, "verifyEmail", null);
UserReslover = __decorate([
    (0, graphql_1.Resolver)(of => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserReslover);
exports.UserReslover = UserReslover;
//# sourceMappingURL=users.resolver.js.map