import { Subscription } from "../../domain/entities/Subscription";
import { UserRepository } from "../../infrastructure/repositories/user.repository";

export async function attachSubscription(
  userId: string,
  subscription: Subscription
) {
  return UserRepository.attachSubscription(userId, subscription);
}
