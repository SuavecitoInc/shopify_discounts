import updateActiveDiscounts from './functions/updateActiveDiscounts';

async function main() {
  console.log('-----------------------------------------------');
  console.log('Starting Shopify Discount Updater');
  updateActiveDiscounts();
}

main();
