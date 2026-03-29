#!/bin/bash

# 项目名称
PROJECT_NAME="ipa-cards-web"

# 检查命令是否可用
check_command() {
    if ! command -v "$1" &> /dev/null
    then
        echo "错误：命令 '$1' 未找到，请先安装该命令"
        return 1
    fi
}

# 启动服务
start() {
    echo "正在启动$PROJECT_NAME服务..."
    
    # 检查 Docker 是否可用
    if ! check_command "docker"
    then
        return 1
    fi
    
    # 检查 Docker Compose 是否可用（支持两种语法）
    if command -v "docker-compose" &> /dev/null
    then
        COMPOSE_CMD="docker-compose"
    elif docker compose version &> /dev/null
    then
        COMPOSE_CMD="docker compose"
    else
        echo "错误：未找到 docker-compose 或 docker compose 命令"
        return 1
    fi
    
    # 启动服务并检查结果
    if $COMPOSE_CMD up -d
    then
        echo "$PROJECT_NAME服务已成功启动！"
        echo "访问地址：http://localhost:8080"
    else
        echo "错误：启动$PROJECT_NAME服务失败"
        return 1
    fi
}

# 停止服务
stop() {
    echo "正在停止$PROJECT_NAME服务..."
    
    # 检查 Docker 是否可用
    if ! check_command "docker"
    then
        return 1
    fi
    
    # 检查 Docker Compose 是否可用（支持两种语法）
    if command -v "docker-compose" &> /dev/null
    then
        COMPOSE_CMD="docker-compose"
    elif docker compose version &> /dev/null
    then
        COMPOSE_CMD="docker compose"
    else
        echo "错误：未找到 docker-compose 或 docker compose 命令"
        return 1
    fi
    
    # 停止服务并检查结果
    if $COMPOSE_CMD down
    then
        echo "$PROJECT_NAME服务已成功停止！"
    else
        echo "错误：停止$PROJECT_NAME服务失败"
        return 1
    fi
}

# 查询服务状态
status() {
    echo "$PROJECT_NAME服务状态："
    
    # 检查 Docker 是否可用
    if ! check_command "docker"
    then
        return 1
    fi
    
    # 检查 Docker Compose 是否可用（支持两种语法）
    if command -v "docker-compose" &> /dev/null
    then
        COMPOSE_CMD="docker-compose"
    elif docker compose version &> /dev/null
    then
        COMPOSE_CMD="docker compose"
    else
        echo "错误：未找到 docker-compose 或 docker compose 命令"
        return 1
    fi
    
    $COMPOSE_CMD ps
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
        help)
            help
            ;;
        *)
            help
            return 1
            ;;
    esac
}

# 调用主函数
main "$1"
