import { useAuth } from "../AuthProvider";

export function useUser() {
  const { user } = useAuth();
  return user;
}
