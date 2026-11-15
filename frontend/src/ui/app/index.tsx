import ApplicationError from "@/core/errors";
import "@/ui/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "../routes/Router";
import { CLERK_PUBLISHABLE_KEY } from "@/core/env";
import AuthTokenHandler from "../handlers/AuthTokenHandler";
import AppModal from "../components/AppModal";
import { ModalProvider } from "../contexts/ModalContext";
import { ClerkProvider } from "@clerk/react";
import ApiActivityHandler from "../handlers/ApiActivityHandler";
import { ApiActivityProvider } from "../contexts/ApiActivityContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (error instanceof ApplicationError && error.status === 429) {
          return false;
        }

        return failureCount < 3;
      },
    },
  },
});

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key.");
}

const App = () => (
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <AuthTokenHandler />
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ApiActivityProvider>
          <ApiActivityHandler />
          <AppRouter />
          <AppModal />
        </ApiActivityProvider>
      </ModalProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;
