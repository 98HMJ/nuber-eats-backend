import { CoreEntity } from "src/commo/entities/core.entity";
import { User } from "./user.entity";
export declare class Verification extends CoreEntity {
    code: string;
    user: User;
    createCode(): void;
}
