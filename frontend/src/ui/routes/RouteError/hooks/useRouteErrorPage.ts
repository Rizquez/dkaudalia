import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router";

import { paths } from "@/ui/routes/paths";
import { useUser } from "@clerk/react";

const useRouteErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const { isLoaded, isSignedIn } = useUser();

  const isRouteError = isRouteErrorResponse(error);

  const status = isRouteError ? error.status : 500;

  const title = isRouteError
    ? error.status === 404
      ? "Pagina no encontrada"
      : "Ha surgido un problema"
    : "Error inesperado";

  const description = isRouteError
    ? error.status === 404
      ? "La pagina que estas buscando no existe o es posible que se haya trasladado."
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
