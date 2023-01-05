import Head from "next/head";
import React from "react";

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
