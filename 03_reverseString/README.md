# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `.skip` in front the `test.skip()` function.

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.

###
1. split string,
2. declare empty array for reverse
3. iterate through array, pop last item
4. array = array without popped item
5. reverse array = reverse array + popped item