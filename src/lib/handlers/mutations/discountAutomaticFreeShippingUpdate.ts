const mutation = `#graphql
  mutation discountAutomaticFreeShippingUpdate($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {
    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {
      automaticDiscountNode {
        automaticDiscount {
          ... on DiscountAutomaticFreeShipping {
            title
          }
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
`;

export default mutation;
