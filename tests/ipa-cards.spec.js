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
  expect(await pauseBtn.textContent()).toEqual("播放");
  
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
  
  // 检查暂停按钮文字
  const pauseBtn = page.locator('#pauseBtn');
  expect(await pauseBtn.textContent()).toEqual("播放");
  
  // 测试点击暂停按钮开始播放
  await pauseBtn.click();
  await page.waitForTimeout(4000); // 等待播放切换
  
  // 检查暂停按钮文字是否变化
  expect(await pauseBtn.textContent()).toEqual("暂停");
  
  // 检查播放模式
  const playbackMode = await page.evaluate(() => window.playbackMode);
  expect(playbackMode).toEqual('random');
  
  // 检查卡片是否发生变化
  const initialSymbol = await phoneticSymbol.textContent();
  await page.waitForTimeout(3500);
  const newSymbol = await phoneticSymbol.textContent();
  expect(newSymbol).not.toEqual(initialSymbol);
  
  // 测试点击暂停按钮停止播放
  await pauseBtn.click();
  await page.waitForTimeout(500);
  
  // 检查暂停按钮文字是否变化
  expect(await pauseBtn.textContent()).toEqual("播放");
  
  // 检查播放是否停止
  const isPlaying = await page.evaluate(() => window.playbackInterval !== null);
  expect(isPlaying).toEqual(false);
  
  // 测试顺序播放
  const playModeBtn = page.locator('#playModeBtn');
  await playModeBtn.click();
  await page.waitForTimeout(4000); // 等待播放切换
  
  // 检查播放模式和卡片是否变化
  const firstClickMode = await page.evaluate(() => window.playbackMode);
  expect(firstClickMode).toEqual('sequential');
  
  // 检查卡片是否发生变化
  await page.waitForTimeout(3500);
  const newSymbol2 = await phoneticSymbol.textContent();
  expect(newSymbol2).not.toEqual(initialSymbol);
  
  // 测试顺序播放
  await playModeBtn.click(); // 切换到顺序模式
  await page.waitForTimeout(4000);
  
  // 检查播放模式
  const sequentialMode = await page.evaluate(() => window.playbackMode);
  expect(sequentialMode).toEqual('random');
  
  // 检查卡片是否发生变化
  const currentSymbol = await phoneticSymbol.textContent();
  await page.waitForTimeout(3500);
  const randomSymbol = await phoneticSymbol.textContent();
  expect(randomSymbol).not.toEqual(currentSymbol);
});