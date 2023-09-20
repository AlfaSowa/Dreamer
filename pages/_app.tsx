import App, { AppContext, AppProps } from "next/app";
import { useEffect } from "react";
import { useToggleTheme } from "../shared/hooks";

function WrappedApp({ Component, pageProps }: AppProps) {
  const { theme } = useToggleTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <Component {...pageProps} />;
}

WrappedApp.getInitialProps = async (appContext: AppContext) => {
  // const userAgent = appContext?.ctx?.req?.headers["user-agent"];

  // const reqMobile =
  //   /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

  // if (typeof window === "undefined") {
  //   const cookies = appContext?.ctx?.req?.headers?.cookie || null;

  //   if (cookies && getCookie("token", cookies)) {
  //     setTokenFx(getCookie("token", cookies));
  //   } else {
  //     setTokenFx(null);
  //   }
  // }

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,

    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    pageProps: {
      ...appProps.pageProps,
    },
  };
};

export default WrappedApp;
