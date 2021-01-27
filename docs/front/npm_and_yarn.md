# npm 与 yarn

## 常用命令对比

```bash
npm i                         yarn add                 // 安装依赖包
npm i x -S                    yarn add x               // 安装生产依赖并保存包名
npm i x -D                    yarn add x -D            // 安装开发依赖并保存包名
npm i x -g                    yarn global add x        // 全局安装
npm update x -S               yarn upgrade x           // 更新生产依赖并保存包名
npm update x -D               yarn upgrade x -D        // 更新开发依赖并保存包名
npm update x -g               yarn global upgrade x    // 全局更新
npm un x                      yarn remove x            // 删除依赖包
npm un x -g                   yarn global remove x     // 全局卸载
rm -rf node_modules && npm i  yarn upgrade             // 重新安装依赖
npm run dev                   yarn run                 // 运行命令
```

## npm

```bash
# 安装
npm install(i)
# 安装模块到项目目录
npm install x
# --global(-g) ：将模块安装到全局
# --save(-S) ：将模块安装到项目目录下，并在package文件的dependencies节点写入依赖
# --save-dev(-D) ：将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
npm install x [--global(-g) / --save(-S) / –-save-dev(-D)]

# 更新模块
npm update x
# --global(-g) ：全局更新
# --save(-S) ：更新，并修改在package文件的dependencies节点的依赖
# -–save-dev(-D) ：更新，并修改在package文件的devDependencies节点的依赖
npm update x [–-global(-g) / --save(-S) / –-save-dev(-D)]

# 项目目录中卸载模块
npm uninstall(un) x
# --global(-g) ：全局卸载
# –-save(-S) ：卸载，并修改在package文件的dependencies节点的依赖
# -–save-dev(-D) ：卸载，并修改在package文件的devDependencies节点的依赖
npm uninstall [–-global(-g) / –-save(-S) / -–save-dev(-D)]

# 清除缓存
npm cache clean
```

## yarn

```bash
# 安装
yarn
# 将模块安装到项目目录下，并在package文件的dependencies节点写入依赖
yarn add x
# 将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
yarn add x –-dev(-D)
# 将模块安装到全局
yarn global add x

# 更新模块，并修改在package文件的dependencies节点的依赖
yarn upgrade x
# 更新模块，并修改在package文件的devDependencies节点的依赖
yarn upgrade x -D
# 全局更新
yarn global upgrade x

# 项目目录中卸载模块
yarn remove x

# 清除缓存
yarn cache clean
```
