import Footer from "@/ui/components/Footer";
import PageLoader from "@/ui/components/PageLoader";
import type { PubilcLayoutProps } from "./types";

const PublicLayout = ({ component, title }: PubilcLayoutProps) => (
  <div className="flex min-h-dvh flex-col">
    <main className="flex min-h-0 flex-1 flex-col">
      <PageLoader component={component} title={title} />
    </main>

    <Footer />
  </div>
);

export default PublicLayout;
