import { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import CoinList from "../components/CoinList";

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState("");
  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Track price of crypto currency" />
        <meta
          name="keywords"
          content="crypto,stocks,ansh agrawal,bitcoin,doge,investment,coin,currency,crypto tracker,react crypto,next crypto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="font-bold  p-5 text-3xl">Crypto Tracker</h1>
        <h3>-Ansh Agrawal</h3>
      </div>
      <SearchBar type="text" placeholder="Search" onChange={handleChange} />
      <CoinList filteredCoins={allCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};
