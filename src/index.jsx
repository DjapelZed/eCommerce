import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/main.scss';
import { ApolloProvider } from '@apollo/client';
import { client } from './shared/dbapi';
import CurrencySwitcher from './components/currency-switcher';
import CategoryPage from './pages/category-page';
import Header from './containers/layout/header';
import "./resources/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div className="wrapper">
    <ApolloProvider client={client}>
      <Header/>
      <CategoryPage category="all"/>
    </ApolloProvider> 
  </div>
  </React.StrictMode>
);

