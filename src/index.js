import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient,ApolloProvider, InMemoryCache } from '@apollo/client'

// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  url: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);


