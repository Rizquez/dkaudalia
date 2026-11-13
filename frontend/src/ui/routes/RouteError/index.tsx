import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowRotateLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/ui/components/Button";
import useRouteErrorPage from "./hooks/useRouteErrorPage";

const RouteError = () => {
  const { isLoaded, status, title, description, homeLabel, goBack, goHome } =
    useRouteErrorPage();

  if (!isLoaded) return null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <section className="w-full max-w-xl border border-border bg-surface">
        <header className="flex items-center justify-between bg-primary px-5 py-3 font-mono text-xs text-white">
          <span>Error</span>
          <span className="font-bold text-secondary">{status}</span>
        </header>

        <div className="flex flex-col items-center p-6 text-center sm:p-10">
          <div className="flex h-16 w-16 items-center justify-center border-2 border-error text-error">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-3xl"
            />
          </div>

          <p className="mt-7 font-mono text-xs text-text-secondary">
            Error {status}
          </p>

          <h1 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
            {title}
          </h1>

          <p className="mt-4 text-sm leading-7 text-text-secondary">
            {description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button variant="background" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowRotateLeft} />
              Volver
            </Button>

            <Button onClick={goHome}>
              <FontAwesomeIcon icon={faHouse} />
              {homeLabel}
            </Button>
          </div>

          <p className="mt-10 border-t border-border pt-5 text-xs text-text-secondary">
            Si el problema persiste, inténtalo de nuevo más tarde.
          </p>
        </div>
      </section>
    </main>
  );
};

export default RouteError;
