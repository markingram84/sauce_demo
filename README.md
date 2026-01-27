# Playwright TypeScript Test Automation Demo

A sample repository demonstrating test automation capabilities using **Playwright** and **TypeScript** against the website [www.saucedemo.com](www.saucedemo.com).

## Overview

This project showcases best practices for end-to-end testing with Playwright, including:
- Cross-browser testing (Chromium, Firefox)
- TypeScript for type-safe test code
- Page Object Model pattern
- Assertion and reporting examples
- GitHub Actions

## Test Types

- Accessibility Tests
- End to end Tests
- Componeent Tests on indicudual pages

## Prerequisites

- Node.js (v14+)
- npm or yarn

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/pages/login.spec.ts
```

## Project Structure

```
├── pageObjects/         # Page Object Models
├── tests/               # Test files
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md
```

## Technologies

- **Playwright** - Cross-browser automation framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
