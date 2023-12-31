import React from 'react';
import AllRoutes from './routers/routers';

import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" })
]);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AllRoutes />
      </ApolloProvider>
    </ThemeProvider>

  );
}

export default App;
