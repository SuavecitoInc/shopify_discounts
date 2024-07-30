const mutation = `#graphql
  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {
    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        codeDiscount {
          ... on DiscountCodeBasic {
            title
            codes(first: 10) {
              nodes {
                code
              }
            }
            startsAt
            endsAt
            customerSelection {
              ... on DiscountCustomerAll {
                allCustomers
              }
            }
            customerGets {
              value {
                ... on DiscountPercentage {
                  percentage
                }
              }
              items {
                ... on AllDiscountItems {
                  allItems
                }
              }
            }
            appliesOncePerCustomer
          }
        }
      }
      userErrors {
        field
        code
        message
      }
    }
  }
`;

export default mutation;
