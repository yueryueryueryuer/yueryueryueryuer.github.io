# 奇怪问题

## macOS 升级 Big Sur 后 L2TP VPN 连不上

问题现象：

> L2TP-VPN 服务器没有响应。请尝试重新连接。如果仍然有问题，请验证您的设置并与管理员联系。

解决办法：

1. 打开终端输入 `sudo vim /etc/ppp/options`
2. 在打开的文件中输入

```bash
plugin L2TP.ppp
l2tpnoipsec
```

---
