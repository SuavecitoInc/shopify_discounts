import { shopifyApiProject, ApiType } from '@shopify/api-codegen-preset';

export default {
  // For syntax highlighting / auto-complete when writing operations
  schema: 'https://shopify.dev/admin-graphql-direct-proxy/2024-07',
  // documents: ['./app/**/*.{js,ts,jsx,tsx}'],
  documents: ['./src/lib/handlers/mutations/*.ts', './src/lib/handlers/queries/*.ts'],
  projects: {
    // To produce variable / return types for Admin API operations
    default: shopifyApiProject({
      apiType: ApiType.Admin,
      apiVersion: '2024-07',
      documents: ['./src/lib/handlers/mutations/*.ts', './src/lib/handlers/queries/*.ts'],
      outputDir: './src/lib/types',
    }),
  },
};
