import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { services, portalLink } from '../../src/content.js';

test('renders a full-width hero without a background panel and loads its image', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/Ruang Warga/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Lebih dekat,.*lebih terhubung\./);
  await expect(page.locator('.hero__image')).toBeVisible();
  expect(await page.locator('.hero__image').evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);
  expect(await page.locator('.hero__copy').evaluate((element) => getComputedStyle(element).backgroundColor)).toBe('rgba(0, 0, 0, 0)');
  const hero = await page.locator('.hero').boundingBox();
  expect(hero.width).toBe(page.viewportSize().width);
  expect(errors).toEqual([]);
});

test('every Indonesian illustration loads and is announced when meaningful', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('main img, footer img');
  const count = await images.count();
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
    const alt = await image.getAttribute('alt');
    expect(alt, 'setiap gambar ilustrasi wajib memiliki atribut alt').not.toBeNull();
  }
});

test('service cards link to the correct existing portal pages', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.service-card')).toHaveCount(services.length);
  for (const service of services) {
    await expect(page.locator('.service-card').filter({ has: page.getByRole('heading', { name: service.name, exact: true }) })).toHaveAttribute('href', portalLink(service.path));
  }
  await page.route('https://mywarga.vercel.app/**', (route) => route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>Portal Warga</h1>' }));
  await page.locator('.service-card').filter({ has: page.getByRole('heading', { name: 'Surat Pengantar', exact: true }) }).click();
  await expect(page).toHaveURL(portalLink('surat'));
  await expect(page.getByRole('heading', { name: 'Portal Warga' })).toBeVisible();
});

test('mobile menu opens, closes with Escape, and navigates', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: 'Buka menu navigasi' });
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await menuButton.click();
  const menu = page.getByRole('navigation', { name: 'Navigasi seluler' });
  await expect(menu).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tutup menu navigasi' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await page.getByRole('button', { name: 'Buka menu navigasi' }).click();
  await menu.getByRole('link', { name: 'Layanan' }).click();
  await expect(page).toHaveURL(/#layanan$/);
  await expect(menu).toBeHidden();
});

test('help answers can be expanded and collapsed', async ({ page }) => {
  await page.goto('/');
  const question = page.getByText('Bagaimana cara mendapatkan akun warga?', { exact: true });
  const details = question.locator('xpath=ancestor::details');
  await expect(details).not.toHaveAttribute('open', '');
  await question.click();
  await expect(details).toHaveAttribute('open', '');
  await expect(details.getByText(/Akun resmi dibuat oleh pengurus RT/)).toBeVisible();
  await question.click();
  await expect(details).not.toHaveAttribute('open', '');
});

test('layout has no horizontal overflow at common screen widths', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({ content: document.documentElement.scrollWidth, viewport: document.documentElement.clientWidth }));
    expect(dimensions.content, `horizontal overflow at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
  }
});

test('automated accessibility checks pass with the menu and a help answer open', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Buka menu navigasi' }).click();
  await page.locator('details').first().evaluate((element) => { element.open = true; });
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
  expect(results.violations).toEqual([]);
});
