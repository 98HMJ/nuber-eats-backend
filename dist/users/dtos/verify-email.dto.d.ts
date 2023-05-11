import { CoreOutput } from "src/commo/dtos/output.dto";
import { Verification } from "../entities/verification.entitiy";
export declare class VerifyEmailOutput extends CoreOutput {
}
declare const VerifyEmailInput_base: import("@nestjs/common").Type<Pick<Verification, "code">>;
export declare class VerifyEmailInput extends VerifyEmailInput_base {
}
export {};
