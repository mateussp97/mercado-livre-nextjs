import { Global } from "@emotion/react";
import { Fragment } from "react";
import Header from "../components/global/Header/Header";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Global styles={GlobalStyle} />
    </Fragment>
  );
}

export default MyApp;
