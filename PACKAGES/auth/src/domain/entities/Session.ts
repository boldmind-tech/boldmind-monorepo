// PACKAGES/auth/src/domain/entities/Session.ts

export class Session {
  constructor(
    public readonly accessToken: string,
    public readonly refreshToken: string,
    public readonly expiresAt: Date
  ) { }
}
