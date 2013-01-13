# A visual explanation of the euclidean algorithm

## Preliminaries

Numbers can be classified as either *composite* or *prime*. Prime numbers have no divisors other than 1 and themselves. Composite numbers, on the other hand, can be decomposed into groupings of smaller numbers. For example, one way to represent 12 is 3 times 4. We can picture this as either 4 groups of 3 or 3 groups of 4:

![](/images/twelve.png)

There is, however, no way to factor primes like 7 into smaller groupings (or, the "smaller groups" are just groups of 1):

![](/images/seven.png)

## The algorithm
Euclid's algorithm is an algorithm for finding the greatest common divisor of two integers. Here's a description in words:

  > To find the greatest common divisor of two numbers, **a** and **b** (**a** > **b**):
  > If **a** is even divisible by **b**, the answer is **b**.
  > Otherwise, if **r** is the remainder of **a** / **b** and **r** is not zero, so the answer is the greatest common divisor of **b** and **r**

And one in pseudocode:

    function gcd(a, b):
        // assuming a > b
        while (b does not divide a):
            r = a mod b
            a = b
            b = r
        
        return b

Here `mod` means the result of taking **a** modulo **b**, i.e. finding the remainder after dividing **a** by **b**.

(Notice that the english version used a *recursive* formulation, while the pseudocode version was *imperative*. There is no practical difference.)

The above isn't very intuitive to me, probably because I'm not very smart. So I made some pictures to help me understand.

## In pictures

Let's start with a simple example, 21 and 15. We can visualize 21 as seven groups of 3, and 15 as five groups of 3:

![](/images/21_15.png)

The euclidean algorithm says this: if we take as many 15's out of 21 as is possible, the remainder will be some number of groups of 3.

![](/images/21_15_rem1.png)

Well golly, it seems to have worked. The right side has seven groups of 3, the left side has give groups of 3. When we take five groups away from 7 groups, we're left with two groups of 3, commonly known as 6.

With a remainder of 6, the algorithm then moves into the next step of finding the GCD of 15 and 6:

![](/images/21_15_rem2.png)

Instead of thinking about division and remainders, we can also think about repeatedly subtracting 6 from 15. Each time we take two groups of 3 away from 15. The steps have been marked as different colors in the above image.

After taking two groups of 3 from 15, then taking two more groups of 3 (i.e taking two groups of 3 *twice*), we are left with a single group of 3 on the left side.

![](/images/21_15_rem3.png)

This is where the algorithm halts. On the left side we have a single group of 3, so we can subtract it from the right side until there's nothing left. In other words, 6 is divisible by 3, so 3 is the greatest common divider of 21 and 15 (the two numbers we started with, if you recall).

## A recap and a example with coprimes
Notice that all of the numbers that the algorithm handled were groups of 3. We started out with groups of three and subtracted groups of 3 from one of the sides, each time resulting in another number which consisted of groups of 3. The end result was a single group of 3, which was how we knew the algorithm was done.



## What do I do with these words, if anything?
*This is not part of the article. These are paragraphs I wrote and then decided then didn't fit into the above flow, but I wasn't sure that they were useless enough to be deleted.*

So we're done, right? We've just explained why the euclidean algorithm furnishes the GCD, call it **g**, of two numbers, **a** and **b**: it's because both of the numbers can be represented as multiples of **g**, so that **a** = **j** * **g** and **b** = **k** * **g** for some numbers **j** and **k**. So when you subtract **k** **g**'s from **j** **g**'s, you're left with (**j** - **k**) **g**'s. **So every remainder is still some number of groups of g. We never break a group up.**

So, why does it work? The standard response is that algorithm utilizes a *loop invariant*: every common divisor of **a** and **b** is also a divisor of **b** and **r**. Since the set of divisors stays constant for each iteration of the loop, and since we reduce numbers until we can't do it any more (notice that if we did it one more step, **r** would be equal to 0 since **b** divides **a** after the last step in our algorithm above.) To hammer that point home: every common divisor divides **r**, and therefore divides **b** after each step, including the **biggest** common divisor. If we stop when **b** divides **a**, then we must be stopping when **b** is the greatest common divisor (because we know, at the stopping point, that at least **b** divides **a**, so the GCD must be at least as big as **b**. But we know it can't be bigger than **b**, because the GCD also divides **b**).
