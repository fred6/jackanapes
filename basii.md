# Basii

This post is about bases of vector spaces and a crucial property of them: that every linearly independent set of vectors can be extended to a basis (and, thus, that every vector space has a basis). There are two sides to this, actually: there's an easy proof that's restricted to finite dimensional vector spaces, and then there's the general proof for arbitrary vector spaces that uses Zorn's Lemma. I will cover both, because the infinite case is not too hard and rather fun.

**Definition:** The **span** of a set of vectors is the set of all linear combinations of the vectors.

**Definition:** A **basis** for a vector space $V$ is a linearly independent set $B$ for which $span B = V$.

**Definition:** A vector space is **finite-dimensional** if a finite basis exists for it.

**Lemma/Theorem/whatever:** A given basis  $B$ determines unique set of coefficients for each $lavex v \in V$ such that $v = \Sigma_i \alpha_i b_i$.

*Proof:* if $v = \Sigma_i \alpha_i b_i = \Sigma_i \xi_i b_i$, then $0 = \Sigma_i (\alpha_i - \xi_i) b_i$. Since $B$ is a basis, it's linearly independent, so each $\alpha_i - \xi_i = 0$, aka $\alpha_i = \xi_i$. QED

Another way of looking (at this is as saying that the function defined from basis set (bases n-tuple, really) to n-tuple of linear combination coefficients is well-defined.

**Theorem:** In a finite-dimensional vector space $V$, any linearly independent set $A = \left\{{y_1, \ldots, y_k}\right\}$ can be extended to a basis $\left\{{y_1, \ldots, y_k, y_{k+1}, \ldots, y_n}\right\} for $V$.

*Fake Proof:*  If $A$ is a basis, we're done. Otherwise, some vector $v_1 \in V$ is not a linear combination of $A$, so set $A_1 = A \cup \left\{{v_1}\right\}$. Now repeat; if $A_1$ is a basis, we're done, otherwise we can find a $v_2$ which is not a linear combination of $A_1$. Since $V$ is finite dimensional, this construction will eventually find a basis. QED.

Why does the fake proof not work? It's actually fine up to the last line, and it would work if we knew that every basis for a vector space was the same size. (To expand on this: "finite-dimensional" at this point simply means that there's some set for which every vector in $V$ is a linear combination of the set. We know there's one such set, but we have no information about what happens when we string together another collection of linearly independent vectors of the same size as the basis.) Since we have not yet proved this, we must resort to a different proof:

*Proof:* Since our previous strategy of adding vectors failed because we couldn't guarantee that it would terminate, we will try the opposite strategy: we have a basis $\left\{{x_1, \ldots, x_n}\right\}$, so let's add *too many* vectors to begin, and take them out until the set is linearly indepenent again.

So we take our linearly independent set $\left\{{y_1, \ldots, y_k}\right\}$ and the basis and smash them together into a tuple: $\left\{{y_1, \ldots, y_k, x_1, \ldots, x_n}\right\}$. This set of vectors is linearly dependent (each $y$ is a linear combination of the basis elements), so by the theorem we proved in the last post, there's one element which is a linear combination of the preceding elements. Furthermore, it can't be one of the $y_i$'s, because those are linearly independent. So there's some $j$ such that $x_j$ is in the span of $A \cup \left\{{x_1, \ldots, x_{j-1}}\right\}$.

The idea is to just remove that $x_j$, resulting in $y_1, \ldots, y_k, x_1, \ldots, x_{j-1}, x_{j+1}, \ldots, x_n$. This set still spans $V$ because any vector requiring a nonzero coefficient of $x_j$ can just use the linear combination to substitute for $x_j$. Keep removing basis elements until the set is no longer linearly dependent. At each step, the span never changes, so the result is a basis. QED.

That was instructive, but let's go for the general case. Halmos indicates that this requires "transfinite trickery", but I'm not so certain about that..

**Theorem:** Every vector space has a basis.

*Proof:* We need an initial result -- the Kuratowski/Zorn Lemma -- which says:

*Kuratowski/Zorn Lemma:* For any poset $P$, if every chain (totally ordered subset) is bounded above, then $P$ has a maximal element.

Now take the set $\mathcal{L}$ of all linearly independent subsets of $V$. This is a poset by set inclusion. For any chain $\mathcal{C}$ in $\mathcal{L}$, the union $\bigcup \mathcal{C}$ is in $\mathcal{L}$ because, for any finite subset $A$ of $\bigcup \mathcal{C}$, there's a linearly independent set $C$ for each $a \in A$ that (1) contains $a$ and (2) is in $\mathcal{C}$. Since it's a chain, the biggest of these chains actually contains all elements of $A$. So every finite subset of $\bigcup \mathcal{C}$ is linearly independent, hence the union is independent. So the union is clearly an upper bound in $\mathcal{L}$. So it satisfies the premises for K/L, and hence $\mathcal{L}$ has a maximal element $M$. This is linearly independent (it's in $\mathcal{L}$), so we simply need to prove that it spans $V$.

If $x \notin M$, we know that $X = M \cup \left\{{x}\right\}$ can't be linearly independent, because $M$ is maximal. So $X$ is linearly dependent, meaning that some finite subset $U$ is linearly dependent. $U$ must contain $x$, otherwise $U$ would be a subset of $M$, making $M$ not linearly independent. Furthermore $U - \left\{{x}\right\}$ is linearly independent, so by a theorem in the previous post, $x$ must be a linear combination of the $U - \left\{{x}\right\}$. Thus $x$ is in $span M$ after all. QED.

The Kuratowski/Zorn Lemma is equivalent to the Axiom of Choice. That's the price of great power.
