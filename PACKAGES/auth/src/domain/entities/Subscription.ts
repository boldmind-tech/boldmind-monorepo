// PACKAGES/auth/src/domain/entities/Subscription.ts

export class Subscription {
  constructor(
    public readonly productId: string,        // e.g., 'educenter'
    public readonly active: boolean,
    public readonly planId?: string,          // e.g., 'educenter-pro'
    public readonly features: string[] = [],
    public readonly expiresAt: Date | null = null,
    public readonly status: "active" | "expired" | "cancelled" = "active"
  ) { }

  isActive() {
    return (
      this.active &&
      this.status === "active" &&
      (this.expiresAt === null || this.expiresAt > new Date())
    );
  }
}
