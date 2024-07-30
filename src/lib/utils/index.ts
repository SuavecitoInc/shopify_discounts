import fetch from 'node-fetch';
import { STORE, API_VERSION, ACCESS_TOKEN } from '../const';

export * from './combines-with-shipping';

type ShopifyResponse<T> = {
  data: T;
};

export async function shopifyAuthenticatedFetch<T>(query: string, variables?: object): Promise<ShopifyResponse<T>> {
  try {
    const endpoint = `https://${STORE}.myshopify.com/admin/api/${API_VERSION}/graphql.json`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await response.json();

    return json as ShopifyResponse<T>;
  } catch (error: any) {
    console.log(error);
    throw new Error('Failed to fetch from Shopify');
  }
}
