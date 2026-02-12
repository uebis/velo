import { test, expect } from '@playwright/test'

// AAA (Arrange, Act, Assert)

test('deve consultar um pedido aprovado', async ({ page }) => {

  // Arrange
  await page.goto('http://localhost:5173/')

  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-34UAZI')

  await page.getByRole('button', { name: 'Buscar Pedido' }).click()

  // Assert

  // DESAFIO: Sobreviva sem Data Test IDs
  // Optei por usar xPath simulando o cenário em que eu não tenho acesso ao código para adicionar algum id ao parágrafo.
  // Como eu já valido pelo xPath, usando o texto como localizador, não tem a necessidade de usar a validação .toContainText()

  await expect(page.locator('//p[text()="Pedido"]/..//p[text()="VLO-34UAZI"]')).toBeVisible()

  await expect(page.locator('//div[text()="APROVADO"]')).toBeVisible()

})