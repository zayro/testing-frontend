const puppeteer = require("puppeteer");
import expect from "expect-puppeteer";

describe("React Test home", () => {
  test("Test home", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    await expect(page).toMatch("reload", { timeout: 6000 });
    await page.select('select[name="itemSelect"]', "Alaska");
    await expect(page).toSelect('select[name="itemSelect"]', "AL", {
      timeout: 6000,
    });
    await page.type("#cajaTexto", "text pratech");

    await browser.close();
  }, 25000);
});
