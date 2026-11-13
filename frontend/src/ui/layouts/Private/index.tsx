import PageLoader from "@/ui/components/PageLoader";
import type { PrivateLayoutProps } from "./types";
import Footer from "@/ui/components/Footer";

const PrivateLayout = ({ component, title }: PrivateLayoutProps) => {
  return (
    //<AccessGuard> TODO: Aplicar cuando clerk este disponible
    <div className="flex min-h-dvh flex-col">
      <main className="flex min-h-0 flex-1 flex-col">
        <PageLoader component={component} title={title} />
      </main>
      <Footer />
    </div>
    //</AccessGuard>
  );
};

export default PrivateLayout;
