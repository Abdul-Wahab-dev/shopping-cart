import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo-client";
import "./asset/style/index.css";
// import { AuthProvider } from "src/auth/useAuth";
import "./asset/style/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
