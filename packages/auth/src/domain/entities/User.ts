// PACKAGES/auth/src/domain/entities/User.ts

import { Subscription } from "./Subscription";
import { Role } from "./Role";
import { Permission } from "./Permission";
import { EcosystemRole } from "@boldmind/utils";

export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly role: Role,
    public readonly permissions: Permission[] = [],
    public readonly subscriptions: Subscription[] = [],
    public readonly ecosystemRole?: EcosystemRole,
    public readonly avatar?: string,
    public readonly lastLogin?: Date
  ) { }
}
