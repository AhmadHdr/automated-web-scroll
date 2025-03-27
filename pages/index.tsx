import React from 'react';
import Head from 'next/head';
import AutoScroll from '@/features/auto-scroll/AutoScroll';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Auto Scroll Komik</title>
        <meta name="description" content="Aplikasi komik dengan auto scroll" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AutoScroll />
      </main>
    </div>
  );
};

export default HomePage;
