import { OAuthProvider } from "../../domain/value-objects/Provider";

export async function loginWithOAuth(provider: OAuthProvider) {
  return provider.login();
}
