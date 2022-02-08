---
title: Learn JavaScript
layout: project
order: 1
repository: https://github.com/DamourYouKnow/learn-javascript
built_with:
    - TypeScript
    - Node.js
    - HTLM
    - CSS
link: learnjs.damour.xyz
---

A framework for authoring interactive JavaScript programming tutorials that 
feature interactive exercises.

Content authors can use the Learn JavaScript framework to compose tutorials 
using the Markdown templating language and a simple specification for 
declaring interactive components.

```markdown
# Hello, world!

## Introduction

The example code below will output a **string** using `console.log()` 
when the `run` button is clicked. 

A **string** is simply a sequence of characters which can be defined by 
wrapping the characters with quotes. `"Hello, world!"` and `'JavaScript is fun!'` 
are both examples of strings. Notice how strings can either be surrounded by 
double quotes (`""`) or single quotes (`''`).

The following code will output the string `"Hello, world!"`. Try it!

<div class="editor" source="hello_world.js"></div>
```

Authors can easily add test cases to their exercises by defining them using a 
functional unit testing and assertion API that is heavily inspired by the 
[Mocha](https://mochajs.org/) unit testing framework for JavaScript.

```js
describe('Your program', () => {
    it('should declare a function named volume', () => {
        assert.equals(
            typeof volume, 'function', 'The function volume was not declared');
    });
    it(
        'should return the volume of a box given its length, width, and height',
        () => {
            const result1 = volume(5, 10, 2);
            assert.equals(result1, 100, 'volume(5, 10, 2) does not return 100');

            const result2 = volume(2, 3, 4);
            assert.equals(result2, 24, 'volume(2, 3, 4) does not return 24');
        }
    );
});
```

Code is executed within the end user's web browser using a combination of the 
[Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) 
and JavaScript's `eval()` function.

The build output of the Learn JavaScript website functions as a static website. 
The absense of any complicated backend web server or database means that the 
lessons created with the framework can be made publically available for free 
without requiring any user accounts.

Editing functionality for the interactive code editors are provided by 
the [Ace](https://ace.c9.io/) library. Code syntax higlighitng is provided by 
the [highlight.js](https://highlightjs.org/) library. 
