import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient,InMemoryCache,
ApolloProvider,
useQuery,
gql } from '@apollo/client';
import { render } from '@testing-library/react';
import SearchReact from './AllComponents/SearchReact';
import App from './App.js'
const client= new ApolloClient({
  uri:'https://48p1r2roz4.sse.codesandbox.io/',
  cache:new InMemoryCache()
})

function NewFi() {
  return (
    <div>
      {console.log("HI")}
      <SearchReact/>
      <App />
    </div>
  );
}
render(
  <ApolloProvider client={client}>
    <NewFi/>
  </ApolloProvider>, document.getElementById('root')
);