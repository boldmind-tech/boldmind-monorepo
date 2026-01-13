export class Subscription {
  constructor(
    public readonly product: string,        // educenter
    public readonly planId: string,          // educenter-studyhub-6m
    public readonly features: string[],      // normalized
    public readonly expiresAt: Date | null,  // null = lifetime
    public readonly status: "active" | "expired" | "cancelled"
  ) {}

  isActive() {
    return (
      this.status === "active" &&
      (this.expiresAt === null || this.expiresAt > new Date())
    );
  }
}
