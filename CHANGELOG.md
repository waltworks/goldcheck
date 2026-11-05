# GoldCheck — Changelog

All notable changes to GoldCheck will be documented here.


## [0.5.0] — Ready for Release

### Added
- Buy and Sell calculator modes with separately saved inputs.
- Collection tracking for gold purchases and sales.
- Purchase and sale confirmation screens.
- Saved purchase prices, dates, gold fineness, weight, currency, and historical spot prices.
- Sell calculations using existing Collection records.
- Gain/loss comparisons against original purchase prices.
- Collection filters: All, Owned, Sold, and Trash.
- Edit, restore, and permanently delete Collection records.
- Custom item categories.
- JSON backup export, import preview, and restore confirmation.
- Light, dark, and system appearance settings.
- Adjustable text sizes and date display formats.
- Grams and troy ounces as selectable weight units.
- Auto-collapse setting for Collection items.
- Confirmation dialogs for destructive actions.

### Changed
- Redesigned calculator with a fixed spot-price header.
- Moved Settings to a dedicated header button.
- Added a fixed bottom navigation for Calculator and Collection.
- Improved Buy and Sell labels and premium descriptions.
- Improved layouts for small screens and landscape orientation.
- Simplified Collection cards with expandable transaction details.
- Organized Settings into collapsible sections.
- Improved PWA offline caching and update handling.

### Fixed
- Corrected Buy and Sell input labels.
- Improved input selection and refresh feedback.
- Fixed several mobile layout and scrolling issues.
- Prevented restored currency preferences from misinterpreting existing calculator prices.
- Preserved Collection records and preferences during offline use.

### Notes
- Collection data is stored locally on the user's device.
- Backup restoration replaces existing Collection data and preferences.
- Live gold prices and currency updates require internet access.
- Gold values and premiums are estimates.


## [0.4.0] — Current

### Added
- Progressive Web App (PWA) configuration.
- App icons and home-screen installation support.
- Service worker for offline application access.
- GitHub Pages hosting.
- Refresh button feedback: updating, success, and failure states.
- Green success and red failure indicators.

### Changed
- Gold spot price displayed with two decimal places.
- Improved refresh feedback with minimum animation duration.

## [0.3.0]

### Added
- Multiple currencies, including SAR, USD, and PHP.
- Automatic exchange-rate retrieval.
- Independent saved inputs for Jewelry and Bullion.
- Local storage for user preferences and calculator inputs.

### Changed
- Moved Jewelry/Bullion tabs directly above item details.

## [0.2.0]

### Added
- Live gold price retrieval using Gold-API.
- Manual gold price refresh.
- Automatic price refresh when opening the calculator.
- Saved last successful gold quote.
- Gold quote timestamps.

## [0.1.0]

### Added
- Initial gold premium calculator.
- Jewelry and Bullion modes.
- Manual spot price input.
- Selling price, weight, and fineness inputs.
- Estimated gold content value.
- Premium amount and percentage calculations.

---

**Current deployed version:** 0.4.x

**Website:** https://waltworks.github.io/goldcheck/