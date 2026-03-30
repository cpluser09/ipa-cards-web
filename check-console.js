// 这是一个简单的测试脚本来检查页面上的控制台输出
// 注意：这需要使用 Puppeteer 或其他浏览器自动化工具

const puppeteer = require('puppeteer');

async function checkPage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // 监听控制台输出
    page.on('console', msg => console.log('Page console:', msg.text()));
    
    await page.goto('http://localhost:8080');
    
    // 截图
    await page.screenshot({ path: 'page-screenshot.png' });
    
    // 测试收藏按钮
    await page.click('#favoriteBtn');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 测试播放按钮
    await page.click('#seqBtn');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // 测试暂停按钮
    await page.click('#pauseBtn');
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await browser.close();
}

checkPage();
