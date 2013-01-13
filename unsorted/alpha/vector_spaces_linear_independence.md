# Vector spaces and linear independence

If you go back to my earlier post in November 2012  (which I am too lazy to link to), you will find that I talked about fields already. So I will briefly restate:

A **field** is a non-trivial commutative ring where every non-zero element has a multiplicative inverse.

A **vector space** is a triplet $(F, V, \ast: F \times V \rightarrow V)$ where $F$ is a field, $V$ is an abelian group, $(V, \ast$ is a <a href="http://en.wikipedia.org/wiki/Group_with_operators">group with operators</a> (i.e. currying $\ast$ with each $f \in F$ yields a group endomorphism on $V$) and where the following three postulates hold:

  - $(a + b) \ast v = a \ast v + b \ast v$
  - $(ab) \ast v = a \ast (b \ast v)$
  - $1 \ast v = v$

(Interestingly, the last 2 properties say that $\ast$ is a monoid action of $F$ on $V$ (since the multiplication operation is a monoid in a field).)

The elements of the field $F$ are called **scalars**.

If you take some set $x_1, \ldots, x_n$ of vectors and some corresponding set $a_1, \ldots, a_n$ of scalars, and form the sum of products $a_1 x_1 + \cdots + a_n x_n$, this result is called a **linear combination** of the vectors.

Now, a set of vectors $\left\{{x_i}\right\}$ is **linearly dependent** if there exists a set $\left\{{a_i}\right\}$ of scalars for which one of the scalars $a_k$ is nonzero and $\Sigma_i a_i x_i = 0$. A set is **linearly independent** if $\Sigma_i a_i x_i = 0$ implies $a_i = 0$ for all $i$. That is, linearly independent means that the only way for a linear combination of the vectors to result in the zero vector is for all the scalars to be zero.

(I'm going off of Halmos for this, and he does something a bit strange by defining linear independence vacuously as well. So the empty set is linearly independent vacuously because it cannot possibly be linearly dependent (there is no non-zero scalar to be found)).

This is a pretty abstract definition (why do we care about how to get zero from linear combinations?), but the importance is revealed by the following lemma:

**Lemma:** If the set of vectors $\left\{{x_i}\right\}$ is linearly independent then $x$ is a linear combination of the $\left\{{x_i}\right\}$ iff $\left\{{x}\right\} \cup \left\{{x_i}\right\}$ is linearly dependent.

*Proof:* Supposing the $x_i$'s are linearly independent, then if $x$ is a linear combination of them, then for some set of $b_i$'s, $x = \Sigma_i b_i x_i$. So we can take $b = -1$ and get $b x + \Sigma_i b_i x_i = 0$ and at least one of the scalars is nonzero, proving that adding $x$ to the $x_i$'s makes the new set linearly dependent.

For the converse, assume that the $x$ plus $x_i$'s are linearly dependent. So either $b \neq 0$ or some $b_k \neq 0$ for $b x + \Sigma_i b_i x_i = 0$. If $b \neq 0$ then we can divide the whole equation out by $b$ and subtract the linear combination of $x_i$'s to the other side, which expresses $x$ as a linear combination of the $x_i$'s (which is what we're trying to find). So suppose that $b = 0$ and that some $b_k \neq 0$ instead. We have:

$bx + \Sigma_i b_i x_i = 0 + \Sigma_i b_i x_i =\Sigma_i b_i x_i = 0$

And $b_k \neq 0$, so the $\left\{{x_i}\right\}$ is linearly dependent, contrary to our first assumption. So $b \neq 0$ and $x$ is a linear combination of the $x_i$'s. QED.

Actually, we didn't need that lemma to see the significance of the "linearly dependent" definition, because the key idea is that, with a linearly dependent set, some linear combination of the vectors with one of the scalars nonzero, call it $b$, results in the zero vector, so we can divide the equation by $-b$ to express one of the vectors as a linear combination of the others. That's really the main point: we could throw away one of the vectors and still not miss it (due to being able to reconstruct it as a linear combination of the others).

To round out this post I will finish with what Halmos calls "the fundamental result concerning linear dependence":

**Theorem:** The n-tuple $(x_1, \ldots, x_n)$ is linearly dependent iff there's some $k$, $2 \leq k \leq n$ for which $x_k$ is a linear combination of $\left\{{x_1, \ldots, x_{k-1}}\right\}$.

*Proof:* $(\Rightarrow)$ If $(x_1, \ldots, x_n)$ is linearly dependent, then pick the smallest $k$ such that $x_1, \ldots, x_k$  is linearly dependent (we could, at the very least, select $k=n$. Since the set of all $j$ such that $x_1, \ldots, x_j$ is linearly dependent is nonempty, by the well-ordering principle it has a smallest element.) $\left\{{x_1, \ldots, x_{k-1}}\right\}$ must be linearly independent, for if it were otherwise, it would contradict $k$ being smallest. In addition, adding $x_k$ to it makes it linearly dependent, so $x_k$ must be a linear combination of the preceding elements by the lemma above.

$(\Leftarrow)$ Clearly the converse holds. If one of the $x_k$ is a linear combination of the preceding vectors, then we can obtain zero with $\Sigma_{i=1}^{k} (a_i x_i) - x + \Sigma_{i=k+1}^{n} 0 x_i$.
