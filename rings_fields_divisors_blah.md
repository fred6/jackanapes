# Rings and fields and divisors and other poorly organized topics

Reading Curtis' *Abstract Linear Algebra*, which is good so far except that he gives an incorrect (or sloppy, take your pick) definition of a field. He says that a field is a set F with two binary operations such that:

  - one of the operations forms an abelian group with F
  - the other operation forms an abelian group with $ F - {0}$, where $ 0$ is the additive identity of the first group
  - For all a,b,c in F, $ a(b + c) = ab + ac$ (distributivity)

The problem is there's no way (that I see) to prove the other way for distributivity: $ (b + c)a = bc + ac$. To prove this you seem to need to prove that $ 0a = 0$ for all $ a$. You can prove  $ a0 = 0$, but $ 0a \neq 0$ is perfectly consistent with the above field axioms. Check it out:

If for some nonzero $ a, b \in F$, $ 0a = b$, then $ 0b = 0(0a) = (00)a = 0a = b$. (The third equality holds because you *can* prove that for any $ a$, $ a0 = 0$). So $ 01 = 0(bb^{-1}) = (0b)b^{-1} = bb^{-1} = 1$. Now we can do nasty things, like $ a = a1 = a(01) = (a0)1 = 01$, so every nonzero element is now equal to 1. Why doesn't the last argument work to show $ 0 = 1$? Because 0 is not in the multiplicative abelian group, so we dont have any guarantees on whether it interacts with the multiplicative identity. So we get a single strange "field" with only two elements, where multiplication by zero isnt actually commutative.

Even though this is pathological, I can't find a contradiction, so I can only assume that we need another axiom for distributivity the other way. I notice that every other definition I can find of fields posits distributivity both ways, so I can only assume that this is necessary and not just for convenience.

We can easily get a perfectly good definition by saying a field is a commutative ring where nonzero elements have multiplicative inverses.
But since I've never studied ring theory in depth, I need to remember what rings are first! A ring is a set R equipped with two binary operations, + and \*, such that (R, +) is an abelian group, (R, \*) is a monoid, and * distributes over +:

  - a(b + c) = ab + ac
  - (a + b)c = ac + bc

A commutative ring is a ring where the monoid is commutative!

Actually, it's not enough to specify that a field is a commutative ring where non-zero elements have multiplicative inverses. That fact is enough to prove that there are no zero divisors, which we definitely want since fields should behave like we expect numbers to behave. If there are zero divisors, then zero can be *factored* into a product of non-zero elements, which is rather weird.

So let's prove that first. We want to show that $ ab=0$ implies $ a = 0$ or $ b = 0$. Assuming $ a \neq 0$ (because if not, then we're immediately done), then $ a$ has an inverse $ a^{-1}$, so $ b = 0 a^{-1} = 0$ because $ 0x = (0 + 0)x = 0x + 0x$ for any x. So $ b = 0$.

This actually doesn't rule out the trivial ring, as far as I see. The trivial ring has one element, $ \epsilon = 0 = 1$, which forms the trivial abelian group with addition $ \epsilon + \epsilon = \epsilon$. Basically the same definition nets us the trivial monoid over multiplication, and it's certainly commutative. So the trivial ring is a commutative ring, and there are no nonzero elements, so the condition for the existence of inverses is vacuously satisfied.

So our final definition for a field is: a commutative ring with $ 0 \neq 1$ where each nonzero element has a multiplicative inverse.

All this thinking about rings and fields has got me juiced up about one example in particular. One canonical example of a ring is $ \mathbb{Z}_m$, the integers modulo m. For which values of m is $ \mathbb{Z}_m$ a field?

Spoiler alert: m needs to be prime. I had read this a few times before I actually took the time to understand why, but it's rather neat. For a commutative, non-trivial ring to be a field, we need to have multiplicative inverses for every nonzero element, i.e. for all positive integers from 1 to m-1.

Let's look at why this fails for $ \mathbb{Z}_6$. We don't care about inverses for 0, and 1 already has one.

  - 2*1 = 2 mod 6 = 2
  - 2*2 = 4 mod 6 = 4
  - 2*3 = 6 mod 6 = 0
  - 2*4 = 8 mod 6 = 2
  - 2*5 = 10 mod 6 = 4

Immediately a problem is that $ \mathbb{Z}_6$ has zero divisors (2 and 3). We explicitly ruled this out above, so it can't be a field. But aside from that...

Well, it's clear that for 2, there's an element, 3, for which the two multiply to m. But why does that guarantee that there's no element x for which 2x = 1 mod 6? Well, if some element $ a$ has an inverse mod $ m$ and $ a \neq 1$, then it must, by the definition of integers modulo m, be some element $ b$ such that $  a*b$ is some element greater than $ m$ and which is 1 mod $ m$. But in our case, there is no multiple of 2 that ever takes it to an element other than 1 = 2*1 and 4 = 2*2. After it gets to 2*3 = 0, we visit 2*4 = 2*1 = 1 and 2*5 = 2*2 = 4. In other words, 1 and 2 could not possibly be the inverse for 2, because neither forms a product with 2 that exceeds $ m$ (in this case, 6). But for the inverse candidates (3, 4, 5), because 3*2 = 0, that determines that the other two candiates only hit points that the first two failed candidates hit.

Can we generalize this argument? I think so, but this  post has gotten too long..
