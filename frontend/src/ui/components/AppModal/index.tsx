import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/ui/components/Button";
import { useModal } from "@/ui/contexts/ModalContext/hooks/useModal";

const TYPE_STYLES = {
  info: {
    color: "text-info",
    icon: faCircleInfo,
  },
  success: {
    color: "text-success",
    icon: faCircleCheck,
  },
  warning: {
    color: "text-warning",
    icon: faTriangleExclamation,
  },
  error: {
    color: "text-error",
    icon: faCircleXmark,
  },
  loading: {
    color: "text-secondary",
    icon: faSpinner,
  },
};

const AppModal = () => {
  const { modal, closeModal } = useModal();

  if (!modal.open) return null;

  const { color, icon } = TYPE_STYLES[modal.type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/50 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="w-full max-w-md border border-border bg-surface"
      >
        <header className="flex items-center justify-between bg-primary px-5 py-3">
          <span className="font-mono text-xs text-surface">Notificacion</span>

          <FontAwesomeIcon
            icon={icon}
            spin={modal.type === "loading"}
            className={`text-lg ${color}`}
          />
        </header>

        <div className="flex flex-col items-center gap-5 p-6 text-center sm:p-8">
          <h2
            id="modal-title"
            className="text-xl font-semibold text-text-primary"
          >
            {modal.title}
          </h2>

          <p
            id="modal-description"
            className="text-sm leading-6 text-text-secondary"
          >
            {modal.message}
          </p>

          {modal.onConfirm ? (
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
              <Button variant="background" onClick={closeModal}>
                {modal.cancelText ?? "Cancelar"}
              </Button>

              <Button
                variant="danger"
                onClick={() => {
                  closeModal();
                  modal.onConfirm?.();
                }}
              >
                {modal.confirmText ?? "Confirmar"}
              </Button>
            </div>
          ) : (
            modal.hasButton && <Button onClick={closeModal}>Aceptar</Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default AppModal;
