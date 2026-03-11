---
sidebar_position: 2
id: manual-products
title: Adding Products Without a Barcode
sidebar_label: Manual Product Entry
---

# Adding Products Without a Barcode

Kung walang barcode scanner o kaya’y hindi naka-print ang barcode ng produkto, puwede mong gamitin ang **Manual-based Product** feature ng Pandan POS. Mag-ge-generate ito ng unique barcode para sa iyo.

<img src="/img/add-product-no-barcode.png" alt="Add product manually" width="300" style={{maxWidth: '100%', height: 'auto'}} />

## Step-by-Step Guide

### 1. Pumunta sa Products Section
- Mula sa dashboard, i-click ang **Products** sa side menu.
- Piliin ang **Add New Product** (o “+” button).

### 2. I-enable ang Manual-based Product
- Hanapin ang toggle switch na **“Enable Manual-based Product”**.
- I-slide ito sa **ON** position (as shown sa image sa itaas).
- Mag-auto-generate ang system ng barcode (halimbawa: `ITEM-3UEHWPLPM`).

### 3. Punan ang Product Details

| Field               | Description                                      | Sample Value                  |
|---------------------|--------------------------------------------------|-------------------------------|
| **Barcode**         | Auto-generated for manual-based product and need to scan barcode for non-manual-based product          | `ITEM-3UEHWPLPM` or `4801234567890`|
| **Product Name**    | Pangalan ng produkto (required)                  | `Rice Cooker`                 |
| **Product Description** | Maikling deskripsyon (optional)               | `1.8L automatic rice cooker`  |
| **Price**           | Presyo ng benta (required)                       | `1299.00`                     |

### 4. I-save o Kanselahin
- I-click ang **Save** button para i-save ang produkto.
- I-click ang **Cancel** kung gusto mong balewalain ang ginawang pagbabago.

---

## Importanteng Paalala

- **Auto‑generated Barcode** – Hindi mo na kailangang mag-isip ng barcode; automatic itong gagawin ng system kapag naka‑ON ang toggle.
- **Puwedeng I‑edit** – Kung gusto mo ng specific na format, i-click lang ang barcode field at i-type ang gusto mong code.
- **Search sa POS** – Kahit walang scanner, mahahanap mo ang produkto sa pamamagitan ng pangalan sa POS screen.

---

## Troubleshooting

| Problema                                      | Solusyon                                                                           |
|-----------------------------------------------|------------------------------------------------------------------------------------|
| Hindi lumalabas ang auto‑generated barcode    | Siguraduhing naka‑ON ang “Enable Manual-based Product”. I‑refresh ang page kung kinakailangan. |
| Hindi maka‑save                               | Tiyaking napunan ang **Product Name** at **Price** (required fields).              |
| Gustong bumalik sa default barcode            | I‑edit ang barcode field at tanggalin ang binago; babalik ito sa auto‑generated value. |

---

## Related Topics

- [Creating an Order](/docs/create-order)
- [Understanding the Dashboard](/docs/dashboard)
- [Managing Products](/docs/manage-products)

---

*Kailangan ng tulong? Mag-email sa jeromevillaruel1998@icloud.com*