# Linux 时间和时区

## CentOS7 设置时间和时区

```bash
# 查看系统当前时间
timedatectl
# 查看硬件时间
hwclock
# 修改时区
timedatectl set-timezone Asia/Shanghai
# 系统时钟同步到硬件时钟
hwclock -w
```
