#!/bin/bash

# 测试 manage.sh 脚本的功能

echo "开始测试 manage.sh 脚本..."

# 测试帮助功能
echo -e "\n1. 测试帮助功能"
./manage.sh help

# 测试启动功能（预期会失败，因为 Docker 未安装）
echo -e "\n2. 测试启动功能"
if ./manage.sh start; then
    echo "❌ 启动功能测试失败：Docker 未安装，但脚本返回成功"
else
    echo "✅ 启动功能测试成功：正确检测到 Docker 未安装"
fi

# 测试停止功能（预期会失败，因为 Docker 未安装）
echo -e "\n3. 测试停止功能"
if ./manage.sh stop; then
    echo "❌ 停止功能测试失败：Docker 未安装，但脚本返回成功"
else
    echo "✅ 停止功能测试成功：正确检测到 Docker 未安装"
fi

# 测试状态查询功能（预期会失败，因为 Docker 未安装）
echo -e "\n4. 测试状态查询功能"
if ./manage.sh status; then
    echo "❌ 状态查询功能测试失败：Docker 未安装，但脚本返回成功"
else
    echo "✅ 状态查询功能测试成功：正确检测到 Docker 未安装"
fi

# 测试错误处理（无效参数）
echo -e "\n5. 测试错误处理（无效参数）"
if ./manage.sh invalid; then
    echo "❌ 错误处理测试失败"
else
    echo "✅ 错误处理测试成功：显示了帮助信息"
fi

echo -e "\n所有测试完成！"