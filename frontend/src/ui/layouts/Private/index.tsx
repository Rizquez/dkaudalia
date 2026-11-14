import PageLoader from "@/ui/components/PageLoader";
import type { PrivateLayoutProps } from "./types";
import Footer from "@/ui/components/Footer";
import AccessGuard from "@/ui/routes/AccessGuard";

const PrivateLayout = ({ component, title }: PrivateLayoutProps) => {
  return (
    <AccessGuard>
      <div className="flex min-h-dvh flex-col">
        <main className="flex min-h-0 flex-1 flex-col">
          <PageLoader component={component} title={title} />
        </main>
        <Footer />
      </div>
    </AccessGuard>
  );
};

export default PrivateLayout;
