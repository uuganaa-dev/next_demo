import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Нүүр хуудас</title>
      </Head>
      <ul>
        <li className="bg-red-500">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/about/123">About detail</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="text-red-500"></div>
    </>
  );
};

export default React.memo(Home);
