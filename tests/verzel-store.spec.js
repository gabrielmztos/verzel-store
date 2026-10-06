import { test, expect } from '@playwright/test';

test('CT-001 - aplicar cupom válido', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
  await expect(page).toHaveTitle(/Verzel/);
  await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
  await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('BEMVINDO10');
  await page.getByRole('button', { name: 'Aplicar cupom' }).click();
  await expect(page.getByText('Desconto (BEMVINDO10)- R$')).toContainText('5,99');
  await expect(page.getByText('R$ 73,81')).toBeVisible();

});

test('CT-004 - aplicar cupom inexistente', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
  await expect(page).toHaveTitle(/Verzel/);
  await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
  await page.getByRole('textbox', { name: 'Cupom de desconto' }).fill('CUPOMINVALIDO');
  await page.getByRole('button', { name: 'Aplicar cupom' }).click();

  await expect(page.getByText('Cupom inválido.')).toBeVisible();
});

test('CT-008 - frete abaixo de R$200', async ({ page }) => {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev');
  await expect(page).toHaveTitle(/Verzel/);
  await page.getByRole('article', { name: 'Tênis Casual Urbano' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Carrinho 1 itens no carrinho' }).click();
  await expect (page.getByText('R$ 19,90')).toBeVisible();
});