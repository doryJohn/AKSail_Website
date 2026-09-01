# AKSail LLC website

Static HTML/CSS site designed for GitHub Pages.

Files:
- index.html — home page
- charters.html — charter offerings
- siren.html — boat page
- alaska.html — destination page
- contact.html — quote request form
- css/style.css — styling
- images/ — supplied photographs

Before publishing:
1. Deploy the WebsiteContact Lambda and API Gateway HTTP API.
2. Replace or refine all draft wording.
3. Add final phone number, location, captain information, pricing, and booking details.
4. Add your domain to GitHub Pages and configure DNS.


## Domain
The intended custom domain is `aksail.com`. A `CNAME` file is included for GitHub Pages.

## Charter detail pages
The home page now links to:
- `day-sailing.html`
- `multi-day.html`
- `custom-adventures.html`

The wording is a first draft and can be revised once the actual charter offerings, dates, guest capacity, pricing and locations are finalized.

## Contact form
The contact form submits to Amazon API Gateway and the WebsiteContact Lambda. After creating the API, replace `YOUR-API-GATEWAY-URL` in `js/contact.js` with the API endpoint. See `WEBSITE_CONTACT_DEPLOYMENT.md`.
