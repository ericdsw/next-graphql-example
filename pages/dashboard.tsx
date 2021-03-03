import React, { useEffect } from "react";
import Head from "next/head";
import { useHelloQuery } from "../network/graphQl/interfaces/types";

const Dashboard = (): JSX.Element => {
  const { data, loading, error } = useHelloQuery();

  useEffect(() => {
    console.log(data);
  }, [loading]);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {!loading && JSON.stringify(data)}
      </div>
    </>
  );
};

export default Dashboard;
