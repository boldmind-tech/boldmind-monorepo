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
    token: string;
    newPassword: string;
}
export declare class VerifyOTPDto {
    code: string;
    type: string;
}
export declare class SSOTokenDto {
    token: string;
}
