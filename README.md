# TONTON Matcha + Coffee

A dynamic, lightweight web menu for **TONTON Matcha** driven by Google Sheets and Firebase Cloud Storage for editing flexibility.


**Live Site:** [tontonmatcha.com](https://tontonmatcha.com)

TONTON is a matcha and coffee bar with two locations in Downtown Toronto, Ontario (Koreatown, Liberty Village). This website displays the expansive, growing, changing menu and displays reviews from their loyal customer base! 


Designed to match TONTON's in-person menu style and branding. 
## Overview

**tontonmatcha.com** provides an up-to-date visual menu for customers. 
The menu is integrated with simple Google tools like Sheets and Firebase for fast and simple editing.  
The application dynamically fetches menu structure from a Google Sheet and resolves item assets directly from Firebase Storage.

## Features

* **Dynamic Data Sync:** Fetch real-time menu categories, items, and descriptions via [OpenSheet](https://github.com/benborgers/opensheet) without redeploying code.
* **Automated Asset Resolution:** Automatically pairs menu item filenames with hosted image assets in Firebase Storage.
* **Responsive Grid Layout:** Optimized mobile  menu view styled with Tailwind CSS.
* **Easy External Mobile Order:** Front page links to order mobile from both locations.


---

## Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Backend Data:** Google Sheets API (via OpenSheet)
* **Cloud Storage:** Firebase Storage

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** or **yarn** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone (https://github.com/juliayooo/tonton.git)
   cd tonton

2. **Install dependencies and run server:**
   ```bash

   npm install 
   npm run dev 

## Menu Data Structure

The site dynamically parses rows from the connected Google Sheet via OpenSheet. Format your spreadsheet columns using the exact headers below:

| Column Header | Type | Required | Description | Example Values |
| :--- | :--- | :--- | :--- | :--- |
| **`item`** | `string` | **Yes** | The menu item name or section header. Prefix with `*` for category titles, or set to `/` to skip. | `*`Matcha Latte |
| **`filename`** | `string` | No | Exact filename stored in Firebase Storage (`assets/items_isolated/`). | `matcha-latte.png` |
| **`desc`** | `string` | No | Mostly de-commissioned. | `Iced or Hot` |

---

### Special Formatting Rules

* **Category Headers:** Any text starting with an asterisk (`*`) in the `item` column renders as a full-width section title
* **Dividers / Skipped Rows:** Setting `item` to `/` ignores the row during render.
* **Firebase Images:** If `filename` is provided, the app automatically attempts to resolve and display the image from your Firebase Storage bucket at `assets/items_isolated/{filename}`.

