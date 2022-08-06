import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    category(input: { title: "all"}) {
      name
      products {
        id
        name
        gallery
        inStock
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`

export { client, GET_CURRENCIES, GET_ALL_PRODUCTS};