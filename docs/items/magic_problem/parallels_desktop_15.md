# 无法启动 Parallels Desktop

问题现象：

::: error
无法启动 Parallels Desktop，因为您的 Mac 操作系统缺少一些必需组件。
:::

解决办法：

```bash
# 新建一个终端，执行
export SYSTEM_VERSION_COMPAT=1
# 再执行以下命令进行启动
open -a Parallels\ Desktop.app
```
