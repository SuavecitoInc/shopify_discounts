const query = `#graphql
  query discountNodes($query: String!, $after: String) {
    discountNodes(first: 25, query: $query, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          id
          discount {
            ... on DiscountCodeBasic {
              discountClass
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountCodeBxgy {
              discountClass
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountCodeFreeShipping {
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountAutomaticApp {
              title
              status
              __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountAutomaticBasic {
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountAutomaticBxgy {
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
            ... on DiscountAutomaticFreeShipping {
              title
              status
              typename: __typename
              combinesWith {
                shippingDiscounts
                productDiscounts
                orderDiscounts
              }
            }
          }
        }
      }
    }
  }
`;

export default query;
