Understanding Dijkstra's "Purified Pigeonhole  Principle"

As Dijkstra notes, the common presentation of the pigeonhole principle is something like this: "when stuffing more than n things into n boxes, one box will have to contain more than one thing". You can dress this up in fancy language and restate as: "when the cardinality of a set X exceeds that of set Y, a function X --> Y cannot be injective (one-to-one)". In this case the function assigns to each thing the box it goes in.

Dijkstra goes in a different direction than this. He sticks with the first conception of putting things in boxes, but generalizes it to: "If more than n*k objects are distributed into a set of n compartments, some compartment receives more than k of the objects". So instead of thinking about putting one object into each box, we think of putting k objects into each box.

Actually, he states this is the "old formulation", and puts forth an alternative, "purified" formulation:

::

    For a non-empty, finite bag of numbers, the maximum value is at least the average value.

This is puzzling at first glance and seems hard to relate to the pigeonhole principle we know and love, but we only need to take a look at the previous step to see how he arrived at it.

In fact it's clear how he arrived at it by reading more of his essay. He argues against the normal presentation as involving unnecessary things like a process of distribution and compartments and things. So what he's trying to do in his "purification" is to take something that was previously represented as a fact about functions on finite sets and instead represent it as a statement about a collection of numbers.

In order to figure how he arrived at his formulation, we need to go in reverse. So how can we represent a set of numbers as a function? The major hint is in the "old formulation" above. If we want to consider a bag of n (natural) numbers, create a function where the co-domain has cardinality n. Then the domain contains n*k elements (so that the average of the numbers is k), and the cardinalities of the preimages of each element of the codomain is the number.

Quick example: let n = 2 and k = 3. We will let X = {a,b,c,d,e,f} and Y = {0, 1}. Then the function {(a,0), (b,0), (c, 1), (d, 0), (e, 1), (f, 0)} has 4 elements of X (a, b, d, f) going to 0, and 2 elements (c, e) going to 1. This is our function-encoding of the bag of numbers {2, 4}.

(Brief aside: the "bag" of numbers is not a set, because we might have repetitions of a number, for instance the function above could've made f(d) = 1, so that the function represents the bag {3, 3}. In other words, the bag is a multiset.)

(Aside aside: I thought that "bag" was an informal term and that "multiset" was the official term for that, but according to wikipedia "bag" is commonly used as well.)

How do we talk about the maximum number in this new function-based formulation? Well, we say that one of the image elements *must* have some property. In this case, the PPP states that the maximum number is at least the average, so we say that one of the image elements (read: "compartments") must have a preimage (read: objects placed in it) with cardinality of k.

If we compare what we have just said to the "old formulation" above, it is essentially the same. In ours we send n*k elements to n elements and say that one of n elements must have k elements being mapped to it. In the "old formulation" we have *more than* n*k elements being sent to n elements, and say that one of the n elements must have *more than* k elements being mapped to it.

These are both in accordance with PPP, because in our new formulation the average is k, while in the "old formulation" it is "k + 1/n". Since the function preimages deal only in integers, we have that one of the compartments must have an integer at least as big as k + 1/n, which is the "some compartment receives more than k of the objecst" stipulation in the old formulation.
