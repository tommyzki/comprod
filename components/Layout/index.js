import Head from "next/head";
import { useContext, React } from 'react';
import AppContext from "../AppContext/AppContext"
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

export default function Layout(props) {
  const { children, pageTitle } = props;
  const context = useContext(AppContext);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Concise | {pageTitle}</title>
          <meta name="description" content="Concise" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className={[styles.content, context.themeContext === "white" ? "background-white" : "background-black"].join(" ")}>{children}</div> 
        
      </div>
      <div className={styles.footerBg}>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
