import PageHome from "./Home";
import PageAbout from "./About";
import PageNotFound from "./404";

const ROUTER = [
  {
    path: "/",
    component: PageHome
  },
  {
    path: "/about/",
    component: PageAbout
  },
  {
    path: "(.*)",
    component: PageNotFound
  }
];

export default ROUTER;
