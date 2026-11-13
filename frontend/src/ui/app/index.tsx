import ApplicationError from "@/core/errors";
import "@/ui/styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "../routes/Router";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);

export default App;
