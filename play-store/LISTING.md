# StockWise on Google Play

Everything here is ready to paste into the Play Console. The images sit next to this file.

| Asset | File | Play requirement |
|---|---|---|
| App icon | `icon-512.png` | 512 × 512 PNG |
| Feature graphic | `feature-graphic.png` | 1024 × 500 PNG |
| Phone screenshots | `screenshots/1…6-*.png` | 2–8 images, 1080 × 1920 |

## App details

- **App name** (30 max): `StockWise: Restaurant Stock`
- **Package name:** `com.shiftwise.stock`. It can never be changed after the first upload.
- **Category:** Business
- **Tags:** Inventory, Business management
- **Contact email:** your email
- **Privacy policy:** `https://nayem1703100.github.io/shiftwise/privacy.html` (replace `CONTACT_EMAIL` in `privacy.html` first)

### Short description (80 max)

```
Count stock, order from suppliers, compare prices and check off deliveries.
```

### Full description

```
StockWise is stock control built for restaurant kitchens, bars and back stores.

COUNT AND UPDATE STOCK
• Every item shows quantity, unit price, stock value, par level, storage location, expiry date and who changed it last
• Tap − or + as stock is used, or record waste, deliveries and exact counts with a reason
• Low, out-of-stock and expiring items are flagged at a glance

CHECK OFF DELIVERIES
• When an order arrives, each line starts at the ordered amount
• Tap "Found" for every case you find and it counts down to a tick
• Missing items are listed with their value and can go straight onto a back-order

STOCK CHECKS
• Count everything, one room, one category or only low items
• Work room by room: walk-in, dry store, bar
• Blind-count mode hides the expected number for a more accurate count

ORDER FROM SUPPLIERS
• Suggested orders fill every low item up to its target level
• One order per supplier, ready to copy, share or send by WhatsApp or email
• Jump to the supplier's website or app in one tap

COMPARE SUPPLIER PRICES
• Keep every place you buy an item: cash and carry, supermarket, head office
• Prices are compared per unit and without VAT, so pack sizes and VAT don't mislead you
• See how much switching to the cheapest source saves on each restock

HISTORY AND EXPORTS
• Every change is logged with person, time and value
• Weekly totals for used, wasted and received stock
• Export stock and history to CSV, or back up everything

Works offline. No ads, no tracking. Your stock stays on your device.
```

## App content answers

- **Privacy policy:** URL above.
- **Ads:** No, the app contains no ads.
- **App access:** "All functionality is available without restrictions" for staff features. Add instructions for managers: *"Enter any name on first launch. To use manager features (add items, create orders), tap the name chip at the top right and enter PIN 1234."*
- **Content rating:** answer the questionnaire as a Utility/Productivity app. There's no violence, sex, gambling, drugs or user-to-user chat, so it rates **Everyone / PEGI 3**.
- **Target audience:** 18 and over (workplace tool).
- **News app:** No. **Government app:** No. **Financial features:** None.
- **Health apps:** Not a health app.

### Data safety

This applies to the Play build as shipped, where `FIREBASE_CONFIG` is `null` and data stays on the device:

- **Does your app collect or share any of the required user data types?** No. Nothing is sent off the device.
- **Is all user data encrypted in transit?** Yes (all network requests are HTTPS).
- **Do you provide a way for users to request deletion?** Yes, in the app under More → Delete all data.

If you switch on live sync in the Play build, update the form. Collected: **Personal info → Name** and **App activity → Other user-generated content**, both used for app functionality, not shared, and encrypted in transit.

## Release steps

1. **Add the signing secrets** to GitHub (see `SECRETS-README.txt` that came with your upload key).
2. **Run a build:** GitHub → Actions → Android APK → *Run workflow* (or push a commit). The **StockWise-PlayStore-AAB** artifact will contain `StockWise-1.0.N-PlayStore.aab`. If the filename says `TEST-KEY-not-for-Play`, the secrets are missing or misnamed.
3. **Create the app** in the [Play Console](https://play.google.com/console) (one-off US$25 developer fee), choosing *App*, *Free*.
4. **Turn on Play App Signing** when asked (the default), then upload the `.aab` to a testing track.
5. **Fill in** the store listing and App content sections from this file.
6. **Testing rule for new personal accounts:** Google requires a **closed test with at least 12 testers for 14 days in a row** before you can apply for production. Staff phones count as testers. Organisation accounts are exempt.
7. Apply for production and submit for review (usually a few days).

Each new upload needs a higher version code. The workflow uses the run number, so every build is higher than the last.
