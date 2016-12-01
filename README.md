# Roving Index

If you've made keyboard accessible/navigable JavaScript widgets like an autocomplete or a custom select menu, then you're familiar with the idea of [roving tabindex](https://www.youtube.com/watch?v=uCIC2LNt0bk). Over the years, I've written a few implementations of roving tabindex; none of them all that different fromt the rest. I thought it was time that I created a common solution to this problem.

## Installation

```
npm install --save roving-index
```

## Usage

`RovingIndex` uses the UMD pattern, so it can be used with most module loaders or without one.

```javascript
import RovingIndex from 'roving-index';

const rovingIndex = new RovingIndex();

rovingIndex.setTotal(5);
rovingIndex.next((oldIndex, newIndex) => {
    console.log(newIndex); // 0
});
```

### API

The `RovingIndex` constructor accepts a single parameter: An options object that takes accepts the following properties:

- `cyclic`: `true` by default. Determines if the index cycles or not. For example, if the `total` is `3` and the current index is `2`, incrementing the index will set it to `0`. If `false`, then the index will stop at min and max values.
- `index`: The default index. This represents the active item.
- `pausable`: `false` by default. If `true`, then the index, when cycled, will pause at the index `-1`.
- `total`: The max zero-based index. This represents the total number of items, minus one.
