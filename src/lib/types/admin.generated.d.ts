/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types';

export type DiscountAutomaticAppUpdateMutationVariables = AdminTypes.Exact<{
  automaticAppDiscount: AdminTypes.DiscountAutomaticAppInput;
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type DiscountAutomaticAppUpdateMutation = { discountAutomaticAppUpdate?: AdminTypes.Maybe<{ automaticAppDiscount?: AdminTypes.Maybe<(
      Pick<AdminTypes.DiscountAutomaticApp, 'discountId' | 'title' | 'startsAt' | 'endsAt' | 'status'>
      & { appDiscountType: Pick<AdminTypes.AppDiscountType, 'appKey' | 'functionId'>, combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'orderDiscounts' | 'productDiscounts' | 'shippingDiscounts'> }
    )>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'message'>> }> };

export type DiscountAutomaticBasicUpdateMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  automaticBasicDiscount: AdminTypes.DiscountAutomaticBasicInput;
}>;


export type DiscountAutomaticBasicUpdateMutation = { discountAutomaticBasicUpdate?: AdminTypes.Maybe<{ automaticDiscountNode?: AdminTypes.Maybe<(
      Pick<AdminTypes.DiscountAutomaticNode, 'id'>
      & { automaticDiscount: { customerGets: { value: Pick<AdminTypes.DiscountPercentage, 'percentage'>, items: { collections: { nodes: Array<Pick<AdminTypes.Collection, 'id'>> } } } } }
    )>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type DiscountAutomaticBxgyUpdateMutationVariables = AdminTypes.Exact<{
  automaticBxgyDiscount: AdminTypes.DiscountAutomaticBxgyInput;
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type DiscountAutomaticBxgyUpdateMutation = { discountAutomaticBxgyUpdate?: AdminTypes.Maybe<{ automaticDiscountNode?: AdminTypes.Maybe<(
      Pick<AdminTypes.DiscountAutomaticNode, 'id'>
      & { automaticDiscount: { customerGets: { items: { products: { nodes: Array<Pick<AdminTypes.Product, 'id'>> } }, value: { quantity: Pick<AdminTypes.DiscountQuantity, 'quantity'>, effect: Pick<AdminTypes.DiscountPercentage, 'percentage'> } } } }
    )>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type DiscountAutomaticFreeShippingUpdateMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  freeShippingAutomaticDiscount: AdminTypes.DiscountAutomaticFreeShippingInput;
}>;


export type DiscountAutomaticFreeShippingUpdateMutation = { discountAutomaticFreeShippingUpdate?: AdminTypes.Maybe<{ automaticDiscountNode?: AdminTypes.Maybe<{ automaticDiscount: Pick<AdminTypes.DiscountAutomaticFreeShipping, 'title'> }>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'message' | 'field' | 'code'>> }> };

export type DiscountCodeBasicUpdateMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  basicCodeDiscount: AdminTypes.DiscountCodeBasicInput;
}>;


export type DiscountCodeBasicUpdateMutation = { discountCodeBasicUpdate?: AdminTypes.Maybe<{ codeDiscountNode?: AdminTypes.Maybe<{ codeDiscount: (
        Pick<AdminTypes.DiscountCodeBasic, 'title' | 'startsAt' | 'endsAt' | 'appliesOncePerCustomer'>
        & { codes: { nodes: Array<Pick<AdminTypes.DiscountRedeemCode, 'code'>> }, customerSelection: Pick<AdminTypes.DiscountCustomerAll, 'allCustomers'>, customerGets: { value: Pick<AdminTypes.DiscountPercentage, 'percentage'>, items: Pick<AdminTypes.AllDiscountItems, 'allItems'> } }
      ) }>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type DiscountCodeBxgyUpdateMutationVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
  bxgyCodeDiscount: AdminTypes.DiscountCodeBxgyInput;
}>;


export type DiscountCodeBxgyUpdateMutation = { discountCodeBxgyUpdate?: AdminTypes.Maybe<{ codeDiscountNode?: AdminTypes.Maybe<{ codeDiscount: (
        Pick<AdminTypes.DiscountCodeBxgy, 'title' | 'endsAt'>
        & { codes: { nodes: Array<Pick<AdminTypes.DiscountRedeemCode, 'code'>> } }
      ) }>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type DiscountCodeFreeShippingUpdateMutationVariables = AdminTypes.Exact<{
  freeShippingCodeDiscount: AdminTypes.DiscountCodeFreeShippingInput;
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type DiscountCodeFreeShippingUpdateMutation = { discountCodeFreeShippingUpdate?: AdminTypes.Maybe<{ codeDiscountNode?: AdminTypes.Maybe<(
      Pick<AdminTypes.DiscountCodeNode, 'id'>
      & { codeDiscount: (
        Pick<AdminTypes.DiscountCodeFreeShipping, 'title' | 'startsAt' | 'endsAt'>
        & { minimumRequirement?: AdminTypes.Maybe<{ greaterThanOrEqualToSubtotal: Pick<AdminTypes.MoneyV2, 'amount' | 'currencyCode'> }>, codes: { nodes: Array<Pick<AdminTypes.DiscountRedeemCode, 'code'>> } }
      ) }
    )>, userErrors: Array<Pick<AdminTypes.DiscountUserError, 'field' | 'code' | 'message'>> }> };

export type DiscountNodesQueryVariables = AdminTypes.Exact<{
  query: AdminTypes.Scalars['String']['input'];
  after?: AdminTypes.InputMaybe<AdminTypes.Scalars['String']['input']>;
}>;


export type DiscountNodesQuery = { discountNodes: { pageInfo: Pick<AdminTypes.PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>, edges: Array<{ node: (
        Pick<AdminTypes.DiscountNode, 'id'>
        & { discount: (
          { __typename: 'DiscountAutomaticApp' }
          & Pick<AdminTypes.DiscountAutomaticApp, 'title' | 'status'>
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountAutomaticBasic, 'title' | 'status'>
          & { typename: 'DiscountAutomaticBasic' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountAutomaticBxgy, 'title' | 'status'>
          & { typename: 'DiscountAutomaticBxgy' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountAutomaticFreeShipping, 'title' | 'status'>
          & { typename: 'DiscountAutomaticFreeShipping' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountCodeBasic, 'discountClass' | 'title' | 'status'>
          & { typename: 'DiscountCodeBasic' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountCodeBxgy, 'discountClass' | 'title' | 'status'>
          & { typename: 'DiscountCodeBxgy' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) | (
          Pick<AdminTypes.DiscountCodeFreeShipping, 'title' | 'status'>
          & { typename: 'DiscountCodeFreeShipping' }
          & { combinesWith: Pick<AdminTypes.DiscountCombinesWith, 'shippingDiscounts' | 'productDiscounts' | 'orderDiscounts'> }
        ) }
      ) }> } };

interface GeneratedQueryTypes {
  "#graphql\n  query discountNodes($query: String!, $after: String) {\n    discountNodes(first: 25, query: $query, after: $after) {\n      pageInfo {\n        endCursor\n        hasNextPage\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        node {\n          id\n          discount {\n            ... on DiscountCodeBasic {\n              discountClass\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountCodeBxgy {\n              discountClass\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountCodeFreeShipping {\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountAutomaticApp {\n              title\n              status\n              __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountAutomaticBasic {\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountAutomaticBxgy {\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n            ... on DiscountAutomaticFreeShipping {\n              title\n              status\n              typename: __typename\n              combinesWith {\n                shippingDiscounts\n                productDiscounts\n                orderDiscounts\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": {return: DiscountNodesQuery, variables: DiscountNodesQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n  mutation discountAutomaticAppUpdate($automaticAppDiscount: DiscountAutomaticAppInput!, $id: ID!) {\n    discountAutomaticAppUpdate(automaticAppDiscount: $automaticAppDiscount, id: $id) {\n      automaticAppDiscount {\n        discountId\n        title\n        startsAt\n        endsAt\n        status\n        appDiscountType {\n          appKey\n          functionId\n        }\n        combinesWith {\n          orderDiscounts\n          productDiscounts\n          shippingDiscounts\n        }\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {return: DiscountAutomaticAppUpdateMutation, variables: DiscountAutomaticAppUpdateMutationVariables},
  "#graphql\n  mutation discountAutomaticBasicUpdate($id: ID!, $automaticBasicDiscount: DiscountAutomaticBasicInput!) {\n    discountAutomaticBasicUpdate(id: $id, automaticBasicDiscount: $automaticBasicDiscount) {\n      automaticDiscountNode {\n        id\n        automaticDiscount {\n          ... on DiscountAutomaticBasic {\n            customerGets {\n              value {\n                ... on DiscountPercentage {\n                  percentage\n                }\n              }\n              items {\n                ... on DiscountCollections {\n                  collections(first: 5) {\n                    nodes {\n                      id\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: DiscountAutomaticBasicUpdateMutation, variables: DiscountAutomaticBasicUpdateMutationVariables},
  "#graphql\n  mutation discountAutomaticBxgyUpdate($automaticBxgyDiscount: DiscountAutomaticBxgyInput!, $id: ID!) {\n    discountAutomaticBxgyUpdate(automaticBxgyDiscount: $automaticBxgyDiscount, id: $id) {\n      automaticDiscountNode {\n        id\n        automaticDiscount {\n          ... on DiscountAutomaticBxgy {\n            # discountId // doesn't exist in the schema but in docs\n            customerGets {\n              items {\n                ... on DiscountProducts {\n                  products(first: 2) {\n                    nodes {\n                      id\n                    }\n                  }\n                }\n              }\n              value {\n                ... on DiscountOnQuantity {\n                  quantity {\n                    quantity\n                  }\n                  effect {\n                    ... on DiscountPercentage {\n                      percentage\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: DiscountAutomaticBxgyUpdateMutation, variables: DiscountAutomaticBxgyUpdateMutationVariables},
  "#graphql\n  mutation discountAutomaticFreeShippingUpdate($id: ID!, $freeShippingAutomaticDiscount: DiscountAutomaticFreeShippingInput!) {\n    discountAutomaticFreeShippingUpdate(id: $id, freeShippingAutomaticDiscount: $freeShippingAutomaticDiscount) {\n      automaticDiscountNode {\n        automaticDiscount {\n          ... on DiscountAutomaticFreeShipping {\n            title\n          }\n        }\n      }\n      userErrors {\n        message\n        field\n        code\n      }\n    }\n  }\n": {return: DiscountAutomaticFreeShippingUpdateMutation, variables: DiscountAutomaticFreeShippingUpdateMutationVariables},
  "#graphql\n  mutation discountCodeBasicUpdate($id: ID!, $basicCodeDiscount: DiscountCodeBasicInput!) {\n    discountCodeBasicUpdate(id: $id, basicCodeDiscount: $basicCodeDiscount) {\n      codeDiscountNode {\n        codeDiscount {\n          ... on DiscountCodeBasic {\n            title\n            codes(first: 10) {\n              nodes {\n                code\n              }\n            }\n            startsAt\n            endsAt\n            customerSelection {\n              ... on DiscountCustomerAll {\n                allCustomers\n              }\n            }\n            customerGets {\n              value {\n                ... on DiscountPercentage {\n                  percentage\n                }\n              }\n              items {\n                ... on AllDiscountItems {\n                  allItems\n                }\n              }\n            }\n            appliesOncePerCustomer\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: DiscountCodeBasicUpdateMutation, variables: DiscountCodeBasicUpdateMutationVariables},
  "#graphql\n  mutation discountCodeBxgyUpdate($id: ID!, $bxgyCodeDiscount: DiscountCodeBxgyInput!) {\n    discountCodeBxgyUpdate(id: $id, bxgyCodeDiscount: $bxgyCodeDiscount) {\n      codeDiscountNode {\n        codeDiscount {\n          ... on DiscountCodeBxgy {\n            title\n            codes(first: 10) {\n              nodes {\n                code\n              }\n            }\n            endsAt\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: DiscountCodeBxgyUpdateMutation, variables: DiscountCodeBxgyUpdateMutationVariables},
  "#graphql\n  mutation discountCodeFreeShippingUpdate($freeShippingCodeDiscount: DiscountCodeFreeShippingInput!, $id: ID!) {\n    discountCodeFreeShippingUpdate(freeShippingCodeDiscount: $freeShippingCodeDiscount, id: $id) {\n      codeDiscountNode {\n        id\n        codeDiscount {\n          ... on DiscountCodeFreeShipping {\n            title\n            startsAt\n            endsAt\n            minimumRequirement {\n              ... on DiscountMinimumSubtotal {\n                greaterThanOrEqualToSubtotal {\n                  amount\n                  currencyCode\n                }\n              }\n            }\n            codes(first: 2) {\n              nodes {\n                code\n              }\n            }\n          }\n        }\n      }\n      userErrors {\n        field\n        code\n        message\n      }\n    }\n  }\n": {return: DiscountCodeFreeShippingUpdateMutation, variables: DiscountCodeFreeShippingUpdateMutationVariables},
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
