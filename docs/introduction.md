### Maps In JavaScript

- A Map is a built in object in JavaScript that stores keys values pair.
- **Keys can be of any type** (not just strings or symbols like in regular objects).
- Order of insertion is preserved in Map. The order in which key values are inserted in map is preserved. It means, order of inserted elements do not change in the map.

---

### Creating a Map

```jsx
const map = new Map(); // empty
const prefilledMap = new Map([
  ["a", 1],
  ["b", 2],
]);
```

---

Adding values in a Map:

```jsx
map.set("key1", "value1");
map.set(42, "value2");
map.set(true, "value3");
```

Getting values form Map:

```jsx
map.get("key1"); // "value1"
map.get("missingKey"); // undefined
```

Check existence with .has:

```jsx
map.has("key1"); // true
map.has("nope"); // false
```

Getting size of Map:

```jsx
map.size; // number of entries
```

---

### Difference between Map and Object:

| Feature     | `Map`                                  | `Object`                            |
| ----------- | -------------------------------------- | ----------------------------------- |
| Key types   | Any (functions, objects, etc.)         | Strings or Symbols only             |
| Order       | Preserves insertion order              | Not guaranteed (ES6+ mostly stable) |
| Performance | Faster for frequent additions/removals | Optimized for static keys           |
| Iterable    | Yes (`for...of`, spread, etc.)         | Needs manual iteration              |
| Size        | `.size` property                       | Use `Object.keys(obj).length`       |
