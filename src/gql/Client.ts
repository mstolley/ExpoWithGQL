import { ApolloClient, InMemoryCache } from '@apollo/client'

export const Client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  // uri: 'https://mavely.top/',
  cache: new InMemoryCache()
})
