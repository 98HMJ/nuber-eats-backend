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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const common_constants_1 = require("../commo/common.constants");
const got_1 = require("got");
const FormData = require("form-data");
let MailService = class MailService {
    constructor(options) {
        this.options = options;
    }
    async sendEmail(subject, template, emailVars) {
        const form = new FormData();
        form.append("from", `Nuber Eats <mailgun@${this.options.domain}>`);
        form.append("to", `good7min@naver.com`);
        form.append("subject", subject);
        form.append("template", template);
        emailVars.forEach(eVar => form.append(`v:${eVar.key}`, eVar.value));
        try {
            await (0, got_1.default)(`https://api.mailgun.net/v3/${this.options.domain}/messages`, {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${Buffer.from(`api:${this.options.apiKey}`).toString("base64")}`
                },
                body: form,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    sendVerificationEmail(email, code) {
        this.sendEmail("Verify Your Email", "verify-email", [
            { key: 'code', value: code },
            { key: 'username', value: email }
        ]);
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_constants_1.CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map