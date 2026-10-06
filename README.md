# ShiftWise

Two single-file web apps for running a restaurant:

- `index.html`: ShiftWise, for shifts, availability and pay.
- `stock.html`: StockWise, for stock levels, ordering and cross-checking deliveries and shelves.

Open either file in a browser, or host the folder on any static host such as GitHub Pages. The stock app is linked from the ShiftWise start screen and sidebar.

## StockWise

### What it does

- **Stock list.** Each item shows quantity, unit, unit price, stock value, par level, supplier, storage location, expiry date, when it was last received and counted, and who last changed it. Staff tap − or + to record usage. Filters cover low, out, expiring and on-order items, and the list can be grouped by category, location or supplier.
- **Update with a reason.** Open an item to record Used, Wasted, Received, Found or Set exact count. Every change goes into the History tab with the person, time and value.
- **Orders.** A manager picks items, or uses *Fill suggested* to order every low item up to its "order up to" level. Lines are split into one order per supplier. Orders can be copied, shared, or sent by WhatsApp or email if the supplier's contact details are saved.
- **Receiving (cross-check).** When a delivery arrives, tap *Receive*. Each line starts at the ordered quantity. Tap **−1 Found** for each one you find and it counts down to ✓. Finishing adds what was found to stock, can update prices, and can put any missing items on a back-order.
- **Stock checks.** These use the same countdown for scattered stock. You can check everything, one location, one category, low items only, or items not counted in the last 7 days. Use the location chips to work through the walk-in, then the dry store, then the bar. *Blind count* hides the expected number and counts up instead.
- **Exports.** Stock and history export as CSV, and a full JSON backup can be saved and restored.

Staff can count, use and receive stock. Manager mode (PIN, default `1234`, change it under More) is needed to add or edit items, create or cancel orders and change settings. The PIN only prevents accidental edits. It is not security.

### Sharing stock between phones (live sync)

Out of the box, data is saved in the browser, so **each device has its own copy**. For staff updates to reach the manager, connect a free Firebase project:

1. Go to <https://console.firebase.google.com>, create a project, and add a **Web app**. Copy the `firebaseConfig` object it shows you.
2. Open **Build → Firestore Database** and create a database.
3. Open **Build → Authentication → Sign-in method** and enable **Anonymous**.
4. In **Firestore → Rules**, paste:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /restaurants/{rid}/{col}/{doc} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

5. In `stock.html`, replace `const FIREBASE_CONFIG = null;` with your config, for example:

   ```js
   const FIREBASE_CONFIG = {
     apiKey: "…",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "…",
     appId: "…"
   };
   ```

The badge next to the logo changes from **This device** to **Live**. Changes made without signal are kept on the phone and upload when it reconnects. Quantity changes and count taps are sent as increments, so two people updating the same item, or checking different rooms at the same time, don't overwrite each other.

To move existing local data to the shared database, export a backup (More → Full backup) before you add the config, then restore it afterwards.

Anonymous auth stops casual access, but anyone who has the page URL can still sign in. If the app is on a public URL, add real staff logins before you rely on it.
