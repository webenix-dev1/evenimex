import React, { Fragment, useEffect, useRef, useState } from "react";
import SeoComponent from "../components/SeoComponent";

import apiRouter from "../utils/apiRouter";
import { axiosGet } from "../utils/axois";
import { useRouter } from "next/router";

const Home = () => {
  const routers = useRouter();

  return (
    <>
      <SeoComponent metaDetail={{ title: "Evenimex", desc: "Evenimex" }} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
  let boatUsedList = [];

  //   let boatUsedResult = await axiosGet(apiRouter.BOATUSEDTYPELIST);

  //   if (boatUsedResult.data && boatUsedResult.data.data) {
  //     boatUsedList = boatUsedResult.data.data;
  //   }
  return {
    props: {
      boatUsedList,
    },
  };
};
export default Home;
