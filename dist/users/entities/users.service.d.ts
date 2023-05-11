import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateAccountInput } from "../dtos/create-account.dto";
import { LoginInput } from "../dtos/login.dto";
import { JwtService } from "src/jwt/jwt.service";
import { EditProfileInput, EditProfileOutput } from "../dtos/edit-profile.dto";
import { Verification } from "./verification.entitiy";
import { VerifyEmailOutput } from "../dtos/verify-email.dto";
import { UserProfileOutput } from "../dtos/user-profile.dto";
import { MailService } from "src/mail/mail.service";
export declare class UserService {
    private readonly users;
    private readonly verifications;
    private readonly jwtService;
    private readonly mailService;
    constructor(users: Repository<User>, verifications: Repository<Verification>, jwtService: JwtService, mailService: MailService);
    createAccount({ email, password, role }: CreateAccountInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    login({ email, password }: LoginInput): Promise<{
        ok: boolean;
        error?: string;
        token?: string;
    }>;
    findById(id: number): Promise<UserProfileOutput>;
    editProfile(userId: number, { email, password }: EditProfileInput): Promise<EditProfileOutput>;
    verifyEmail(code: string): Promise<VerifyEmailOutput>;
}
