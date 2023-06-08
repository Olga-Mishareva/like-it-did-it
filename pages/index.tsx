import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/list/liked");
  }, []);

  return <></>;
};

export default HomePage;
