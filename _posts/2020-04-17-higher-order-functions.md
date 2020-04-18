---
layout: post
title:  "Understanding higher order functions in JavaScript"
date:   2020-04-17 23:00:00 -0400
categories: tutorial
---

A higher order function is a special type of function that has another function 
as one of its parameters (It can also be a function that returns another 
function, but that's a topic for a future post).

There are many useful higher order functions built into JavaScript. Two of 
these are the very popular `map` and `filter` functions which are 
included in the `Array` class. These functions provide incredibly powerful 
abstractions for manipulating arrays.

To gain a better understanding of how higher order functions work, let's 
examine what these functions do and how we can implement them ourselves.

## map()

JavaScript's `map` function can be used to apply a function to each item in an 
array. This function returns a new array containing the transformed values of 
the original array. Note that this function does not modify the values in the 
original array.

As an example, we can use `map` to apply a function that doubles a number to 
each value in array. This will return a new array containing the doubled values 
of each item in the original array.

```js
const foo = [1, 2, 3, 4, 5].map(double);
console.log(foo);

function double(x) {
    return x * 2;
}
```
```
> [2, 4, 6, 8, 10]
```

One really cool feature of JavaScript is the ability to declare a function 
anywhere in your code, even inside the parameters of another function. Let's do 
this to cut some code out of our previous example.

```js
const foo = [1, 2, 3, 4, 5].map(function(x) {
    return x * 2;
});
```

We can even go a step further by using the arrow function syntax, `=>`, which 
introduces a more streamlined way of defining functions. 

```js
const foo = [1, 2, 3, 4, 5].map((x) => {
    return x * 2
});
```

We can make this code even shorter by taking advantage of the fact that the 
return statement is implied for single statement arrow functions with no brace 
brackets.

```js
const foo = [1, 2, 3, 4, 5].map((x) => x * 2);
```

Very concise. 

To replicate the behaviour of `map` we can create a function that accepts two 
inputs, an array and a function that performs an operation on an item in the 
array. We can loop through each item in the array, apply the parameter function 
to each item, and add the transformed item to the new array that will be 
returned after we finish iterating through the input array.


```js
function map(array, func) {
    const result = [];
    for (const item of array) {
        // Apply the function to each array item and add the result to the
        // retured array.
        array.push(func(item));
    }
    return result;
}

const foo = map([1, 2, 3, 4, 5], (x) => x * 2);
```

## filter()

JavaScript's `filter` can be used to filter an array by returning a new array 
that contains only the items matching a specified condition. This function 
filters items in the array by using a predicate function that takes in an 
array item as input and returns a `Boolean` that reflects whether the condition 
was true or false. 

Let's take a look at how `filter` can be used to return a new array containing 
only the values greater or equal to `10` in the original array.

```js
const foo = [5, 12, 10, 4, 18].filter(greaterThanOrEqualTo10);
console.log(foo);

function greaterThanOrEqualTo10(x) {
    return x >= 10;
}

```
```
> [12, 10, 18]
```

Again, we can shorten our code using arrow functions:

```js
const foo = [5, 12, 10, 4, 18].filter((x) => x >= 10);
```

Again, very concise.

To replicate the behaviour of `filter` we can create a function take accepts two 
inputs, an array and a function that that evaluates if an item passes should be 
included in the filtered array. We can loop through each item in the array, 
check if it passes the condition, and add it to the filtered array if it does.

```js

function filter(array, predicate) {
    const result = [];
    for (const item of array) {
        // Check if each item in the array passes the predicate function.
        // If it does add it to the array that we will return later.
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const foo = filter([5, 12, 10, 4, 18], (x) => x >= 10);
```

It is noting that there are extra optional parameters that can be 
used in the functions passed into `map` and `filter`. You can learn more 
from the JavaScript `Array` class [documentation page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).


## Let's recap

Hopefully, you now have a better understanding of how higher order functions 
function. These types of functions are useful as they provide a way to create 
powerful abstractions by parameterizing behavior within a function, as you have 
seen by how easy it was to create an interface for operations such as 
transforming or filtering values of an array.
