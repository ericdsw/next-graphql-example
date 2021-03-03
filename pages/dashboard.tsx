import React, { useEffect } from 'react';
import Head from 'next/head';

import { useQuery } from '@apollo/client';

import { GET_RATES } from '../network/graphQl/queries';

const Dashboard = (): JSX.Element => {

  const { data, loading, error } = useQuery(GET_RATES);

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
  )
}

export default Dashboard;