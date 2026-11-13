import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

import { paths } from "@/ui/routes/paths";

const useRouteErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  // TODO: Mientras se aplica Clerk
  const isSignedIn = false;
  const isLoaded = true;
  // TODO: Mientras se aplica Clerk

  const isRouteError = isRouteErrorResponse(error);

  const status = isRouteError ? error.status : 500;

  const title = isRouteError
    ? error.status === 404
      ? "Página no encontrada"
      : "Ha surgido un problema"
    : "Error inesperado";

  const description = isRouteError
    ? error.status === 404
      ? "La página que estás buscando no existe o es posible que se haya trasladado."
      : error.statusText
    : ((error as Error)?.message ?? "Se ha producido un error inesperado.");

  const homeLabel = isSignedIn ? "Panel de control" : "Inicio";

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(isSignedIn ? paths.dashboard.href : paths.home.href, {
      replace: true,
    });
  };

  return {
    isLoaded,
    status,
    title,
    description,
    homeLabel,
    goBack,
    goHome,
  };
};

export default useRouteErrorPage;
