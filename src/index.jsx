import React from 'react';
import ReactDOM from 'react-dom/client';
import './resources/main.scss';
import { ApolloProvider } from '@apollo/client';
import { client } from './shared/dbapi';
import CurrencySwitcher from './components/currency-switcher';

// const GetCurrencies = () => {
//   const { loading, error, data } = useQuery(GET_CURRENCIES);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   console.log(data)
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <CurrencySwitcher/>
  </ApolloProvider> 
  </React.StrictMode>
);

