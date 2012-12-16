# Open and Closed sets

In a metric space, an **open ball around a** is a set of elements that are *less than* a distance $\epsilon$ from some point $a$, i.e. the set $\left\{{x : d(x,a) &lt; \epsilon}\right\}$. Since I'm interested in $\mathbb{R}$ in particular, using the standard distance metric, this definition becomes: a set $\left\{{x \in \mathbb{R} : |x-a| &lt; \epsilon}\right\}$. We also say that it's an $\epsilon$-ball around $a$ or an $\epsilon$-neighborhood.

A set is **open** if every point in the set has an $\epsilon$-ball that fits inside the set.

Here's an important fact about open sets, which forms the basis of topological spaces!

**Theorem:** (1) Arbitrary unions of open sets are open. (2) Finite intersections of open sets are open.

*Proof:* (1) Given some family $\mathcal{F}$ of subsets of $\mathbb{R}$, $A = \bigcup \mathcal{F}$ is open because $a \in A$ must be in one of the sets, call it $U$, of $\mathcal{F}$, and since $U$ is open, there's an open ball contained in $U$, hence also in $A$.

(2) If $\left\{{U_1, \ldots, U_n}\right\}$ are open sets, then $S = \bigcap_{i = 1}^{n} U_i$ must be open, for if you take arbitrary $s \in S$, then it's in every $U_i$, so there's some open ball $O_i$ that's inside each $U_i$. Take the smallest open ball, $O_k$, and it's in every $U_i$, so it's in $S$ as well. QED.

Why can't we say that arbitrary intersections of open sets are open too? Where does the proof of (2) fail if we have an infinite family of open sets? It really consists in the fact that we have an infinite set of open ball radii, $C$, we aren't guaranteed to be able to find a minimum element.

Here's an important definition: a **limit point** of set $A$ is an element $x \in \mathbb{R}$ for which every open ball around $x$ contains a point of $A - \left\{{x}\right\}$. A limit point is an element which is *approximable* by elements of $A$ distinct from $x$ (in the sense that you can make a sequence of elements of $A$ that converge to $x$ (and that aren't just the constant sequence $(x, x, x, \ldots)$.)

Here's that promised theorem about limit points and sequences that converge to them:

**Theorem:** $x$ is a limit point of $A$ iff there's a sequence $(a_n) \rightarrow x$ and each $a_n \in A - \left\{{x}\right\}$.

*Proof:* $(\Rightarrow)$ if $x$ is a limit point then we can take the $\\epsilon$-balls for $\epsilon_n = \frac{1}{n}$. Inside each $\epsilon_n$ we have some $a \in A, a \neq x$, so set $a_n = a$. This constructs a sequence of elements of $A - \left\{{x}\right\}$ that converges to $x$.

$(\Leftarrow)$ If theres a sequence $(a_n) \rightarrow x$ contained in $A - \left\{{x}\right\}$ that converges to $x$, then any $\epsilon$-ball around $x$ contains elements of $A - \left\{{x}\right\}$ because for every $\epsilon$ there's a point in the sequence after which terms of the sequence are all within the $\epsilon$-ball around $x$. But terms of the sequence are elements of $A$ that are not equal to $x$ (by hypothesis), so $x$ is a limit point. QED
