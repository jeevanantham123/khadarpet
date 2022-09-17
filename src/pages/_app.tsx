// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import type { AppRouter } from "../server/router";
import "../styles/globals.css";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import { FormConfig as Form } from "../config/formConfig";
import Pagelayout from "@components/Pagelayout";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FD788C",
      900: "#FF4D67",
    },
    secondary: "#F0A4BC",
    secondaryText: "#B43B56",
  },
  components: {
    Steps,
    Form,
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <ChakraProvider theme={theme}>
        <Pagelayout>
          <Component {...pageProps} />
        </Pagelayout>
      </ChakraProvider>
    </UserProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
