import { Global } from "@emotion/react";
import { Fragment } from "react";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Global styles={GlobalStyle} />
    </Fragment>
  );
}

export default MyApp;
