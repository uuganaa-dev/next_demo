import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState } from "../contexts/Context";

const Index = () => {
  const { dispatch } = useState();
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
          <Link href="/category">category</Link>
        </li>
        <li>
          <Link
            href="/kinonner"
            onClick={() => {
              dispatch({
                type: "CHANGE_STATE",
                data: {
                  header: false,
                },
              });
            }}
          >
            detail
          </Link>
        </li>
      </ul>
      <div className="text-red-500"></div>
    </>
  );
};

export default React.memo(Index);
