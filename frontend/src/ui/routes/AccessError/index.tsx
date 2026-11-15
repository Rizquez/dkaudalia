import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/ui/components/Button";
import { useModal } from "@/ui/contexts/ModalContext/hooks/useModal";
import { paths } from "@/ui/routes/paths";
import type { AccessErrorProps } from "./types";

const AccessError = ({ message }: AccessErrorProps) => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  const goHome = () => {
    navigate(paths.home.href, { replace: true });
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-background p-4">
      <section className="w-full max-w-xl border border-border bg-surface">
        <header className="flex items-center justify-between bg-primary px-5 py-3 font-mono text-xs text-surface">
          <span>Dkaudalia / Acceso</span>
          <span className="text-secondary">ERROR DE VERIFICACIoN</span>
        </header>

        <div className="flex flex-col items-center p-6 text-center sm:p-10">
          <div className="flex h-16 w-16 items-center justify-center border-2 border-error text-error">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-3xl"
            />
          </div>

          <p className="mt-7 font-mono text-xs text-text-secondary">
            Verificacion fallida
          </p>

          <h1 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
            No se ha podido verificar tu acceso
          </h1>

          <p className="mt-4 text-sm leading-7 text-text-secondary">
            No hemos podido verificar tu cuenta en este momento. Intentalo de
            nuevo en unos instantes. Si el problema persiste, contacta con un
            administrador.
          </p>

          <div
            role="alert"
            className="mt-6 w-full wrap-break-word border border-error bg-background p-4 text-sm text-error"
          >
            {message}
          </div>

          <Button onClick={goHome} className="mt-8">
            <FontAwesomeIcon icon={faHouse} />
            Inicio
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AccessError;
