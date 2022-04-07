/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Head>
          {/**@todo Load fonts from CSS instead */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700"
            type="text/css"
            media="all"
          />
        </Head>
        <NavBar />
        <main className="site-content blog">{children}</main>
      </div>
      <Footer />
    </>
  );
}
