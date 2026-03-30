const { test, expect } = require('@playwright/test');

test('Basic functionality test', async ({ page }) => {
  // 访问页面
  await page.goto('http://localhost:8080');
  
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
  const playModeBtn = page.locator('#playModeBtn');
  const pauseBtn = page.locator('#pauseBtn');
  await expect(playModeBtn).toBeVisible();
  await expect(pauseBtn).toBeVisible();
  
  // 检查索引按钮
  const indexButtons = page.locator('.index-btn');
  await expect(indexButtons).toHaveCount(48); // 20个元音 + 28个辅音 = 48个卡片
  
  // 测试下一张卡片功能（使用顺序播放模式）
  await playModeBtn.click();
  await page.waitForTimeout(1000); // 等待播放模式切换
  const initialSymbol = await phoneticSymbol.textContent();
  await nextBtn.click();
  await page.waitForTimeout(500);
  const newSymbol = await phoneticSymbol.textContent();
  expect(newSymbol).not.toEqual(initialSymbol);
  
  // 测试索引按钮
  await indexButtons.nth(0).click();
  await page.waitForTimeout(500);
  expect(await phoneticSymbol.textContent()).toEqual("/i:/");
});

test('Playback functionality test', async ({ page }) => {
  // 访问页面
  await page.goto('http://localhost:8080');
  
  // 检查页面加载
  const phoneticSymbol = page.locator('#phoneticSymbol');
  await expect(phoneticSymbol).toBeVisible();
  
  // 检查初始播放模式
  const initialMode = await page.evaluate(() => window.playbackMode);
  expect(initialMode).toEqual('paused');
  
  // 测试顺序播放
  const playModeBtn = page.locator('#playModeBtn');
  await playModeBtn.click();
  await page.waitForTimeout(4000); // 等待播放切换
  
  // 检查播放模式和卡片是否变化
  const sequentialMode = await page.evaluate(() => window.playbackMode);
  expect(sequentialMode).toEqual('sequential');
  
  // 检查卡片是否发生变化
  const initialSymbol = await phoneticSymbol.textContent();
  await page.waitForTimeout(3500);
  const newSymbol = await phoneticSymbol.textContent();
  expect(newSymbol).not.toEqual(initialSymbol);
  
  // 暂停播放
  const pauseBtn = page.locator('#pauseBtn');
  await pauseBtn.click();
  
  // 测试暂停后的播放模式
  const pausedMode = await page.evaluate(() => window.playbackMode);
  expect(pausedMode).toEqual('sequential'); // 保持原模式
  
  // 测试暂停后按上一张/下一张是否按照顺序模式切换
  const prevBtn = page.locator('#prevBtn');
  await prevBtn.click();
  await page.waitForTimeout(500);
  const prevSymbol = await phoneticSymbol.textContent();
  
  // 再次点击下一张
  const nextBtn = page.locator('#nextBtn');
  await nextBtn.click();
  await page.waitForTimeout(500);
  const nextSymbol = await phoneticSymbol.textContent();
  expect(nextSymbol).not.toEqual(prevSymbol); // 应该返回下一张卡片
  
  // 测试随机播放
  await playModeBtn.click(); // 切换到随机模式
  await page.waitForTimeout(4000);
  
  // 检查播放模式
  const randomMode = await page.evaluate(() => window.playbackMode);
  expect(randomMode).toEqual('random');
  
  // 检查卡片是否发生变化
  const currentSymbol = await phoneticSymbol.textContent();
  await page.waitForTimeout(3500);
  const randomSymbol = await phoneticSymbol.textContent();
  expect(randomSymbol).not.toEqual(currentSymbol);
});