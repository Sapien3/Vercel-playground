import createApolloClient from "../lib/apolloClient";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";
import { useEffect } from "react";

export default function Playground() {
  const GET_ARTICLES = gql`
    query Articles {
      articles {
        id
        Headline
      }
    }
  `;
    const { loading, error, data } = useQuery(GET_ARTICLES);
//   const client = createApolloClient();
//   const data = client.query({ query: GET_ARTICLES });
//   data.then((r) => console.log(r));
  return (
    <div>
      <h1>Playground</h1>
      <p>
        This is a playground page. It is used to test the functionality of the
        application.
      </p>
    </div>
  );
}
