import type { NextPage } from "next";
import { usePathname } from "next/navigation";

import ListPage from "../../components/ListPage/ListPage";

const HomePage: NextPage = () => {
  const pathname = usePathname();

  return <ListPage path={pathname.endsWith("liked") ? "liked" : "did"} />;
};

export default HomePage;
