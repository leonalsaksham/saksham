import React, { ReactNode } from 'react'
import Head from 'next/head';
import DashboardBanner from '@features/dashboard/banner';
import Layout from '@shared/layouts';
import GameList from '@features/dashboard/gameList';

const Dashboard = () => {
  return (
    <>
        <Head>
            <title>Dashboard</title>
        </Head>

        <div>
            <DashboardBanner />
            <div className='container'>
              <div className='my-5'>
                <GameList />
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>;
};