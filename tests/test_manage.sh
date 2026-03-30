#!/bin/bash

# 测试 manage.sh 脚本的所有命令
# 作者：cpluser09

# 设置 Docker 命令路径
export PATH="/Applications/Docker.app/Contents/Resources/bin:$PATH"

# 项目目录
PROJECT_DIR="/Volumes/disk4_2T_bad/gh/ipa-cards-web"

# 切换到项目目录
cd "$PROJECT_DIR" || { echo "错误：无法进入项目目录"; exit 1; }

# 测试函数
test_command() {
    local command="$1"
    echo -e "\033[1;34m正在测试 $command 命令...\033[0m"
    if ./manage.sh "$command" 2>&1
    then
        echo -e "\033[1;32m$command 命令成功执行\033[0m"
    else
        echo -e "\033[1;31m$command 命令执行失败\033[0m"
    fi
    echo
}

# 主测试函数
main() {
    echo -e "\033[1;33m开始测试 manage.sh 脚本的所有命令\033[0m"
    echo -e "================================================"
    echo

    # 1. 显示帮助信息
    test_command "help"

    # 2. 检查服务状态
    test_command "status"

    # 3. 启动服务
    test_command "start"

    # 4. 检查服务是否正在运行
    echo -e "\033[1;34m检查服务是否正在运行...\033[0m"
    if docker ps | grep -q "ipa-cards-web"
    then
        echo -e "\033[1;32m服务正在运行\033[0m"
    else
        echo -e "\033[1;31m服务未运行\033[0m"
    fi
    echo

    # 5. 测试访问网页
    echo -e "\033[1;34m测试访问网页...\033[0m"
    local http_code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:8085")
    if [ "$http_code" -eq 200 ]
    then
        echo -e "\033[1;32m网页可以正常访问（HTTP 状态码：$http_code）\033[0m"
    else
        echo -e "\033[1;31m网页无法访问（HTTP 状态码：$http_code）\033[0m"
    fi
    echo

    # 6. 停止服务
    # test_command "stop"

    # 7. 再次检查服务状态
    # test_command "status"

    # 总结测试结果
    echo -e "\033[1;33m所有命令测试完成\033[0m"
    echo -e "================================================"
}

# 执行主测试函数
main
