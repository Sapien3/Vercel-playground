import "../styles/globals.css";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "../lib/apolloClient";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    // uri: GRAPHQL_URL, // Server URL (must be absolute)
    uri: "http://localhost:1337/graphql", // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
