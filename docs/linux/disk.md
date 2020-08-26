# 磁盘清理

## 查找大文件

```sh
find / -type f -size +1000M -print0 | xargs -0 du -h | sort -nr
```
