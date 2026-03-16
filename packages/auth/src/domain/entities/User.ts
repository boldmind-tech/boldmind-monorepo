import { Subscription } from "./Subscription";
import { Role } from "./Role";
import { Permission } from "./Permission";

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly roles: Role[],
    public readonly permissions: Permission[],
    public readonly subscriptions: Subscription[]
  ) {}
}