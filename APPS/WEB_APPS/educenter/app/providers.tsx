// apps/web/educenter/app/providers.tsx
"use client";
import { EducenterLayout  } from '../components/EducenterLayout'
import { AuthProvider } from "@boldmind/auth";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EducenterLayout>
      <AuthProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </AuthProvider>
    </EducenterLayout>
  );
}
