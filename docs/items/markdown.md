# Markdown 语法

## 标题

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

## 段落

- 两个以上空格加上回车

```markdown
第一句 ↓
第二句
```

- 在段落后面使用一个空行来表示重新开始一个段落

```markdown
第一句

第二句
```

## 字体

```markdown
_斜体文本_
**粗体文本**
**_粗斜体文本_**
```

## 分隔线

```markdown
---
```

## 删除线

```markdown
~~删除线~~
```

**显示效果：**

> ~~删除线~~

## 下划线

```markdown
<u>带下划线文本</u>
```

**显示效果：**

> <u>带下划线文本</u>

## 脚注

```markdown
脚注[^1]
[^1]: 这里是脚注
```

_注意事项：_

> 脚注 id 必须唯一
> 无论脚注 id 如何起名，显示时一律标为数字，并且按出现顺序排列

## 列表

```markdown
- Item 1
  - Item 2
    - Item 3
  - Item 4
- Item 4
  - Item 5
```

**显示效果：**

> - Item 1
>   - Item 2
>     - Item 3
>   - Item 4
> - Item 4
>   - Item 5

## 引用

```markdown
> 内容
>
> 1. 第二行
> 2. 第三行
```

**显示效果：**

> 第一行
>
> 1. 第二行
> 2. 第三行

## 代码块

**关键字：**
|名称 | 关键字 |调用的 js|
|--|--|--|
|Shell |bash,shell|shBrushBash.js  |
|text | text,plain | shBrushPlain.js |
|JavaScript | js,jscript,javascript | shBrushJScript.js  |
|Java | java |shBrushJava.js  |
|GO | go,golang | shBrushGo.js  |
|C | cpp,c |shBrushCpp.js  |
|C# | c#,c-sharp,csharp | shBrushCSharp.js  |
|CSS | css |shBrushCss.js  |
|Delphi | delphi,pascal,pas | shBrushDelphi.js  |
|diff&patch | diff patch |shBrushDiff.js |
|Erlang | erl,erlang |shBrushErlang.js  |
|Groovy | groovy |shBrushGroovy.js  |
|PHP | php |shBrushPhp.js  |
|Python | py,python | shBrushPython.js  |
|Ruby | ruby,rails,ror,rb | shBrushRuby.js  |
|SASS&SCSS | sass,scss | shBrushSass.js  |
|Scala | scala | shBrushScala.js  |
|SQL | sql |shBrushSql.js  |
|Visual Basic | vb,vbnet | shBrushVb.js  |
|XML | xml,xhtml,xslt,html | shBrushXml.js  |
|Objective C | objc,obj-c | shBrushObjectiveC.js  |
|R | r,s,splus | shBrushR.js  |
|matlab | matlab |shBrushMatlab.js  |
|swift | swift | shBrushSwift.js  |

## 链接

```markdown
基本使用：
[我的博客](https://yueryueryueryuer.github.io/my-blog/)
直接使用链接地址：
<https://yueryueryueryuer.github.io/my-blog/>
```

**显示效果：**

> 基本使用：  
> [我的博客](https://yueryueryueryuer.github.io/my-blog/)  
> 直接使用链接地址：  
> <https://yueryueryueryuer.github.io/my-blog/>

## 图片

```markdown
![博客logo](https://yueryueryueryuer.github.io/my-blog/img/logo.png)
```

**显示效果：**

![博客logo](https://yueryueryueryuer.github.io/my-blog/img/logo.png)

_注意事项：_

> Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 **_\<img>_** 标签

```markdown
<img src="https://yueryueryueryuer.github.io/my-blog/img/logo.png" width="50%">
```

**显示效果：**

<img src="https://yueryueryueryuer.github.io/my-blog/img/logo.png" width="50%">

## 表格

```markdown
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |
```

**显示效果：**

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

| 左对齐 | 右对齐 | 居中对齐 |
| :----- | -----: | :------: |
| 单元格 | 单元格 |  单元格  |
| 单元格 | 单元格 |  单元格  |

_注意事项：_

> -: 设置内容和标题栏居右对齐。  
> :- 设置内容和标题栏居左对齐。  
> :-: 设置内容和标题栏居中对齐。

## 高级技巧

### 支持的 HTML 元素

```markdown
目前支持的 HTML 元素有：<kbd> <b> <i> <em> <sup> <sub> <br>等，如：

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```

**显示效果：**

> 使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
