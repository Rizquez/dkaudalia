import { useModal } from "@/ui/contexts/ModalContext/hooks/useModal";
import { UserButton } from "@clerk/react";

const Dashboard = () => {
  const { closeModal } = useModal();
  closeModal();
  return (
    <section>
      <div>
        <UserButton />
      </div>
      <h1>Soy Dashboard</h1>
    </section>
  );
};

export default Dashboard;
