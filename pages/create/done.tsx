import type { NextPage } from "next";

import FormPage from "../../components/FormPage/FormPage";
import { ICard } from "../../helpers/intefaces";

type nextPageProp = {
  path: string;
  onAddCard(card: ICard): void;
};

const CreatePage: NextPage<nextPageProp> = ({ path, onAddCard }) => {
  return <FormPage path={path} onAddCard={onAddCard} />;
};

export default CreatePage;
