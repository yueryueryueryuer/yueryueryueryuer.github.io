# Docker 常用命令

1. 查看正在运行的容器

```bash
sudo docker ps
```

2. 查看所有的容器

```bash
sudo docker ps -a
```

3. 查看本地镜像

```bash
sudo docker images
```

4. 从镜像中运行/停止一个新实例

```bash
sudo docker run/stop --help

sudo docker run/stop container
```

5. 避免输出 Sudo

> 这里把当前用户加入到 docker 组就可以直接使用命令，而不用每次都加 sudo

```bash
sudo groupadd docker
```

> 改完后需要重新登陆用户

```bash
sudo gpasswd -a ${USER} docker
```

6. Docker 版本

```bash
sudo docker --version
```

7. 搜索 Docker Image

```bash
docker search tutorial
```

> [docker Hub](https://hub.docker.com/)

8. 通过 docker 命令下载 tutorial 镜像

```bash
docker pull learn/tutorial
```

9. 从指定 image 里生成一个 container 并在其中运行一个命令

```bash
docker run [image] [cmd]
```

10. 在 container 里运行交互式命令，比如 shell

```bash
docker run -i -t [image] [cmd]

docker run -i -t ubuntu /bin/bash
```

11. 在 container 里运行后台任务

```bash
docker run -d [image] [cmd]
```

12. 列出最近一个运行过的 container

> 不加`-l` 则只列出正在运行的 container（比如后台任务）

```bash
docker ps -l
```

13. 列出所有 container

```bash
docker ps -a
```

14. 查看 container 详情

```bash
docker inspect [container]
```

15. 删除某个 container

> 其中 container_id 不需要输入完整，只要能保证唯一即可。
>
> 运行中的 Docker 容器是无法删除的，必须先通过 `docker stop` 或者 `docker kill` 命令停止。

```bash
docker rm [container]

docker rm `docker ps -a -q` 删除所有容器，-q表示只返回容器的ID
```

16. 再次运行某个 container

```bash
docker start [container]
```

17. 查看某个 container 的运行日志

```bash
docker logs [container]

docker logs -f [container] 类似tailf
```

18. 切换到后台任务 container, 需要当前容器正常运行

> 注意：切换到后台任务以后无法用<kbd>Ctrl</kbd>+<kbd>C</kbd> 退出

```bash
docker attach [container]
```

1.  中止后台任务 container

```bash
docker stop [container]
```

20. 将 container 保存为一个 image

```bash
docker commit [container] [image_name]
```

21. 将 image 上传到仓库

```bash
docker push [image_name]
```

22. 删除 images

```bash
docker rmi [image id]
```

23. 为容器指定名称，容器的名称是唯一

```bash
docker run --name edison -i -t ubuntu /bin/bash
```

24. 有三种方式可以唯一指代容器

短 UUID: 716d3c16dc65（12 位）

长 UUID：716d3c16dc654230ada14f555faadd036474231dfca0ca44b597574a5c618565（64 位）

名称: edison

25. 当前 Docker 宿主机的信息

```bash
docker info
```

26. 查看容器内部的进程信息

```bash
docker top [container]
```

27. 在容器中运行后台任务，只对正在运行的容器有效。

```bash
docker exec -d [container] [cmd]

docker exec -d edison touch /home/haha
```

28. 在容器中运行交付式任务，只对正在运行的容器有效。

```bash
docker exec -t -i edison /bin/bash
```

> 注：在`/var/lib/docker`中，可以查看 `Docker Image`、`Container` 和 `Volumes` 等细节信息。

29. 进入容器

```bash
docker exec -it [container] /bin/bash
```
