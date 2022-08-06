import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/main.scss';
import { ApolloProvider } from '@apollo/client';
import { client } from './shared/dbapi';
import CurrencySwitcher from './components/currency-switcher';
import CategoryPage from './pages/category-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <CurrencySwitcher/>
    <CategoryPage category="all"/>
  </ApolloProvider> 
  </React.StrictMode>
);

