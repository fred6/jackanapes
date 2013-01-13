# Open and Closed sets

In a metric space, an **open ball around a** is a set of elements that are *less than* a distance $\epsilon$ from some point $a$, i.e. the set $\left\{{x : d(x,a) < \epsilon}\right\}$. Since I'm interested in $\mathbb{R}$ in particular, using the standard distance metric, this definition becomes: a set $\left\{{x \in \mathbb{R} : |x-a| < \epsilon}\right\}$. We also say that it's an $\epsilon$-ball around $a$ or an $\epsilon$-neighborhood.

A set is **open** if every point in the set has an $\epsilon$-ball around it that fits inside the set.

Here's an important fact about open sets, which forms the basis of topological spaces!

**Theorem:** (1) Arbitrary unions of open sets are open. (2) Finite intersections of open sets are open.

*Proof:* (1) Given some family $\mathcal{F}$ of subsets of $\mathbb{R}$, $A = \bigcup \mathcal{F}$ is open because $a \in A$ must be in one of the sets, call it $U$, of $\mathcal{F}$, and since $U$ is open, there's an open ball contained in $U$, hence also in $A$.

(2) If $\left\{{U_1, \ldots, U_n}\right\}$ are open sets, then $S = \bigcap_{i = 1}^{n} U_i$ must be open, for if you take arbitrary $s \in S$, then it's in every $U_i$, so there's some open ball $O_i$ that's inside each $U_i$. Take the smallest open ball, $O_k$, and it's in every $U_i$, so it's in $S$ as well. QED.

Why can't we say that arbitrary intersections of open sets are open too? Where does the proof of (2) fail if we have an infinite family of open sets? It really consists in the fact that when we have an infinite set of open ball radii, $C$, we aren't guaranteed to be able to find a minimum element.

## Limit points, isolated points

Here's an important definition: a **limit point** of set $A$ is an element $x \in \mathbb{R}$ for which every open ball around $x$ contains a point of $A - \left\{{x}\right\}$. A limit point is an element which is *approximable* by elements of $A$ distinct from $x$ (in the sense that you can make a sequence of elements of $A$ that converge to $x$ (and that aren't just the constant sequence $(x, x, x, \ldots)$.)

This alternate definition of a limit point might be edifying: a **cluster point** of a set $A$ is an element $x \in \mathbb{R}$ for which every open ball around $x$ contains infinitely many points of $A$. Clearly every cluster point is a limit point (every $\epsilon$-ball contains *infinitely* many points of $A$, so it certainly contains one element that isn't $x$). Also, every limit point must be a cluster point, because *every* $\epsilon$-ball intersects $A - \left\{x\right\}$, and if there were only finitely many points of $A$ in one $\epsilon$-ball, we could take the nearest one and construct a futher $\epsilon_0$-ball that contained no points of $A$, contradicting our supposition that we have a limit point.

Here's that promised theorem about limit points and sequences that converge to them:

**Theorem:** $x$ is a limit point of $A$ iff there's a sequence $(a_n) \rightarrow x$ and each $a_n \in A - \left\{{x}\right\}$.

*Proof:* $(\Rightarrow)$ if $x$ is a limit point then we can take the $\epsilon$-balls for $\epsilon_n = \frac{1}{n}$. Inside each $\epsilon_n$ we have some $a \in A, a \neq x$, so set $a_n = a$. This constructs a sequence of elements of $A - \left\{{x}\right\}$ that converges to $x$.

$(\Leftarrow)$ If theres a sequence $(a_n) \rightarrow x$ contained in $A - \left\{{x}\right\}$ that converges to $x$, then any $\epsilon$-ball around $x$ contains elements of $A - \left\{{x}\right\}$ because for every $\epsilon$ there's a point in the sequence after which terms of the sequence are all within the $\epsilon$-ball around $x$. But terms of the sequence are elements of $A$ that are not equal to $x$ (by hypothesis), so $x$ is a limit point. QED

It is clear that many elements of a given set $A$ will be limit points. For instance, if $A = (-1, 1]$, then every point in $A$ is a limit point. However, considering $B = A \cup \left\{{3}\right\}$, $3$ is not a limit point of $B$ (despite belonging to $B$). There's definitely a sequence of elements of $B$ that converges to $3$, namely $(3,3,3,\ldots)$, but we are unable to approximate $3$ using elements from $B$ that are distinct from $3$. This motivates the following definition:

An **isolated point** of a set $A$ is an element of $A$ that is not a limit point. By negating our definition of limit point, we see that this means that some $\epsilon$-ball around isolated point $a \in A$ contains only one element of $A$: $a$.


## Closed sets

I have a book on real analysis where they define closed sets as any where the complement of the set in question is open. This is not the approach taken in Abbot's *Understanding Analysis*:

A set is **closed** if it contains all of its limit points.

I think I understand why they use the other definition. In the other book, the definition is first presented for general metric spaces, while in this book they immediately use the definition to prove a theorem about $\mathbb{R}$. But why should that matter? First, let's show that they're equivalent.

A set is **closed_1** if it contains all of its limit points. A set is **closed_2** if its complement is open.

**Lemma:** A set $A$ is closed_1 iff it's closed_2.
*Proof:* If $A$ is closed_1, then $x \in A^C$ is not a limit point of $A$ ($A$ contains all of its limit points), so there's some $\epsilon$-ball around $x$ that does not intersect $A$, hence it's entirely contained in $A^C$. So every point of $A^C$ has an epsilon ball that fits inside, i.e. it's open. So $A$ is closed_2.

Conversely, if $A$ is closed_2, then all $x \in A^C$ have $\epsilon$-balls contained entirely in $A^C$. So none of the points of $A^C$ could be limit points of $A$, so all limit points are in $A$, meaning $A$ is closed_1. QED.

To put this in perspective, we need to state and prove this theorem that Abbott introduces immediately after defining closed sets (using closed_1).

**Theorem:** A set $F$ is closed iff every Cauchy sequence in $F$ has a limit in $F$.

This theorem doesn't make sense unless we are in a complete metric space, since you need a complete metric space for every Cauchy sequence to converge. That's why we have the difference in emphasis between the two books. Given that we are talking about $\mathbb{R}$, yes, we should present this theorem up front and talk about complements being open later.

*Proof:* First assume that $F$ is closed. If $\(a_n\)$ is a Cauchy sequence in $F$, then it converges to some $a \in \mathbb{R}$. If each $a_k \neq a$, then by the theorem above $a$ is a limit point of $F$. By hypothesis $F$ is closed, so $a \in F$. If not, $a$ is a term of the sequence, so $a \in F$.

Conversely, if every Cauchy sequence contained in $F$ converges in $F$, then for any  limit point $a$ of $F$, there's a sequence of elements of $F$, all distinct from $a$, that converges to $a$. Since it converges, it's a Cauchy sequence, so by hypothesis $a \in F$.

