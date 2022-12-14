import Head from "next/head";
import styles from "../styles/Home.module.css";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord Navbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <SideBar />
        </div>
      </main>
    </div>
  );
}
