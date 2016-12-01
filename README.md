# Roving Index

If you've made keyboard accessible/navigable JavaScript widgets like an autocomplete or a custom select menu, then you're familiar with the idea of [roving tabindex](https://www.youtube.com/watch?v=uCIC2LNt0bk). Roving Index aims to provide a common solution to this problem, assisting with managing roving index, tab or otherwise.

## Installation

```
npm install --save roving-index
```

## Usage

`RovingIndex` uses the UMD pattern, so it can be used with most module loaders or without one.

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex({
  total: 5,
});

rovingIndex.next((oldIndex, newIndex) => {
    console.log(newIndex); // 0
});
```

### API

The `RovingIndex` constructor accepts a single parameter: An options object that accepts the following properties:

- `cyclic`: `true` by default. Determines if the index cycles or not. For example, if the `total` is `3` and the current index is `2`, incrementing the index will set it to `0`. If `false`, then the index will stop at min and max values.
- `index`: The default index (zero-based). This represents the active item and cannot be greater than the `total`. `-1` by default.
- `pausable`: `false` by default. If `true`, then the index, when cycled, will pause at the index `-1`.
- `total`: The max index. This represents the total number of items, minus one.

#### Examples

##### Cyclic Index

The following example demonstrates the default behavior (cyclic index). Cyclic index with cycle through the available indices start at `0` when the final index is reached and starting at the final index when `-1` is reached. Note that the `index` is zero-based.

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex({
  total: 3,
});

rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 0
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 1
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 2
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 0
```

##### Finite Index

The following example demonstrates the finite index. The finite will stop at the max and min indices.

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex({
  cyclic: false, // create a finite index
  total: 3,
});

rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 0
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 1
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 2
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 2
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 2
```

##### Pausable Index

The following example demonstrates the pausable index. The pausable index will stop at `-1` before cycling.

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex({
  pausable: true, // create a pausable index
  total: 3,
});

rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 0
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 1
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 2
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // -1 (I paused!)
rovingIndex.next((oldIndex, newIndex) => { console.log(newIndex); }); // 0
```

#### Public Methods

The following code snippets assume an instance of `RovingIndex` has been created:

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex();
```

##### `rovingIndex.clearIndex()`

Clears the index, setting its value to `-1`.

##### `rovingIndex.getIndex()`

Returns the current index.

##### `rovingIndex.getTotal()`

Returns the current total.

##### `rovingIndex.getTotal()`

Sets the total. The total represents to boundaries (min/max) for the index.

##### `rovingIndex.prev(callback)`

Decrements the index, triggering the provided callback afterwards. The callback receives two parameters:

- `oldIndex`: the previous index
- `newIndex`: the new index

##### `rovingIndex.next(callback)`

Increments the index, triggering the provided callback afterwards. The callback receives two parameters:

- `oldIndex`: the previous index
- `newIndex`: the new index

##### `rovingIndex.setIndex(index, total)`

Set the active index, and, optionally, the total.
