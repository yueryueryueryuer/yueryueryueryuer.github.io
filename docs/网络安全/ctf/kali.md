# Parallels Desktop 安装 kali 和基础配置

软件下载及版本：

- `Parallels Desktop 15.1.4`：[Parallels Desktop 15.1.4 (47270)](https://pan.baidu.com/s/1T74lJZC7P2vAzLULhGbmgg) 密码: 8khn
- `kali-2020.3`：[kali-linux-2020.3-installer-amd64.iso 官网地址](https://www.kali.org/downloads/) 或 [历史 kali 镜像](http://old.kali.org/kali-images/)

## 配置

### 切换 root 用户

```bash
sudo su -
```

### 添加源

```bash
vim /etc/apt/sources.list
```

::: tip 说明
官方源会自动选择最近的源，所以只需设置官方源即可
:::

```bash
# 官方源
deb http://http.kali.org/kali kali-rolling main non-free contrib
deb-src http://http.kali.org/kali kali-rolling main non-free contrib
# 中科大源
deb http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
deb-src http://mirrors.ustc.edu.cn/kali kali-rolling main non-free contrib
# 阿里云源
deb http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
deb-src http://mirrors.aliyun.com/kali kali-rolling main non-free contrib
# 清华大学源
deb http://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
deb-src https://mirrors.tuna.tsinghua.edu.cn/kali kali-rolling main contrib non-free
# 浙大源
deb http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free
deb-src http://mirrors.zju.edu.cn/kali kali-rolling main contrib non-free
# 东软大学源
deb http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib
deb-src http://mirrors.neusoft.edu.cn/kali kali-rolling/main non-free contrib
```

### 软件更新

```bash
# 更新软件包的索引源（检测可更新的软件）
apt update
# 检测某个软件是否有更新
apt list --upgradable|grep xxx
# 更新软件
apt install xxx
# 更新系统上已经安装的所有软件（自动更新并安装软件）
apt upgrade
# 更新 Kali Linux 系统（检测并进行系统升级） 一般无需执行
apt dist-upgrade
```

### 安装谷歌拼音输入法

```bash
apt install fcitx fcitx-googlepinyin
```

## 安装 Parallels Tools

### 安装

点击 Parallels Desktop 开启的虚拟机的窗口右上角黄色感叹号，安装 Parallels Tools，然后在虚拟机内打开终端，输入

```bash
# 使用root账号
sudo su -
# 新建pdtools文件夹，再把挂载的内容复制到文件夹里
mkdir /home/用户/pdtools
cp -R /media/cdrom0 /home/用户/pdtools
# 执行安装
cd /home/用户/pdtools
./install
```

### 安装时可能出现的错误

#### 一、出现缺少 linux-headers-5.7.0-kali1-amd64

尝试

```bash
sudo apt install linux-headers-$(uname -r)
```

若失败，去官网下载相应内核版本，官网地址
[http://http.kali.org/kali/pool/main/l/linux/](http://http.kali.org/kali/pool/main/l/linux/)

::: warning 注意
需要下载 3 个，我是缺少 linux-headers-5.7.0-kali1-amd64，所以我要下载

- linux-kbuild-5.7_5.7.6-1kali2_amd64.deb
- linux-headers-5.7.0-kali1-common_5.7.6-1kali2_all.deb
- linux-headers-5.7.0-kali1-amd64_5.7.6-1kali2_amd64.deb
  :::

下载完成后，按顺序安装

```bash
dpkg -i linux-kbuild-5.7_5.7.6-1kali2_amd64.deb
dpkg -i linux-headers-5.7.0-kali1-common_5.7.6-1kali2_all.deb
dpkg -i linux-headers-5.7.0-kali1-amd64_5.7.6-1kali2_amd64.deb
```

安装 linux-headers 时可能会报错提示缺少 linux-compiler-gcc-9-x86，使用 apt 下载缺少的依赖

```bash
# 可以先更新一下源
apt update
# 安装缺少的依赖
apt install linux-compiler-gcc-9-x86
```

::: danger 说明
博主在输入`apt install linux-compiler-gcc-9-x86`命令后返回`无法定位软件包`，博主没解决，后来博主通过`apt list | grep linux-compiler`命令发现系统已有 linux-compiler-gcc-10-x86，判断是 Parallels Desktop 版本太低导致 Parallels Tools 安装需要依赖旧版本的 linux-compiler-gcc，所以博主采用的做法是安装高版本的 Parallels Desktop，博主之前使用的是 15.1.2 版本，改为了 15.1.4 版本后就没出这个问题
:::

解决问题后，再安装 Parallels Tools

#### 二、出现错误提示需要查看 /var/log/parallels-tools-install.log

该问题解决转自[CSDN 论坛的`shouxi516`](https://blog.csdn.net/shouxi516/article/details/106367604)

出现该问题的原因在于新的 linux 内核修改了一个参数的名字，详情见[内核修改清单](https://github.com/torvalds/linux/commit/97a32539b9568bb653683349e5a76d02ff3c3e2c)，导致编译时无法调用参数里的结构体。

`shouxi516`为大家提供了两种解决方法

1. 自己动手修改，修改步骤详见[文章](https://blog.csdn.net/shouxi516/article/details/106367604)
2. 他已经打包好了一个修改后的 Parallels Tools 的安装包，直接用就行，链接：[pt for kali-2020.2 or kali-2020.3](https://pan.baidu.com/s/1T74lJZC7P2vAzLULhGbmgg) 密码: 8khn

::: warning 注意
重启虚拟机后若出现重复弹出安装 Parallels Tools，可以在`设置->选项->更多选项`里勾掉自动更新 Parallels Tools
:::

## 清理垃圾

```bash
#它会清除已检索包文件的本地仓库，但它只会删除不会再下载且几乎无用的文件。它有助于防止缓存过大
sudo apt autoclean

#清理系统不再使用的孤立软件，因为某些其他软件包需要它们，但是在删除了其他软件包之后，而不再需要它们
sudo apt autoremove

#删除所有已下载的安装包的包文件，一般作为定期计划维护的一部分
sudo apt clean
```

## 安装更多工具

```bash
apt -y install kali-linux-large
```
