import { shopifyAuthenticatedFetch } from '../lib/utils';
import { discountNodes } from '../lib/handlers';
import {
  updateAutomaticAppDiscount,
  updateAutomaticBasicDiscount,
  updateAutomaticBxgyDiscount,
  updateAutomaticFreeShippingDiscount,
  updateDiscountCodeBasic,
  updateDiscountCodeBxgy,
  // updateDiscountCodeFreeShipping,
  writeSuccessCsv,
} from '../lib/utils';
import type { DiscountNodesQuery } from '../lib/types/admin.generated';
import { write } from 'fs';

async function updateActiveDiscounts() {
  let count = 0;
  async function getDiscounts(after: string | null = null) {
    console.log('-----------------------------------------------');
    console.log('Getting discounts...');

    // get all active discounts, excluding combines_with: SHIPPING_DISCOUNT
    const variables = after
      ? { query: 'status:active -combines_with:shipping_discounts', after }
      : { query: 'status:active -combines_with:shipping_discounts' };

    const response = await shopifyAuthenticatedFetch<DiscountNodesQuery>(discountNodes, variables);

    const discounts = response.data.discountNodes.edges.map((edge) => edge.node);

    console.log(`Processing ${discounts.length} discounts...`);

    const updatedDiscountPromises = discounts.map(async (el) => {
      // @ts-expect-error - Generated types don't include alias typename
      const type = el.discount.typename;
      const row = { id: el.id, title: el.discount.title, response: 'success' };
      if (type === 'DiscountAutomaticApp') {
        // discount automatic app
        count += 1;
        writeSuccessCsv(row);
        return await updateAutomaticAppDiscount(el.id);
      } else if (type === 'DiscountAutomaticBasic') {
        // discount automatic basic
        count += 1;
        writeSuccessCsv(row);
        return await updateAutomaticBasicDiscount(el.id);
      } else if (type === 'DiscountAutomaticBxgy') {
        // discount automatic bxgy
        count += 1;
        writeSuccessCsv(row);
        return await updateAutomaticBxgyDiscount(el.id);
      } else if (type === 'DiscountAutomaticFreeShipping') {
        // discount automatic free shipping
        count += 1;
        writeSuccessCsv(row);
        return await updateAutomaticFreeShippingDiscount(el.id);
      } else if (type === 'DiscountCodeBasic') {
        // discount code basic
        count += 1;
        writeSuccessCsv(row);
        return await updateDiscountCodeBasic(el.id);
      } else if (type === 'DiscountCodeBxgy') {
        // discount code bxgy
        count += 1;
        writeSuccessCsv(row);
        return await updateDiscountCodeBxgy(el.id);
      } else {
        return null;
      }
    });

    // updated discounts
    await Promise.all(updatedDiscountPromises);
    console.log(`Updated ${updatedDiscountPromises.length} discounts`);

    if (response.data.discountNodes.pageInfo.hasNextPage) {
      console.log('Current discount total:', count);
      console.log('There are more discounts to update');
      await getDiscounts(response.data.discountNodes.pageInfo.endCursor);
    } else {
      console.log('-----------------------------------------------');
      console.log('All discounts updated');
      console.log(`Total discounts updated: ${count}`);
    }
  }

  try {
    await getDiscounts();
  } catch (error: any) {
    console.log(error);
    throw new Error('Failed to update discounts');
  }
}

export default updateActiveDiscounts;
