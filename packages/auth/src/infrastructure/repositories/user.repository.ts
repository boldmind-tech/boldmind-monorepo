import { supabase } from "../supabase/client";
import { Subscription } from "../../domain/entities/Subscription";

export const UserRepository = {
  async attachSubscription(userId: string, subscription: Subscription) {
    const { error } = await supabase
      .from("subscriptions")
      .upsert({
        user_id: userId,
        plan: subscription.planId,
        expires_at: subscription.expiresAt,
        status: subscription.status
      });

    if (error) throw error;
  }
};
