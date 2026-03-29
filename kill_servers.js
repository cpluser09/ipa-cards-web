const http = require('http');

// 尝试连接到端口并发送请求以获取进程信息
function checkPort(port, callback) {
    const req = http.request({
        hostname: 'localhost',
        port: port,
        path: '/',
        method: 'GET'
    }, (res) => {
        console.log(`Port ${port} is open`);
        callback(null, true);
    });

    req.on('error', (err) => {
        console.log(`Port ${port} is closed:`, err.message);
        callback(null, false);
    });

    req.end();
}

// 尝试使用命令行工具查找和杀死进程
function killProcesses() {
    const { exec } = require('child_process');
    
    // 查找并杀死可能的服务器进程
    exec('pkill -f "python3 -m http.server"', (error, stdout, stderr) => {
        if (error) {
            console.log('Error killing Python HTTP server:', error.message);
        } else {
            console.log('Python HTTP server killed');
        }
        
        // 查找并杀死其他可能的服务器进程
        exec('pkill -f "node.*http-server"', (error, stdout, stderr) => {
            if (error) {
                console.log('Error killing Node HTTP server:', error.message);
            } else {
                console.log('Node HTTP server killed');
            }
            
            // 等待一段时间后检查端口
            setTimeout(() => {
                checkPort(8080, () => {
                    checkPort(8081, () => {
                        console.log('All servers should be killed');
                    });
                });
            }, 2000);
        });
    });
}

// 主函数
function main() {
    console.log('Checking and killing active servers...');
    killProcesses();
}

main();