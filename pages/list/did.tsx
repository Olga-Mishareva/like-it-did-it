import type { NextPage } from "next";
import { usePathname } from "next/navigation";

import ListPage from "../../components/ListPage/ListPage";
import { ICard } from "../../helpers/intefaces";

type nextPageProp = {
  cards: ICard[];
};

const HomePage: NextPage<nextPageProp> = ({ cards }) => {
  const pathname = usePathname();

  return (
    <ListPage
      path={pathname.endsWith("liked") ? "liked" : "did"}
      cards={cards}
    />
  );
};

export default HomePage;
