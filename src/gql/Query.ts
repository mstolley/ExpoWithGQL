import { gql } from '@apollo/client'

// CLIENT uri: 'https://countries.trevorblades.com/graphql'
export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
        code
        name
    }
  }
`
