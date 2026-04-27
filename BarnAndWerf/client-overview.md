# Barn & Werf — Client Overview

*Internal reference document. Captures background, context, and ongoing project state. Updated April 2026.*

---

## 1. Basic Information

| Field | Value |
|---|---|
| Client name | Barn & Werf |
| Business type | Antique shop and interiors retailer |
| Location | Paarl, South Africa (Franschhoek Valley, outside Cape Town) |
| Website | https://www.barnandwerf.co.za/ |
| Years in operation | 8 years (as of 2026) |
| Currency | ZAR |
| VAT | Registered, 15% |
| Vertical | Interiors, antiques, furniture |

---

## 2. Business Overview

Barn & Werf is a curated antique and interiors shop serving the Cape Winelands region. The business mixes sourced antiques with bespoke furniture, lighting, carpets, artworks, and glassware.

### Product mix
- Sourced antique furniture and decor
- Bespoke furniture made from reclaimed Oregon wood (tables, cupboards, benches)
- Lighting, carpets, artworks, glassware
- Stocked artist and brand collaborations:
  - Michael Chandler (ceramics and decorative pieces)
  - Evolution (cushion covers and printed linen wall panels)
  - Jenny Parsons (Cape Fynbos artwork)
  - Johann Slee (original paintings)
- Made-to-order items
- Fabric section planned (upcoming)

### Customer base
Retail walk-ins plus B2B placements including hotels, wine farms, and property developments in the region.

### Operating model
The shop owns all inventory. Items are purchased by the business and resold. This is **not a consignment model** — sellers are shop staff earning commission on their personal sales, not third-party consignors.

---

## 3. People

### Owner
Jessica's aunt. Owns the business outright. Decision-maker on all operational and technology changes. Generous by disposition, particularly around supporting the developer currently building the custom website platform.

### Staff
- **Employee A.** Uses spreadsheets for tracking. Non-technical, prefers existing workflows. Veteran with significant institutional knowledge. Resistance to new tools expected.
- **Employee B.** External developer currently building a multi-tenant SaaS platform for antique/interior shops. Barn & Werf is one of his reference customers (see Section 6 for detail).
- Additional sales staff on the floor (not individually profiled yet).

### Jessica's role
Consultant/family advisor. Has standing to have direct conversations the aunt would find harder to receive from an outside vendor. Responsible for evaluating options and making recommendations.

---

## 4. Current Technology Stack

| System | Purpose | Notes |
|---|---|---|
| Custom website | Public catalogue, e-commerce | Built on a third-party SaaS platform. Barn & Werf is tenant "orgId 5" on that platform. |
| Spreadsheets | Inventory and informal commission tracking | Maintained manually |
| Xero (SA) | Accounting | Existing subscription, Growing plan |
| Sage Business Cloud Payroll | Payroll, PAYE, UIF, SDL | Existing |
| Standalone bank card terminal | In-store card payments | Not integrated with any other system |

### Custom website technical profile
- Next.js 15 frontend deployed on Vercel
- Tailwind CSS with shadcn/ui components
- Multi-tenant backend with JWT-based auth
- Images hosted on Amazon S3 (`merchant-site-pictures-development.s3.eu-west-2.amazonaws.com`)
- Tenant-scoped config including features like WhatsApp image search, shop-by-category toggles
- US toll-free contact number (1-844-559-3003) listed on the site, suggesting US-based platform operator

---

## 5. Operational Pain Points

Seven issues have been identified from conversations with the owner and observation of current operations.

1. **Inventory drift.** Physical stock, website catalogue, and spreadsheets do not stay in sync.
2. **Manual website updates per sale.** Staff must remember to remove sold items from the website.
3. **Card payment reconciliation is manual.** Bank deposits from the card terminal arrive as lumps net of fees, difficult to match against individual sales.
4. **Commission calculation is informal.** No written policy. Amounts estimated from memory. Disputes among staff.
5. **Commission on returns is not recovered.** Paid at sale, not reclaimed when items are returned.
6. **Reports require manual compilation** from disconnected sources.
7. **Multiple systems per sale.** Staff touch website, spreadsheets, card terminal, and later Xero for each transaction.

---

## 6. The Developer Situation

Context that materially shapes the engagement and is worth keeping explicit.

- The current custom website was built by an external developer.
- He is building a **multi-tenant SaaS platform** and using Barn & Werf as a proof-of-concept reference customer.
- Barn & Werf is org ID 5 on the platform, implying at least four other tenants exist.
- The owner (Jessica's aunt) is supporting him generously as his showcase client. She is effectively subsidising his startup by accepting operational pain in exchange for his product development.
- The developer claims his system can do everything Barn & Werf needs.
- Platform has some distinctive features (WhatsApp image search, org-scoped config, S3 image hosting) that are legitimately worth something.
- The developer has not been positioned as adversarial. The business goal is to get Barn & Werf onto a system that works, while preserving a respectful relationship with him.

### Strategy for the developer conversation

The current working document (`proposed-system.md`) is intentionally **solution-neutral**. It lists required capabilities the developer's platform can be evaluated against, alongside any alternative. The approach is to let the evaluation speak for itself rather than position one system over another.

---

## 7. Previous Payment Processing Attempt

Barn & Werf tried Yoco in the past and abandoned it. The stated reason was reconciliation difficulty: items priced at, for example, R12 were deposited net of fees as R11.75, and staff had no way to match individual deposits to individual sales.

Root cause analysis (from conversations): the Yoco terminal was used standalone, without an integrated POS system capturing sale details. Without a POS as a source of truth, every bank deposit was a mystery lump.

This is a fixable problem in a properly integrated setup (POS records sales, POS-to-Xero summary matches Yoco daily settlement via a Xero bank rule). It is not a reason to avoid Yoco specifically.

---

## 8. Project Goals

1. Consolidate catalogue, POS, and website into a single source of truth
2. Eliminate manual website updates and inventory drift
3. Automate daily card payment reconciliation
4. Formalise commission calculation with a written policy
5. Solve the commission-on-returns problem
6. Provide on-demand reporting on sales, inventory, staff performance, cash position
7. Deliver a system that non-technical staff can use confidently

---

## 9. Current Working Approach

The main working document is `proposed-system.md` (neutral requirements document). The recommended reference stack documented there:

| Layer | Product |
|---|---|
| Operations platform | Shopify with Shopify POS (Basic plan, ~R720/month) |
| Card processing | Yoco (R49 connectivity + 2.5-2.7% per transaction) |
| Accounting | Xero (existing) |
| Payroll | Sage Business Cloud Payroll (existing) or SimplePay |
| Commission | Written policy paying monthly in arrears on net sales |

### Recommended commission policy (draft)
Commission is calculated at the end of each calendar month on net sales (gross minus returns) recorded in that month. The report is run on the fifth working day of the following month. Commission is paid with the following month's salary. An item sold in one month and returned in the next reduces the following month's net sales.

### Remote payment scenarios
- Shopify draft orders with payment link for physical items needing remote payment
- Xero invoicing with Stripe "Pay Now" for custom orders, deposits, and B2B sales

---

## 10. Open Decisions

| Decision | Status |
|---|---|
| Operations platform: current custom, Shopify, or other | Pending evaluation meeting with current developer |
| Payment processor: retain current bank terminal or switch to Yoco | Financial comparison needed against bank's effective rate |
| Payroll: retain Sage or move to SimplePay | Leaning keep Sage unless migration benefit clear |
| Transition plan for current website | Depends on operations platform decision |
| Conversation approach with developer | Owner's decision, not yet scheduled |

---

## 11. Relationship Dynamics and Sensitive Context

Important context for future conversations.

- The project sits at the intersection of family, friendship, and business. The aunt owns the shop but is also personally invested in supporting the developer.
- Any recommendation that involves moving off the custom platform will be received through the lens of "am I letting him down?" as well as "is this right for the business."
- The current "proof of concept" arrangement may be free or below-cost. Once it ends, the developer may need to charge market rates, which changes the economics.
- The aunt has not been shown the quantified cost of the current patchwork (hours per week lost to manual reconciliation, commission disputes, etc.). Surfacing these as real numbers is likely to shift her perspective more than feature comparisons will.
- Employee A's attachment to spreadsheets is habit and fear, not ideology. Absorb the spreadsheet as a personal tool rather than eliminating it.

---

## 12. Key Facts to Remember

- Antique shop, not consignment. Shop owns the stock. Staff earn commission on personal sales.
- Non-technical staff. User-friendliness is a hard requirement, not a preference.
- Already pays for Xero and Sage Payroll. Do not recommend replacing these without clear benefit.
- Card processor is currently a standalone bank terminal. Yoco was previously tried and abandoned for reasons that are addressable.
- Current website is not owned by Barn & Werf. It is rented from a third-party developer's multi-tenant platform.
- Data migration is complex because the current website is live and inventory is flowing through it in real time.
- The developer's platform has real features (WhatsApp image search) that any replacement would need to acknowledge or substitute for.

---

## 13. Reference Links and Files

| Resource | Location |
|---|---|
| Barn & Werf website | https://www.barnandwerf.co.za/ |
| Catalogue page | https://www.barnandwerf.co.za/catalogue |
| Proposed system document | `./proposed-system.md` |
| This overview | `./client-overview.md` |

---

## 14. Change Log

| Date | Change |
|---|---|
| April 2026 | Initial version |
