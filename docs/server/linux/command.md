# 常用命令

## 查找大文件

```bash
find / -type f -size +1000M -print0 | xargs -0 du -h | sort -nr
```

## 查看端口占用

```bash
netstat -tunlp | grep 端口号
```

```bash
lsof -i:端口号
```

## base64 加密解密

- 加密

```bash
echo 'abc' | base64
```

- 解密

```bash
echo 'YWJjCg==' | base64 -d
```
