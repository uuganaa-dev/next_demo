import Head from "next/head";
import React from "react";

const data = [
  {
    id: 1,
    title: "kino ner",
    desc: "asdasd sad asd asd asd asd asd asd as",
    img: "/img/asdsad.jpg",
    lang: "sub esvel audio",
    screenshots: [
      { id: 1, img: "123123123.jpg" },
      { id: 2, img: "zxc.jpg" },
      { id: 3, img: "qwe.jpg" },
    ],
    trailer: "https://www.youtube.com/watch?v=smTK_AeAPHs",
  },
];

const _ID = () => {
  return (
    <div>
      <Head>
        <title>дэлгэрэнгүй</title>
      </Head>
      дэлгэрэнгүй
    </div>
  );
};

export default React.memo(_ID);
