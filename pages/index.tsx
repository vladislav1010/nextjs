import Head from "next/head";
import { Header } from "../components/shared";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Auth1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main />
    </div>
  );
}
