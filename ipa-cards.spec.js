const { test, expect } = require('@playwright/test');

test('Basic functionality test', async ({ page }) => {
  // 访问页面
  await page.goto('http://localhost:8081');
  
  // 检查页面标题
  await expect(page).toHaveTitle('国际音标学习卡片');
  
  // 检查发音卡片是否显示
  const phoneticSymbol = page.locator('#phoneticSymbol');
  await expect(phoneticSymbol).toBeVisible();
  
  // 检查导航按钮
  const prevBtn = page.locator('#prevBtn');
  const nextBtn = page.locator('#nextBtn');
  await expect(prevBtn).toBeVisible();
  await expect(nextBtn).toBeVisible();
  
  // 检查播放按钮
  const seqBtn = page.locator('#seqBtn');
  const randBtn = page.locator('#randBtn');
  const pauseBtn = page.locator('#pauseBtn');
  await expect(seqBtn).toBeVisible();
  await expect(randBtn).toBeVisible();
  await expect(pauseBtn).toBeVisible();
  
  // 检查索引按钮
  const indexButtons = page.locator('.index-btn');
  await expect(indexButtons).toHaveCount(48); // 20个元音 + 28个辅音 = 48个卡片
  
  // 测试下一张卡片功能
  const initialSymbol = await phoneticSymbol.textContent();
  await nextBtn.click();
  await page.waitForTimeout(500);
  const newSymbol = await phoneticSymbol.textContent();
  expect(newSymbol).not.toEqual(initialSymbol);
  
  // 测试索引按钮
  await indexButtons.nth(0).click();
  await page.waitForTimeout(500);
  expect(await phoneticSymbol.textContent()).toEqual(initialSymbol);
});

test('Playback functionality test', async ({ page }) => {
  // 访问页面
  await page.goto('http://localhost:8081');
  
  // 检查页面加载
  const phoneticSymbol = page.locator('#phoneticSymbol');
  await expect(phoneticSymbol).toBeVisible();
  
  // 启动顺序播放
  const seqBtn = page.locator('#seqBtn');
  await seqBtn.click();
  await page.waitForTimeout(4000); // 等待播放切换
  
  // 检查卡片是否发生变化
  const initialSymbol = await phoneticSymbol.textContent();
  await page.waitForTimeout(3500);
  const newSymbol = await phoneticSymbol.textContent();
  expect(newSymbol).not.toEqual(initialSymbol);
  
  // 暂停播放
  const pauseBtn = page.locator('#pauseBtn');
  await pauseBtn.click();
  
  // 启动随机播放
  const randBtn = page.locator('#randBtn');
  await randBtn.click();
  await page.waitForTimeout(3500);
  const randomSymbol = await phoneticSymbol.textContent();
  expect(randomSymbol).not.toEqual(newSymbol);
});