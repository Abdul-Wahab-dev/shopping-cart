import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useMemo } from "react";
// const clientHttpLink = createHttpLink({
//   uri: 'http://localhost:5000/graphql',
// })
// const clientAuthLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers
//     },
//   }
// })
// const client = new ApolloClient({
//   link: clientAuthLink.concat(clientHttpLink),
//   cache: new InMemoryCache(),
// })

function createApolloClient() {
  return new ApolloClient({
    link: createHttpLink({ uri: "/api/graphql" }),
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
