import { type AppType } from "next/dist/shared/lib/utils";
import { AppWrapper } from "~/context/state";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
