# Shopify Discounts

> A node script to create / update Shopify discounts. It can currently only update all currently active discounts with combinable = shipping discounts. More functionality will be added as the necessity arises.

### Setup

```bash
SHOPIFY_ADMIN_API_VERSION=2024-07
SHOPIFY_STORE=suavecito
SHOPIFY_ACCESS_TOKEN=
```

### Generate Types

```bash
npm run generate
```

### Run

```bash
npm run update
```

```bash
> shopify-discounts@0.0.1 update
> tsx src/index.ts

-----------------------------------------------
Starting Shopify Discount Updater
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 24
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 49
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 74
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 99
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 124
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 149
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 174
There are more discounts to update
-----------------------------------------------
Getting discounts...
Processing 25 discounts...
Updated 25 discounts
Current discount total: 199
There are more discounts to update
-----------------------------------------------
All Discounts Updated
Total Discounts Updated: 199
```
