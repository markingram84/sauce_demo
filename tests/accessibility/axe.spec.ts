import { test, expect } from "../../pageObjects/fixtures/pageFixtures";
import { createHtmlReport } from "axe-html-reporter";
import AxeBuilder from "@axe-core/playwright";

test.describe.configure({ retries: 0 });
const pagesToTest = [
    "https://www.saucedemo.com",
    // Add more pages here as needed
];
pagesToTest.forEach((url) => {
    test(`Accessibility scan for ${url}`, async ({ page }) => {
        await page.goto(url);
        const accessibilityScanResults = await new AxeBuilder({ page })
            .exclude("")
            .withTags(["wcag2a", "wcag2aa", "wcag2aaa", "wcag21a", "wcag21aa", "wcag21aaa"])
            .analyze();

        createHtmlReport({
            results: accessibilityScanResults,
            options: {
                outputDir: "./results/axe-reports",
                reportFileName: `accessibility-report-${url.replace(/https?:\/\//, "").replace(/\//g, "_")}.html`,
            },
        });
        expect(accessibilityScanResults.violations).toEqual([]);
    }
    );
});
