import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:4321/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle("Arcanum");
});

test("check morse code width", async ({ page }) => {
	await page.goto("http://localhost:4321/");

	// Expects page to have a heading with the name of Installation.
	const MorseCodeFooter = page.getByTitle("morse code");
	const device = page.viewportSize();

	if (device === null) throw new Error("Device not found");

	if (device.width > 768) {
		await expect(MorseCodeFooter).toBeVisible();
	} else {
		await expect(MorseCodeFooter).toBeHidden();
	}
});
