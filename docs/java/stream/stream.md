# Stream 详解

## 介绍

### 流的操作类型

- **Intermediate**：一个流可以后面跟随零个或多个 intermediate 操作。其目的主要是打开流，做出某种程度的数据映射/过滤，然后返回一个新的流，交给下一个操作使用。这类操作都是惰性化的（lazy），就是说，仅仅调用到这类方法，并没有真正开始流的遍历。

- **Terminal**：一个流只能有一个 terminal 操作，当这个操作执行后，流就被使用“光”了，无法再被操作。所以这必定是流的最后一个操作。Terminal 操作的执行，才会真正开始流的遍历，并且会生成一个结果，或者一个 side effect。

- **Short-circuiting**：

  - 对于一个 intermediate 操作，如果它接受的是一个无限大（infinite/unbounded）的 Stream，但返回一个有限的新 Stream。

  - 对于一个 terminal 操作，如果它接受的是一个无限大的 Stream，但能在有限的时间计算出结果。

### 具体分类

- **Intermediate**：map (mapToInt, flatMap 等)、 filter、 distinct、 sorted、 peek、 limit、 skip、 parallel、 sequential、 unordered

- **Terminal**：forEach、 forEachOrdered、 toArray、 reduce、 collect、 min、 max、 count、 anyMatch、 allMatch、 noneMatch、 findFirst、 findAny、 iterator

- **Short-circuiting**：
  anyMatch、 allMatch、 noneMatch、 findFirst、 findAny、 limit

## map/flatMap

`Intermediate`

map 是 1:1 的映射，每个输入元素都按照规则转换为另一个元素

flatMap 是 1:n 的映射

- 转换大写

```java
List<String> UpperCaseList = wordList.stream()
  .map(String::toUpperCase)
  .collect(Collectors.toList())
```

## filter

`Intermediate`

- 数组保留偶数

```java
Integer[] evens = Stream.of(integers)
  .filter(n -> n%2 == 0)
  .toArray(Integer[]::new);
```

- 集合保留偶数

```java
List<Integer> evenList = integerList.stream()
  .filter(n -> n % 2 == 0)
  .collect(Collectors.toList());
```

## distinct

`Intermediate`

- 名字去重

```java
List<String> list = nameList.stream()
  .distinct()
  .collect(Collectors.toList());
```

## sorted

`Intermediate`

对 Stream 的排序通过 sorted 进行，它比数组的排序更强之处在于你可以首先对 Stream 进行各类 map、filter、limit、skip 甚至 distinct 来减少元素数量后，再排序，这能帮助程序明显缩短执行时间。

- 前两条数据根据年龄进行降序排序

```java
List<User> list = userList.stream()
  .limit(2)
  .sorted(Comparator.comparing(User::getAge).reversed())
  .collect(Collectors.toList());
```

## peek

`Intermediate`

初衷是用于 debug 调试

- 打印姓名

```java
// peek是中间操作，只有peek是无法打印姓名的，因为没有终止操作
userList.stream()
  .peek(e -> System.out.println(e.getName()))
  .collect(Collectors.toList())
```

- java api doc 上示例

```java
Stream.of("one", "two", "three", "four")
  .filter(e -> e.length() > 3)
  .peek(e -> System.out.println("Filtered value: " + e))
  .map(String::toUpperCase)
  .peek(e -> System.out.println("Mapped value: " + e))
  .collect(Collectors.toList());
```

## limit

`Intermediate`、`Short-circuiting`

limit 返回 Stream 的前面 n 个元素

- 获取前 2 条数据

```java
List<User> list = userList.stream()
  .limit(2)
  .collect(Collectors.toList());
```

## skip

`Intermediate`

skip 是扔掉前 n 个元素

- 剔除第一条数据

```java
List<User> list = userList.stream()
  .skip(1)
  .collect(Collectors.toList());
```

## parallel

`Intermediate`

转化为并行流，运用多核特性（forkAndJoin）并行处理，大幅提高效率

**保证线程安全的前提下可以使用**

- io 操作

```java
userList.stream().parallel().forEach(user -> {
    //io数据库操作
    ...
});
```

## sequential

`Intermediate`

## unordered

`Intermediate`

unordered() 操作不会执行任何操作来显式地对流进行排序。它的作用是消除了流必须保持有序的**约束**，从而允许后续操作使用不必考虑排序的优化。

[java8 文档](https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html#Ordering)

> 对于顺序流，顺序的存在与否不会影响性能，只影响确定性。如果流是顺序的，则在相同的源上重复执行相同的流管道将产生相同的结果;
>
> 如果是非顺序流，重复执行可能会产生不同的结果。 对于并行流，放宽排序约束有时可以实现更高效的执行。 ...
>
> 在流有序时, 但用户不特别关心该顺序的情况下，使用 unordered 明确地对流进行去除有序约束可以改善某些有状态或终端操作的并行性能。

- 比较以下例子

```java
Stream.of(5, 1, 2, 6, 3, 7, 4).unordered().forEach(System.out::println);
Stream.of(5, 1, 2, 6, 3, 7, 4).unordered().parallel().forEach(System.out::println);
```

## forEach

`Terminal`

当需要为多核系统优化时，可以用`parallelStream().forEach()`，只是此时原有元素的次序没法保证，并行的情况下将改变串行时操作的行为。forEach 是 terminal 操作，因此它执行后，Stream 的元素就被“消费”掉了，你无法对一个 Stream 进行两次 terminal 运算。

- 打印姓名

```java
userList.stream()
  .forEach(e -> System.out.println(e.getName()))
```

- 打印姓名 并行 不保证顺序

```java
userList.parallelStream()
  .forEach(e -> System.out.println(e.getName()))
```

## forEachOrdered

`Terminal`

```java

```

## toArray

`Terminal`

```java

```

## reduce

`Terminal`

```java

```

## collect

`Terminal`

```java

```

## findFirst

`Termimal`、`Short-circuiting`

总是返回 Stream 的第一个元素，或者空

- 遍历用户，打印出姓名是张三的排在第一位的人的年龄，找不到则打印 0

```java
userList.stream()
  .filter(user -> ("张三").equals(user.getName()))
  .findFirst()
  .orElse("0");
```

forEach、 forEachOrdered、 toArray、 reduce、 collect、 min、 max、 count、 anyMatch、 allMatch、 noneMatch、 findFirst、 findAny、 iterator
