import type { NextPage } from "next";
import { usePathname } from "next/navigation";

import FormPage from "../../components/FormPage/FormPage";

const CreatePage: NextPage = () => {
  const pathname = usePathname();

  return <FormPage path={pathname.endsWith("liked") ? "liked" : "did"} />;
};

export default CreatePage;
