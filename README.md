# Roving Index

If you've made keyboard accessible/navigable JavaScript widgets like an autocomplete or a custom select menu, then you're familiar with the idea of [roving tabindex](https://www.youtube.com/watch?v=uCIC2LNt0bk). Over the years, I've written a few implementations of roving tabindex; none of them all that different fromt the rest. I thought it was time that I create a common solution to this problem: `RovingIndex`.

## Installation

```javascript
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
```
