import test, { expect } from "@playwright/test";

// test layout for desktop
test.describe("Desktop layout", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:4321/");
	});

	test("Compare layout", async ({ page }) => {
		expect(await page.screenshot()).toMatchSnapshot("layout-desktop.png");
	});
});
