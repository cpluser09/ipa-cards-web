#!/bin/bash

# 项目名称
PROJECT_NAME="ipa-cards-web"

# 检查 Docker 是否可用
check_docker() {
    if ! command -v "docker" &> /dev/null
    then
        echo "错误：Docker 命令未找到，请先安装 Docker"
        echo "提示：Docker 命令路径需要添加到系统 PATH 中，例如："
        echo "export PATH=\"/Applications/Docker.app/Contents/Resources/bin:$PATH\""
        echo "可以将此命令添加到 ~/.zshrc 或 ~/.bashrc 文件中"
        return 1
    fi
    
    # 检查 Docker 守护进程是否响应
    if ! docker info &> /dev/null
    then
        echo "错误：Docker 守护进程未响应，请检查 Docker 应用程序是否正常运行"
        return 1
    fi
}

# 启动服务
start() {
    echo "正在启动$PROJECT_NAME服务..."
    
    # 检查 Docker 是否可用
    if ! check_docker
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
    if ! check_docker
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
    if ! check_docker
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

# 更新服务（重新构建镜像并重启容器）
update() {
    echo "正在更新ipa-cards-web服务..."
    
    # 检查 Docker 是否可用
    if ! check_docker
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
    
    # 停止当前服务
    stop
    
    # 重新构建并启动服务
    if $COMPOSE_CMD up -d --build
    then
        echo "$PROJECT_NAME服务已成功更新！"
        echo "访问地址：http://localhost:8080"
    else
        echo "错误：更新$PROJECT_NAME服务失败"
        return 1
    fi
}

# 帮助信息
help() {
    echo "使用说明："
    echo "  $0 start    - 启动服务"
    echo "  $0 stop     - 停止服务"
    echo "  $0 status   - 查询服务状态"
    echo "  $0 help     - 显示帮助信息"
    echo "  $0 update   - 更新服务（重新构建镜像并重启容器）"
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
        update)
            update
            ;;
        *)
            help
            return 1
            ;;
    esac
}

# 调用主函数
main "$1"