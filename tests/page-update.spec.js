const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('http://localhost:8080');
    
    // 等待页面加载完成
    await page.waitForSelector('.phonetic-symbol');
    
    // 检查页面是否使用了 Apple HIG 设计
    console.log('检查页面是否使用了 Apple HIG 设计...');
    
    // 检查字体
    const body = await page.$('body');
    const fontFamily = await body.evaluate(el => getComputedStyle(el).fontFamily);
    console.log('字体：', fontFamily);
    const hasAppleFont = fontFamily.includes('-apple-system');
    
    // 检查颜色
    const card = await page.$('.card');
    const cardBackgroundColor = await card.evaluate(el => getComputedStyle(el).backgroundColor);
    console.log('卡片背景色：', cardBackgroundColor);
    
    // 检查圆角
    const cardBorderRadius = await card.evaluate(el => getComputedStyle(el).borderRadius);
    console.log('卡片圆角：', cardBorderRadius);
    
    // 检查索引按钮布局
    console.log('\n检查索引按钮布局...');
    const indexSection = await page.$('.index-section');
    const gridTemplateColumns = await indexSection.evaluate(el => getComputedStyle(el).gridTemplateColumns);
    console.log('索引按钮布局：', gridTemplateColumns);
    
    // 检查iPad尺寸的布局
    console.log('\n检查iPad尺寸的布局...');
    const ipadContext = await browser.newContext({
        viewport: { width: 768, height: 1024 },
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
    });
    const ipadPage = await ipadContext.newPage();
    await ipadPage.goto('http://localhost:8080');
    
    // 等待页面加载完成
    await ipadPage.waitForSelector('.index-section');
    
    const ipadIndexSection = await ipadPage.$('.index-section');
    const ipadGridTemplateColumns = await ipadIndexSection.evaluate(el => getComputedStyle(el).gridTemplateColumns);
    console.log('iPad尺寸的索引按钮布局：', ipadGridTemplateColumns);
    
    // 验证布局是否符合要求
    const columns = ipadGridTemplateColumns.split(' ').length;
    console.log('iPad尺寸的索引按钮列数：', columns);
    
    // 关闭浏览器
    await browser.close();
    
    // 总结检查结果
    console.log('\n=== 页面更新检查总结 ===');
    console.log(`• 使用 Apple 字体：${hasAppleFont}`);
    console.log(`• 卡片背景色：${cardBackgroundColor}`);
    console.log(`• 卡片圆角：${cardBorderRadius}`);
    console.log(`• iPad尺寸的索引按钮列数：${columns}`);
    
    if (hasAppleFont && cardBackgroundColor === 'rgb(255, 255, 255)' && parseInt(cardBorderRadius) > 0 && columns === 12) {
        console.log('\n✅ 页面已成功更新为 Apple HIG 设计风格，并正确适配了 iPad 布局');
    } else {
        console.log('\n❌ 页面更新未成功，请检查代码修改');
    }
})();