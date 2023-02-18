import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";
function createApolloClient() {
  return new ApolloClient({
    link: createHttpLink({ uri: "http://localhost:5000/graphql" }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
}

export function useApollo() {
  const client = useMemo(() => createApolloClient(), []);
  return client;
}
