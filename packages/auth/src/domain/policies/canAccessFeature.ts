import { User } from "../entities/User";

export function canAccessFeature(
  user: User,
  product: string,
  feature: string
) {
  return user.subscriptions.some(sub =>
    sub.product === product &&
    sub.isActive() &&
    sub.features.includes(feature)
  );
}

