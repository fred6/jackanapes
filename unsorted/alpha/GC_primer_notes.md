# Notes on "A  Primer on Galois Connections"

## Preliminary definitions
A **Galois connection** is a  pair of functions $F: P \to Q, G: Q \to P$ between two posets $(P, \leq), (Q, \sqsubseteq)$ such that

$$\forall x \in P, y \in Q, F(x) \sqsubseteq y iff x \leq G(y)$$

A **closure system** on a poset $P$ is a subset $C \subset P$ such that for every element $p$ of the poset, there is a smallest $c \in C$ such that $p \leq c$ (meaning: $\forall x \in C$ such that $p \leq x$, $c \leq x$). This $c$ is called the **closure** of $p$ and is denoted $p^-$.

A **closure operation** on a poset $P$ is a function $f$ which is 1) monotone, 2) increasing ($\forall p p \leq f(p)$), and 3) idempotent ($f(f(p)) = f(p)$)

These notions correspond bijectively. There's a canonical way to create a closure system from a closure operation, and vice versa. In fact, if you start with a closure operation, canonically generate the closure system, then use the system to canonically generate a closure operation, you get what you started with.

The bijection is this: given a closure operation, the image is a closure system. Given a closure system, define a function by $f(p) = p^-$. This function $f$ is a closure operation.

The closure system associated with any closure operation is the set of fixed points associated with that operation (that's what "idempotence" means for functions!)

Here's a quick proof of the 1-1 correspondence between closure ops and closure systems:

If $f$ is a closure operation, then we want to prove that $img(f)$ is a closure  system. So let $p$ be an arbitrary poset element, and we want to prove that $f(p)$ is the smallest element in $img(f)$ that's greater than $p$. Let $q \in C$ be any element such that $p \leq q$. By monotonicity and idempotence $f(p) \leq q$. So $f(p)$ really is the smallest in $C$, which proves that $img(f)$ is a closure system.

Conversely, given a closure system $C$, define $f$ as stated above. By definition, $p \leq f(p)$ (since $f(p)$ is the smallest element in $C$ which majorizes $p$), which proves that $f$ is increasing. 33% done! Now suppose $x$ and $y$ are two elements of $P$ such that $x \leq y$. We just proved that $x \leq f(x)$ and $y \leq f(y)$. Posets are transitive though, so $x \leq y \leq f(y)$. But by definition, $f(x)$ is the smallest element of $C$ that majorizes x, so we must have $f(x) \leq f(y)$. This gives us monotonicity. Now we only need idempotence. Posets are reflexive, so $f(x) \leq f(x)$. By definition $f(f(x))$ is the smallest element of $C$ that majorizes $f(x)$, so we have $f(f(x)) \leq f(x)$. Voila, idempotence.


### A note on duality
Generally you can take any proposition proved below and substitute "supremum" into each instance of "infimum", "interior" into "closure", and so on, to get another true statement. This works because an infimum in one poset is a supremum in the dual poset, so anything you prove for the former works for the latter (with appropriate opposites substituted into the statement).

## A plot
I'm going to spoil the plot here: for a Galois connection $(F, G)$, $G \circ F$ is a closure operation. To prove this we need to prove that this composition has three properties:

  - increasing
  - monotone
  - idempotent

We can actually mop the "increasing" part up easily:

**Prop 1.** Given GC $(F, G)$, $\G \circ F$ is increasing, and $F \circ G$ is decreasing.

*Proof:* For any $x \in P$, $F(x) \sqsubseteq F(x)$ (by reflexivity!), so by the definition of Galois connections, $x \leq G(F(x))$.

Also, for any $y \in Q$, $G(y) \leq G(y)$, and by definition $F(G(y)) \sqsubseteq y$.

To prove monotonicity there's a simple two-step solution: prove that $F$ and $G$ are individually monotone (which is interesting on its own!), and then prove that the composition of monotone functions is monotone (that should be easy to see).

**Prop 2.** Given GC $(F, G)$, each of $F$ and $G$ are monotone.

*Proof:* Let $x, y \in P$ such that $x \leq y$. $G \circ F$ is increasing so $x \leq y \leq G(F(y))$. By the definition of a Galois connection, this implies that $F(x) \sqsubseteq F(y)$, so $F$ is monotone. Similarly, for any $a \sqsubseteq b \in Q$, $F(G(a)) \sqsubseteq a \sqsubseteq b$ (because $F \circ G$ is decreasing), so by the definition of GC, $G(a) \leq G(b)$.


**Exercise for the reader:** Prove that for two composable functions between posets, if they're both monotone then the composition is monotone.

Okay, 2/3. How do we prove idempotence? We want to show that $F(G(F(G(x) = F(G(x))$ for all $x \in P$. So it seems like proving the following should work:

**Prop 3.** Given GC $(F, G)$, $ F \circ G \circ F = F$ and $G \circ F \circ G = G$.
