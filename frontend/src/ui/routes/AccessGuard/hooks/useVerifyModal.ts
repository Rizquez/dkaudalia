import { useModal } from "@/ui/contexts/ModalContext/hooks/useModal";
import { useEffect } from "react";

const SLOW_VERIFICATION_DELAY_MS = 10000;

const useVerifyModal = (isPending: boolean) => {
  const { showLoading } = useModal();

  useEffect(() => {
    if (!isPending) return;

    showLoading(
      "Verificando tus datos de acceso",
      "Estamos verificando tus datos de acceso; esto suele tardar solo unos segundos...",
    );

    const timeoutId = window.setTimeout(() => {
      showLoading(
        "Ya casi estamos listos",
        "Es posible que nuestro servidor vuelva a estar operativo tras un periodo de inactividad; esto puede tardar hasta un minuto en la primera solicitud. Gracias por tu paciencia...»",
      );
    }, SLOW_VERIFICATION_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPending, showLoading]);
};

export default useVerifyModal;
