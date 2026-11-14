import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHouseLock } from "@fortawesome/free-solid-svg-icons";

import { useModal } from "@/ui/contexts/ModalContext/hooks/useModal";
import { UserButton } from "@clerk/react";

const PendingAccess = () => {
  const { closeModal } = useModal();

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  return (
    <div className="flex flex-1 items-center justify-center bg-background p-4">
      <section className="w-full max-w-xl border border-border bg-surface">
        <header className="flex items-center justify-between bg-primary px-5 py-3 font-mono text-xs text-surface">
          <span>Dkaudalia / Acceso</span>
          <span className="text-secondary">PENDIENTE</span>
        </header>

        <div className="flex flex-col items-center p-6 text-center sm:p-10">
          <div className="flex h-16 w-16 items-center justify-center border-2 border-primary text-primary">
            <FontAwesomeIcon icon={faHouseLock} className="text-3xl" />
          </div>

          <p className="mt-7 font-mono text-xs text-text-secondary">
            Acceso pendiente
          </p>

          <h1 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
            Tu registro está en revisión
          </h1>

          <p className="mt-4 text-sm leading-7 text-text-secondary">
            Tu cuenta se ha creado correctamente, pero el acceso a Dkaudalia
            está pendiente de aprobación por parte de un administrador.
          </p>

          <div className="mt-6 flex w-full items-center justify-center gap-3 border border-border bg-background p-4 text-sm text-text-secondary">
            <FontAwesomeIcon icon={faClock} className="shrink-0 text-primary" />
            <span>Esperando la aprobación del administrador.</span>
          </div>

          <div className="mt-8">
            <UserButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PendingAccess;
