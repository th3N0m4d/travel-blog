import Head from "next/head";
import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700"
            type="text/css"
            media="all"
          />
        </Head>
        <NavBar />
        <main className="site-content">{children}</main>
      </div>
      <Footer />
    </>
  );
}
