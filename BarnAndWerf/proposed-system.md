# Barn & Werf Operations Requirements

*Prepared for evaluation of candidate systems. April 2026.*

## Purpose

This document identifies the operational issues at Barn & Werf and the capabilities that any system must provide to resolve them. It is written to be solution-neutral so that candidate systems can be evaluated against the same criteria.

When evaluating any system, each capability below should be confirmed by live demonstration, not verbal description.

---

## 1. Current State

Barn & Werf operates across four disconnected systems:

| System | Role |
|---|---|
| Custom website | Public-facing catalogue |
| Spreadsheets | Inventory tracking, informal commission records |
| Xero | Accounting |
| Bank card terminal | In-store card payments |

None of these systems communicate with each other. Every sale requires staff to update multiple systems manually.

---

## 2. Current Issues

### 2.1 Inventory drift across systems
Physical stock, the website catalogue, and the spreadsheets do not stay in sync. Items sold in-store remain visible on the website. Newly received items are not always listed online.

*Impact: customers enquire about items that no longer exist. Website cannot be trusted as a source of truth.*

### 2.2 Manual website updates required per sale
When an item sells in-store, a staff member must remember to remove it from the website. This is skipped under pressure.

*Impact: public website regularly displays items that are no longer available.*

### 2.3 Card payment reconciliation is manual
Card payments settle into the bank as daily lump sums, net of fees. Matching bank deposits against individual sales is a time-consuming manual task.

*Impact: significant bookkeeper time spent per week. Increased risk of error.*

### 2.4 Commission calculation is informal
No written policy exists. Amounts are estimated from memory and informal notes.

*Impact: disputes among staff. Risk of calculation errors. Perceived unfairness.*

### 2.5 Commission on returned items is not recovered
Commission is paid at the moment of sale. When an item is returned, the payment has already been made and is not reclaimed.

*Impact: the shop absorbs commission cost on returned items.*

### 2.6 Reports require manual compilation
Questions about sales, staff performance, inventory position, and cash position require pulling data from several sources and assembling it by hand.

*Impact: reports are slow, often out of date, and frequently disagree across sources.*

### 2.7 Staff must navigate multiple disconnected tools
Completing a single sale touches the website, spreadsheets, the card terminal, and later Xero.

*Impact: training overhead. Steps get skipped. New staff take longer to onboard.*

---

## 3. Required Capabilities

Any candidate system must demonstrate each of the following.

### 3.1 Single source of truth for inventory
Adding an item creates it in one place. The same record drives the public website, the in-store point of sale, and reporting. A sale automatically updates inventory and website status.

**Evaluation:** Add a test item. Confirm it appears on the website within seconds. Ring up a test sale. Confirm the item is removed from the website automatically, without any manual step.

### 3.2 Fast item creation by non-technical staff
A staff member can list a new item (photos, title, description, price, category, tags, status) in under five minutes without developer assistance.

**Evaluation:** Time a non-technical staff member listing a new item from start to finish using only standard instructions.

### 3.3 In-store point of sale with staff attribution
Staff ring up sales on a tablet or equivalent device. Each sale is tagged with the staff member who processed it. Payment method is recorded. Inventory decrements immediately.

**Evaluation:** Complete a full test sale under the identity of each staff member. Confirm attribution is correctly captured.

### 3.4 Returns processing
Sales can be partially or fully reversed. Inventory is restored to available status. The return is recorded against the original salesperson and the original sale date.

**Evaluation:** Process a test return on a completed sale. Confirm that subsequent reports reflect the return against the correct salesperson.

### 3.5 Commission reporting with returns handling
The system produces a report of net sales (gross sales minus returns) by staff member for any selectable date range. Data is exportable to Sage Payroll or comparable payroll software.

**Evaluation:** Run the report for a test period that includes both sales and returns. Confirm that net figures are correctly calculated per staff member.

### 3.6 Accounting integration with Xero
Daily sales data is posted to Xero automatically, or is available for import without manual data entry. Sales, refunds, and card processing fees are separated into distinct Xero accounts.

**Evaluation:** Complete a test day of transactions. Confirm the data appears in Xero in the correct accounts.

### 3.7 Card payment reconciliation
Card processor deposits into the bank can be matched against the system's sales totals with minimal manual work. Card processing fees are captured as a separate expense, not absorbed into sales revenue. Matching works whether the processor is the current bank terminal, Yoco, or another option.

**Evaluation:** Reconcile a test day's bank deposit against the system's sales total. Confirm fees are visible and correctly categorised.

### 3.8 Real-time reporting
The following reports are available on demand and reflect current data:
- Sales by day, week, month
- Sales by staff member
- Inventory status (available, reserved, sold)
- Cash and card position
- Returns and refunds summary

Reports are exportable to CSV or Excel.

**Evaluation:** Ask to see each report live. Confirm that the data is current, not cached.

### 3.9 Usability for non-technical staff
Routine tasks complete in under a minute. Staff training requires no more than two hours per person. No command-line access, code editing, or developer intervention is required for day-to-day operation.

**Evaluation:** Have a non-technical staff member complete core workflows (list an item, ring up a sale, process a return, run a report) using only a printed reference.

### 3.10 Data portability
Products, sales history, customer records, and reports can be exported in standard formats. A future migration to a different system is technically possible without vendor cooperation being a blocker.

**Evaluation:** Request a full data export in CSV or JSON. Confirm the format is usable by a third party.

### 3.11 Reserved item management with expiration notifications
Customers frequently request to hold an item while deciding whether to purchase. The system must support a formal reservation state that prevents double-selling, and must notify the business when a reservation expires without being converted to a sale.

Specifically, the system must:
- Allow staff to mark an item as reserved against a named customer, with the reservation date and expiration date recorded
- Allow the reservation duration to be set per reservation (for example, one week for one customer, two weeks for another)
- Prevent the item from being purchased by another customer while reserved, and reflect that status clearly on the public website
- Automatically release the item back to available stock when the reservation expires
- Allow conversion of a reservation into a completed sale at any time before expiration
- Automatically notify the owner or a designated staff member when a reservation expires without being converted to a sale

**Evaluation:** Mark a test item as reserved against a test customer with a duration of seven days. Confirm another customer cannot purchase the item through the website. Confirm that the expiration date is displayed on the draft. Simulate the expiration being reached and confirm that the inventory returns to available stock automatically and a notification is sent.

---

## 4. Recommended Commission Policy

This policy is recommended regardless of which system is selected. It resolves the informality and returns issues without requiring any specific software feature beyond those listed in Section 3.

### Policy text

> Commission is calculated at the end of each calendar month on net sales (gross sales minus returns) recorded in that month. The commission report is run on the fifth working day of the following month to allow time for late returns. Commission is paid with the following month's salary. An item sold in one month and returned in the next reduces the following month's net sales.

### Worked example

Themba sells a R6,400 dresser in March. At month-end, his March net sales include the dresser. His March commission at 4% is R256, paid with his April salary.

In early April, the dresser is returned. The return appears in April's sales report as a negative R6,400 against Themba. His April commission is calculated on April's reduced net figure, paid with his May salary. The following month's payout is smaller, with no clawback required from Themba's April cheque.

### Implication for system selection

The candidate system must support all three of the following:
- Record returns against the original salesperson
- Generate monthly net sales reports by staff
- Filter reports by date range, including across month boundaries

Any system that does not meet these three requirements will not support the recommended policy.

---

## 5. Data Migration Considerations

Whichever system is selected, the current operational state must be migrated carefully. The current website is live and handling real transactions, which makes the migration higher-risk than a greenfield launch.

### Data to migrate

| Data type | Current location | Migration effort |
|---|---|---|
| Product listings with photos, descriptions, prices | Current custom website | High |
| Current inventory status | Website and spreadsheets | Medium |
| Customer records (if stored) | Current custom website | Low to medium |
| Historical sales data | Xero (stays) | None |
| Staff records | Sage Payroll (stays) | None |

### Migration risks

**Vendor cooperation.** If the system change requires leaving the current platform, a data export from that platform is required. Without vendor cooperation, product listings must be re-entered manually.

**Live inventory during transition.** If both the old and new systems run in parallel, a sale on one platform must not leave the item available on the other. A documented protocol is required.

**URL redirects and search engine visibility.** Customers and search engines have indexed product pages on the current website. Moving to a new platform requires URL redirects to preserve bookmarks and search rankings.

---

## 6. Recommended Technology Options

This section identifies commercial systems that meet the capabilities in Section 3. They are included as concrete reference points for cost, feature set, and implementation timeline, and as one valid option among those to be evaluated.

### Recommended stack

| Layer | Product | Monthly cost | Role |
|---|---|---|---|
| Operations platform | Shopify with Shopify POS (Basic plan) | R720 | Catalogue, in-store POS, website, staff attribution |
| In-store card processing | Yoco | R49 + 2.5-2.7% + VAT per transaction | Card payments at the till |
| Online card processing | Yoco gateway inside Shopify | Included | Card payments on the website |
| Accounting | Xero (existing) | R600 | Accounting, bank reconciliation, VAT |
| Payroll | Sage Business Cloud Payroll (existing) | R200 to R400 | Payroll, PAYE, UIF, commission payouts |
| **Total monthly software** | | **R1,570 to R1,770** | Excludes card processing fees |

### About each component

**Shopify with Shopify POS.** A retail and e-commerce platform used by several million businesses globally. The Basic plan includes unlimited product listings, POS Lite for in-store sales on iPad or Android tablet, a public storefront, and a direct connector to Xero. Data is exportable to CSV at any time. Local support and training resources are available in South Africa.

Note on in-store card payments: Shopify's native card processor is not available in South Africa. Card payments are processed through a third-party terminal such as Yoco or the existing bank machine. The staff member rings up the sale in Shopify, takes payment on the separate terminal, then marks the sale paid in Shopify. This adds approximately ten seconds per in-store transaction.

**Yoco.** South African card processor with no monthly rental (R49 connectivity fee), transaction fees between 2.5 and 2.7 percent depending on volume, and no contract lock-in. Functions as both an in-store card terminal and an online payment gateway inside Shopify. The existing bank card terminal can be retained instead if preferred; both processors work with Shopify in the same way.

**Xero.** Already in use. Receives daily sales summaries from Shopify automatically. A one-time bank rule in Xero splits each Yoco settlement deposit into its sales and card-fee components for fast reconciliation.

**Sage Business Cloud Payroll.** Already in use. Commission amounts are pulled from a monthly Shopify report and entered as variable earning lines in Sage. A short manual journal is posted to Xero after each pay run (approximately five minutes). A move to SimplePay would automate the Xero posting, at the cost of a one-time migration.

### Remote and invoice-based payments

Some sales do not fit the in-store point of sale or website checkout model. Examples:

- A customer places a reserve on an item over the phone and needs to pay a deposit
- A custom or commissioned piece that is not in the public catalogue
- A sale to an interior designer, hotel, or developer requiring a formal tax invoice with credit terms
- A wholesale order tied to a purchase order

Two options are available to handle these.

**Option A: Shopify draft order with payment link.** Staff create a draft order in Shopify, which reserves the item from inventory. Shopify generates an invoice with a payment link that can be emailed to the customer. The customer clicks the link and pays through Shopify's checkout via Yoco. Inventory, staff attribution, and reporting remain accurate.

*Best for: any sale involving a physical item already listed in the Shopify catalogue.*

**Option B: Xero invoice with Stripe payment link.** Staff create an invoice in Xero and enable the "Pay Now" button, which is powered by Stripe. The customer clicks the link and pays by credit card, debit card, Apple Pay, Google Pay, or bank transfer. The payment is automatically recorded against the Xero invoice and reconciled to the bank deposit with no manual work. As of late 2025, Paystack is also available through the Stripe connector for lower-fee card processing in South Africa.

*Best for: custom orders, services, deposits on reservations, and business-to-business sales that do not touch the retail catalogue.*

**Summary.** Shopify's draft order flow keeps physical inventory in sync and is the preferred path for any sale of a catalogued item. Xero's Stripe-powered invoice payments are the preferred path for custom orders, services, and business-to-business work. Both can run in parallel without conflict.

### Reserved items

Reservations are handled in Shopify using draft orders with a per-reservation expiration date, combined with Shopify Flow (a free automation tool available on all Shopify plans since 2023).

When a customer asks to reserve an item, a staff member creates a draft order in Shopify listing the item and the customer's details, enables the "Reserve Items" option, and selects the expiration date and time for that specific reservation. Shopify offers preset durations (for example, 24 hours or 3 days) or a custom date and time chosen per reservation. For a customer returning in a week, the expiration would be set to seven days from today.

The reservation marks the inventory as unavailable, which prevents any other customer from purchasing the item. On the public website, the item is displayed as sold out. If the shop prefers to hide reserved items from the storefront entirely, the product can additionally be unpublished from the sales channel while the draft order is active.

Three outcomes can follow:

- **The customer returns and pays.** The draft order is converted to a paid order in a single step. Inventory, staff attribution, and the flow of sales data into Xero are handled as for any other sale.
- **The customer pays remotely.** Shopify can email the customer an invoice with a payment link at any time. When payment is received, the draft converts to a paid order automatically.
- **The reservation expires without action.** Shopify automatically releases the inventory back to available stock on the expiration date. The item reappears on the public website as available. The draft order remains in the system as a record for follow-up.

Expiration notifications are configured once in Shopify Flow using a scheduled workflow. The workflow runs daily, retrieves any draft orders whose reservation expiration date has just passed, and sends an internal email to designated staff listing the expired reservations. This uses Flow's built-in scheduled trigger, "Get draft order data" action, and "Send internal email" action. No custom development is required.

For simpler needs, the Shopify admin displays each draft order's reservation expiration in the orders list, making a manual review a straightforward alternative.

---

## 7. Next Steps

1. Review this document and confirm that the issues in Section 2 and the required capabilities in Section 3 are complete and accurate.
2. Agree on the commission policy in Section 4 so it can be put in place regardless of which operations platform is used.
3. Assess candidate systems against the capabilities in Section 3, including the recommended stack in Section 6 and any alternative under consideration.
4. Agree on the payment processor (current bank terminal or an alternative such as Yoco).
5. Agree on the payroll system (retain Sage or consider an alternative such as SimplePay).
6. If an operations platform change is required, plan the migration using Section 5 as the starting point.
