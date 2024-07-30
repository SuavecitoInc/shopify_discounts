const mutation = `#graphql
  mutation discountAutomaticBxgyUpdate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!, $id: ID!) {
    discountAutomaticBxgyUpdate(automaticBxgyDiscount: $automaticBxgyDiscount, id: $id) {
      automaticDiscountNode {
        id
        automaticDiscount {
          ... on DiscountAutomaticBxgy {
            # discountId // doesn't exist in the schema but in docs
            customerGets {
              items {
                ... on DiscountProducts {
                  products(first: 2) {
                    nodes {
                      id
                    }
                  }
                }
              }
              value {
                ... on DiscountOnQuantity {
                  quantity {
                    quantity
                  }
                  effect {
                    ... on DiscountPercentage {
                      percentage
                    }
                  }
                }
              }
            }
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
