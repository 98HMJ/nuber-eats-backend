import { User } from './user.entity';
import { UserService } from './users.service';
import { CreateAccountInput, CreateAccountOutput } from '../dtos/create-account.dto';
import { LoginInput, LoginOutput } from '../dtos/login.dto';
import { UserProfileInput, UserProfileOutput } from '../dtos/user-profile.dto';
import { EditProfileInput, EditProfileOutput } from '../dtos/edit-profile.dto';
import { VerifyEmailInput, VerifyEmailOutput } from '../dtos/verify-email.dto';
export declare class UserReslover {
    private readonly usersService;
    constructor(usersService: UserService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    me(authUser: User): User;
    userProfile(userProfileInput: UserProfileInput): Promise<UserProfileOutput>;
    editProfile(authUser: User, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    verifyEmail({ code }: VerifyEmailInput): Promise<VerifyEmailOutput>;
}
