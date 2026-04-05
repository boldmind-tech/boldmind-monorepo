export declare class RegisterDto {
    name: string;
    email: string;
    password: string;
    ecosystemRole?: string;
    referralCode?: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    email: string;
    code: string;
    newPassword: string;
}
export declare class VerifyOtpDto {
    email: string;
    code: string;
    purpose: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class UpdateRoleDto {
    role: string;
}
