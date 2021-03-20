# MySQL 时区配置

```bash
# 查看时区配置
show variables like '%time_zone%';
# 查看当前时间
select now();
# 修改时区
set global time_zone = '+08:00';
set time_zone = '+08:00';
# 重启 MySQL
systemctl restart mysqld.service
```
