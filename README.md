## Odd Behavior That Can Lead You Astray...

So here's an odd one.

Normally we grab access to an element with the document.getElementById() method.

Guess, what? We could just use the element's ID directly in our JavaScript.

Great idea, right?

#Nope

Here's why.

By default most browsers dump those elements into the global space.

That's why we can grab them.

But...

They aren't protected.

If someone else wants to come along and use that variable name in the global space, our code breaks.

Moral of the story... create your own variables and protect them.

We'll get into the ways to do that better in later classes, but for now just be sure to use "var" and create your own name.