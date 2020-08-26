# Optional 详解

## 介绍

Optional 类是 Java8 为了解决 null 值判断问题，借鉴 google guava 类库的 Optional 类而引入的一个同名 Optional 类，使用 Optional 类可以避免显式的 null 值判断（ null 的防御性检查），避免 null 导致的 NPE （NullPointerException）

## get() 方法

```java
public T get() {
    if (value == null) {
        throw new NoSuchElementException("No value present");
    }
    return value;
}
```

get() 方法返回包装对象的实际值，如果是 null，会抛 NoSuchElementException 异常

## isPresent() 方法

```java
public boolean isPresent() {
    return value != null;
}
```

isPresent() 方法用于判断包装对象的值是否非空

## ifPresent() 方法

```java
public void ifPresent(Consumer<? super T> consumer) {
    if (value != null)
        consumer.accept(value);
}
```

ifPresent() 方法接受一个 Consumer 对象（消费函数），如果包装对象的值非空，运行 Consumer 对象的 `accept()` 方法

- 打印用户姓名

```java
Optional.ofNullable(student)
    .ifPresent(System.out.println(u.getName()));
```

## filter() 方法

```java
public Optional<T> filter(Predicate<? super T> predicate) {
    Objects.requireNonNull(predicate);
    if (!isPresent())
        return this;
    else
        return predicate.test(value) ? this : empty();
}
```

filter() 方法接受参数为 Predicate 对象，用于对 Optional 对象进行过滤，如果符合 Predicate 的条件，返回 Optional 对象本身，否则返回一个空的 Optional 对象。

- 大于 18 岁用户过滤

```java
Optional.ofNullable(user)
    .filter( u -> u.getAge() > 18)
    .ifPresent(u ->  System.out.println(u));
    }
```
