# Playwright TypeScript Test Automation Demo

A sample repository demonstrating test automation capabilities using **Playwright** and **TypeScript**.

## Overview

This project showcases best practices for end-to-end testing with Playwright, including:
- Cross-browser testing (Chromium, Firefox)
- TypeScript for type-safe test code
- Page Object Model pattern
- Assertion and reporting examples

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
npx playwright test tests/example.spec.ts
```

## Project Structure

```
├── tests/              # Test files
├── playwright.config.ts # Playwright configuration
├── package.json
└── README.md
```

## Technologies

- **Playwright** - Cross-browser automation framework
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## License

MIT