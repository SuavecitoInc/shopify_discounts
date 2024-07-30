import { shopifyAuthenticatedFetch } from '../utils';
import {
  discountAutomaticAppUpdate,
  discountAutomaticBasicUpdate,
  discountAutomaticBxgyUpdate,
  discountAutomaticFreeShippingUpdate,
  discountCodeBasicUpdate,
  discountCodeBxgyUpdate,
  discountCodeFreeShippingUpdate,
} from '../handlers';
import type {
  DiscountAutomaticAppUpdateMutation,
  DiscountAutomaticBasicUpdateMutation,
  DiscountAutomaticBxgyUpdateMutation,
  DiscountAutomaticFreeShippingUpdateMutation,
  DiscountCodeBasicUpdateMutation,
  DiscountCodeBxgyUpdateMutation,
  DiscountCodeFreeShippingUpdateMutation,
} from '../types/admin.generated';

export async function updateAutomaticAppDiscount(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountAutomaticAppUpdateMutation>(
    discountAutomaticAppUpdate,
    {
      id,
      automaticAppDiscount: {
        combinesWith: {
          shippingDiscounts: true,
        },
      },
    },
  );

  return updatedDiscount;
}

export async function updateAutomaticBasicDiscount(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountAutomaticBasicUpdateMutation>(
    discountAutomaticBasicUpdate,
    {
      id,
      automaticBasicDiscount: {
        combinesWith: {
          shippingDiscounts: true,
        },
      },
    },
  );

  return updatedDiscount;
}

export async function updateAutomaticBxgyDiscount(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountAutomaticBxgyUpdateMutation>(
    discountAutomaticBxgyUpdate,
    {
      id,
      automaticBxgyDiscount: {
        combinesWith: {
          shippingDiscounts: true,
        },
      },
    },
  );

  return updatedDiscount;
}

export async function updateAutomaticFreeShippingDiscount(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountAutomaticFreeShippingUpdateMutation>(
    discountAutomaticFreeShippingUpdate,
    {
      id,
      freeShippingAutomaticDiscount: {
        combinesWith: {
          shippingDiscounts: true,
        },
      },
    },
  );

  return updatedDiscount;
}

export async function updateDiscountCodeBasic(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountCodeBasicUpdateMutation>(discountCodeBasicUpdate, {
    id,
    basicCodeDiscount: {
      combinesWith: {
        shippingDiscounts: true,
      },
    },
  });

  return updatedDiscount;
}

export async function updateDiscountCodeBxgy(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountCodeBxgyUpdateMutation>(discountCodeBxgyUpdate, {
    id,
    bxgyCodeDiscount: {
      combinesWith: {
        shippingDiscounts: true,
      },
    },
  });

  return updatedDiscount;
}

export async function updateDiscountCodeFreeShipping(id: string) {
  const updatedDiscount = await shopifyAuthenticatedFetch<DiscountCodeFreeShippingUpdateMutation>(
    discountCodeFreeShippingUpdate,
    {
      id,
      freeShippingCodeDiscount: {
        combinesWith: {
          shippingDiscounts: true,
        },
      },
    },
  );

  return updatedDiscount;
}
