import type { NextPage } from "next";
import { usePathname } from "next/navigation";

import FormPage from "../../components/FormPage/FormPage";
import { ICard } from "../../helpers/intefaces";

type nextPageProp = {
  onAddCard(card: ICard): void;
};

const CreatePage: NextPage<nextPageProp> = ({ onAddCard }) => {
  const pathname = usePathname();

  return (
    <FormPage
      path={pathname.endsWith("liked") ? "liked" : "did"}
      onAddCard={onAddCard}
    />
  );
};

export default CreatePage;
