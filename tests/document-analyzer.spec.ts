
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:9002/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/EVIDECIA FLOW/);
});

test('analyze document button is visible', async ({ page }) => {
  await page.goto('http://localhost:9002/');

  // Expect the main call to action button to be visible
  await expect(page.getByRole('button', { name: 'Analyze Document' })).toBeVisible();
});
