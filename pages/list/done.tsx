import type { NextPage } from "next";

import ListPage from "../../components/ListPage/ListPage";
import { ICard } from "../../helpers/intefaces";

type nextPageProp = {
  path: string;
  cards: ICard[];
};

const HomePage: NextPage<nextPageProp> = ({ path, cards }) => {
  return <ListPage path={path} cards={cards} />;
};

export default HomePage;
