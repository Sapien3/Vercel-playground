import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export default function createApolloClient(initialState, ctx) {
  // no query cache for now
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    link: new HttpLink({
      // uri: GRAPHQL_URL, // Server URL (must be absolute)
      uri: "http://localhost:1337/graphql", // Server URL (must be absolute)
    }),
    cache: new InMemoryCache(),
  });
}
