import { paths } from "@/ui/routes/paths";
import Home from "@/ui/pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Dashboard from "../pages/Dashboard";

const routes = [
  {
    path: paths.home.href,
    component: Home,
    title: paths.home.title,
    authRequired: false,
  },
  {
    path: paths.dashboard.href,
    component: Dashboard,
    title: paths.dashboard.title,
    authRequired: true,
  },
  {
    path: paths.privacypolicy.href,
    component: PrivacyPolicy,
    title: paths.privacypolicy.title,
    authRequired: false,
  },
];

export default routes;
