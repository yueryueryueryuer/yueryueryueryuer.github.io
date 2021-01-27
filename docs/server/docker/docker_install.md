# Docker 使用

## CentOS Docker 安装

### 使用 yum 安装

1. 移除旧的版本

```bash
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine
```

2. 安装一些必要的系统工具

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

3. 添加软件源信息

```bash
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

4. 更新 yum 缓存

```bash
sudo yum makecache fast
```

5. 安装 Docker-ce

```bash
sudo yum -y install docker-ce
```

6. 启动 Docker 后台服务

```bash
sudo systemctl start docker
```

7. 测试运行 hello-world

```bash
docker run hello-world
```

### 使用脚本安装 Docker

1. 使用 sudo 或 root 权限登录 Centos。

2. 确保 yum 包更新到最新。

```bash
sudo yum update
```

3. 执行 Docker 安装脚本

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

4. 启动 Docker 进程

```bash
sudo systemctl start docker
```

5. 验证 docker 是否安装成功并在容器中执行一个测试的镜像

```bash
sudo docker run hello-world
docker ps
```

### 镜像加速

- Linux：`/etc/docker/daemon.json`
- Windows：`%programdata%\docker\config\daemon.json`

```bash
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
```

### 删除 Docker CE

```bash
sudo yum remove docker-ce
sudo rm -rf /var/lib/docker
```
