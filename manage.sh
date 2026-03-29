#!/bin/bash

# 项目名称
PROJECT_NAME="ipa-cards-web"

# 启动服务
start() {
    echo "正在启动$PROJECT_NAME服务..."
    docker-compose up -d
    echo "$PROJECT_NAME服务已成功启动！"
    echo "访问地址：http://localhost:8080"
}

# 停止服务
stop() {
    echo "正在停止$PROJECT_NAME服务..."
    docker-compose down
    echo "$PROJECT_NAME服务已成功停止！"
}

# 查询服务状态
status() {
    echo "$PROJECT_NAME服务状态："
    docker-compose ps
}

# 帮助信息
help() {
    echo "使用说明："
    echo "  ./manage.sh start    - 启动服务"
    echo "  ./manage.sh stop     - 停止服务"
    echo "  ./manage.sh status   - 查询服务状态"
    echo "  ./manage.sh help     - 显示帮助信息"
}

# 主函数
main() {
    case "$1" in
        start)
            start
            ;;
        stop)
            stop
            ;;
        status)
            status
            ;;
        help|*)
            help
            ;;
    esac
}

# 调用主函数
main "$1"
