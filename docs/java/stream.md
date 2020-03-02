# Stream 操作

```java
public class User {
  private String name;
  private int gender;
  private int age;
  private String tel;
}
```

## List&lt;Pojo&gt;转 List&lt;String&gt;

```java
List<String> nameList = userList.stream()
  .map(User::getName)
  .collect(Collectors.toList());
```

## List&lt;Pojo&gt;转 Map&lt;String,String&gt;

```java
Map<String,String> nameTelMap = userList.stream()
.collect(
  Collectors.toMap(User::getName, User::getTel, (a,b) -> b)
  );
```

## List&lt;Pojo&gt;分组

```java
Map<String, List<User>> collectMap = list.stream()
.collect(
  Collectors.groupingBy(User::getGender)
  );
```

## List&lt;Pojo&gt;去重

### 自己去重

- 根据 1 个字段去重

```java
List<User> list = userList.stream().collect(
  Collectors.collectingAndThen(
    Collectors.toCollection(
      () -> new TreeSet<>(
        Comparator.comparing(User::getName)
      )
    ), ArrayList::new));
```

- 根据多个字段去重

```java
List<User> list = userList.stream().collect(
  Collectors.collectingAndThen(
    Collectors.toCollection(
      () -> new TreeSet<>(
        Comparator.comparing(o -> o.getName() + ";" + o.getGender())
      )
    ), ArrayList::new));
```

### 根据另一个 List 去重

```java
List<DdDepartInfo> list = departList.removeIf(
  departInfo -> existList.stream().anyMatch(
    exist -> departInfo.getId().equals(exist.getId())
  )
);
```

## List&lt;Map&lt;String,Object&gt;&gt;根据 Map 的 key 分组

```java
// 处理totalList 相同用户合并到一个map里
Set<String> set = new HashSet<>();
List<Map<String, Object>> list = totalList.stream()
  .collect(Collectors.groupingBy(o -> {
    //暂存所有key
    set.addAll(o.keySet());
    //按userId分组
    return o.get("userId");
  })).values().stream().map(mapList -> {
  //合并
  Map<String, Object> map = new HashMap<>();
  for (Map<String, Object> m : mapList) {
    for (Map.Entry<String, Object> stringObjectEntry : m.entrySet()) {
      map.put(stringObjectEntry.getKey(), stringObjectEntry.getValue());
    }
  }
  //为没有的key赋值0
  for (String k : set) {
    if (!map.containsKey(k)) {
      map.put(k, 0);
    }
  }
  return map;
}).sorted(Comparator.comparing(o -> ((String) o.get("NAME"))))
  .collect(Collectors.toList());
```
