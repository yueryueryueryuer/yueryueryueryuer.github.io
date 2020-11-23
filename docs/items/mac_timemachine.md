# Mac Time Machine 备份速度慢

## 解除封印

```bash
sudo sysctl debug.lowpri_throttle_enabled=0
```

## 封印

```bash
sudo sysctl debug.lowpri_throttle_enabled=1
```
