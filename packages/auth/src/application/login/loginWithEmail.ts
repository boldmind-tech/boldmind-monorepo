import { AuthRepository } from "../../infrastructure/repositories/auth.repository";

export async function loginWithEmail(email: string, password: string) {
  return AuthRepository.loginWithEmail(email, password);
}
