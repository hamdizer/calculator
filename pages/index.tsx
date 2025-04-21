// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import AdCalculator from "../components/AdCalculator";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <Head>
        <title>ONETRACK Ad Calculator</title>
        <meta
          name="description"
          content="Calculate your ad spend with ONETRACK"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <div className="text-white text-center py-4 px-4">
          <button className="text-sm text-blue-400 border border-blue-400 px-4 py-1 rounded-md mb-6 hover:bg-blue-400 hover:text-white transition">
            CALCULATOR
          </button>

          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Is OneTrack <span className="font-bold">worth it?</span>
          </h1>

          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Through superior technology OneTrack customers experience a drop of
            average 32.4% in ad spend, with an increase of up to 256.6% in ROAS.
          </p>
        </div>

        <AdCalculator />
      </main>
    </div>
  );
};

export default Home;
