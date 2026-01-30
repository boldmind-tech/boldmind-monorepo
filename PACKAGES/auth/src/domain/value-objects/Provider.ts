export type OAuthProviderType = "google" | "facebook";

export interface OAuthProvider {
  type: OAuthProviderType;
  login(): Promise<any>;
}
