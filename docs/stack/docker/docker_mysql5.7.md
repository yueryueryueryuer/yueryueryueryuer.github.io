# Docker 安装 MySQL 5.7

1. 查找 Docker Hub 上的 mysql 镜像

```bash
docker search mysql
```

2. 这里我们拉取官方的镜像，标签为 5.7

```bash
docker pull mysql:5.7
```

3. 运行容器

```bash
docker run --restart=always -p 3306:3306 --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/mysql_data -e MYSQL_ROOT_PASSWORD=OL6qYPfp1P -d mysql:5.7
```

- `-p 3306:3306`：将容器的 3306 端口映射到主机的 3306 端口
- `-v $PWD/conf:/etc/mysql/conf.d`：将主机当前目录下的 conf/my.cnf 挂载到容器的/etc/mysql/my.cnf
- `-v $PWD/logs:/logs`：将主机当前目录下的 logs 目录挂载到容器的/logs
- `-v $PWD/data:/mysql_data`：将主机当前目录下的 data 目录挂载到容器的 /mysql_data
- `-e MYSQL_ROOT_PASSWORD=OL6qYPfp1P`：初始化 root 用户的密码例

```bash
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=OL6qYPfp1P -d mysql:5.7
```
