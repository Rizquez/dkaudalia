import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import useAppLayoutVisibility from "@/ui/hooks/useAppLayoutVisibility";
import { paths } from "@/ui/routes/paths";

const Footer = () => {
  const year = new Date().getFullYear();
  const { isVisible } = useAppLayoutVisibility();

  if (!isVisible) return null;

  return (
    <footer className="border-t border-border bg-surface px-5 py-4">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs text-text-primary">
            © {year} Urbanbuild
          </p>
        </div>

        <Link
          to={paths.privacypolicy.href}
          className="flex items-center gap-2 font-mono text-xs text-text-primary transition-colors hover:text-text-secondary"
        >
          <span>{paths.privacypolicy.label}</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-[10px]"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
