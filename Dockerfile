# 使用官方Nginx镜像作为基础镜像
FROM nginx:alpine

# 将本地文件复制到Nginx的默认静态文件目录
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
