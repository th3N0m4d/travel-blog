import "../public/style.css";
import "../public/custom-overrides.css";
/**@see https://fontawesome.com/v6.0/docs/web/use-with/react/use-with */
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
