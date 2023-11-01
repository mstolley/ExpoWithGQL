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

// CLIENT uri: 'https://mavely.top/'
export const AFFILIATE_LINKS_QUERY = gql`
  query AffiliateLinks {
    affiliateLinks(first: 100) {
        edges {
            cursor
            node {
              metaImage
              metaTitle
              createdAt
              link
            }
        }
        pageInfo {
            hasNextPage
        }
    }
  }
`
