# Hotel Recommendation System - Playwright Automation Framework

## Project Overview

This project contains an automation testing framework developed using Playwright for the Hotel Recommendation System assignment. The framework follows the Page Object Model (POM) design pattern to ensure maintainability, reusability, and scalability.

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Project Structure

```
.
├── config/
├── fixtures/
├── pages/
├── test-data/
├── tests/
├── utils/
├── playwright.config.js
├── package.json
└── README.md
```

## Prerequisites

- Node.js (v18 or above)
- npm

## Installation

```bash
npm install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/<test-file>.spec.js
```

Generate HTML Report:

```bash
npx playwright show-report
```

## Framework Highlights

- Page Object Model (POM)
- Reusable page classes
- Test data separation
- Playwright HTML Reports
- Easy maintenance and scalability

## Known Limitation

The target application is protected by CAPTCHA ("I'm not a robot"), which prevents complete end-to-end browser automation. This is an application-level security restriction rather than a framework limitation.

The issue was communicated to the hiring team before the submission deadline. The automation framework has been implemented to the maximum extent possible under this limitation.

---

**Author:** Richa Laxkar