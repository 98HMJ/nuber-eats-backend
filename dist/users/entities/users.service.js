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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const jwt_service_1 = require("../../jwt/jwt.service");
const verification_entitiy_1 = require("./verification.entitiy");
const mail_service_1 = require("../../mail/mail.service");
let UserService = class UserService {
    constructor(users, verifications, jwtService, mailService) {
        this.users = users;
        this.verifications = verifications;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async createAccount({ email, password, role }) {
        try {
            const exists = await this.users.findOne({ where: { email } });
            if (exists) {
                return { ok: false, error: 'There is a user with that email already' };
            }
            const user = await this.users.save(this.users.create({ email, password, role }));
            const verification = await this.verifications.save(this.verifications.create({ user }));
            this.mailService.sendVerificationEmail(user.email, verification.code);
            return { ok: true };
        }
        catch (e) {
            return { ok: false, error: "Couldn't create account" };
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.users.findOne({ where: { email }, select: ['id', 'password'] });
            if (!user) {
                return { ok: false, error: 'User not found' };
            }
            const passwordCorrect = await user.checkPassword(password);
            if (!passwordCorrect) {
                return { ok: false, error: 'Wrong password' };
            }
            const token = this.jwtService.sign(user.id);
            return { ok: true, token };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    async findById(id) {
        try {
            const user = await this.users.findOne({ where: { id } });
            if (user) {
                return { ok: true, user: user };
            }
        }
        catch (error) {
            return { ok: false, error: 'User Not Found' };
        }
    }
    async editProfile(userId, { email, password }) {
        const user = await this.users.findOne({ where: { id: userId } });
        if (email) {
            user.email = email;
            user.verified = false;
            const verification = await this.verifications.save(this.verifications.create({ user }));
            this.mailService.sendVerificationEmail(user.email, verification.code);
        }
        if (password) {
            user.password = password;
        }
        await this.users.save(user);
        return { ok: true };
    }
    async verifyEmail(code) {
        try {
            const verification = await this.verifications.findOne({
                where: { code },
                relations: ['user'],
            });
            if (verification) {
                verification.user.verified = true;
                await this.users.save(verification.user);
                await this.verifications.delete(verification.id);
                return { ok: true };
            }
            return { ok: false, error: 'Verification not found.' };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(verification_entitiy_1.Verification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_service_1.JwtService,
        mail_service_1.MailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map