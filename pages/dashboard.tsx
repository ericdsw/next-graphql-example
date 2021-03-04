import React, { useEffect } from "react";
import Head from "next/head";

import { useUserQuery } from "@graph/interfaces/types";

const Dashboard = (): JSX.Element => {
  
  const { data, loading, error } = useUserQuery({ variables: { id: "1" } });
  
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
