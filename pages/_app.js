import "../styles/style.css";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
