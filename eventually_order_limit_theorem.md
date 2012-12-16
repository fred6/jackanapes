#"Eventually" & the Order limit theorem

In this post I will discuss the Order Limit Theorem and its slight generalization using the notion of "eventually".

First, the Order Limit Theorem.

**Order Limit Theorem:** Assume $(a_n) \rightarrow a$, $(b_n) \rightarrow b$. Then:

  - If $\forall n a_n \geq 0$ then $a \geq 0$.
  - If $\forall n a_n \geq b_n$ then $a \geq b$.
  - If there's a $c \in \mathbb{R}$ for which $\forall n a_n \geq c$, then $a \geq c$. Ditto for the dual case of $a_n \leq c$.

*Proof:* (1) If each term of $(a_n)$ is nonnegative, then the limit $a$ couldn't possibly be negative because if it were, then you  could take $\epsilon = |a|$ and not be able to find any terms of $(a_n)$ within the $\epsilon$-ball (since each term is at least zero).

(2) If for each $n$, $a_n \geq b_n$, then since these two sequences converge, we can form the sequence $(a_n - b_n)$ which converges to $a - b$ by the Algebraic Limit Theorem. Each term of this new sequence is greater than zero, so by (1) $a - b > 0$, or $a > b$.

(3) We can make a sequence $(c_n)$ where $c_n = c$ for all $n$. Then apply (2) to get $a \geq c$ (or $a \leq c$ if that's how you roll). QED.

We need this definition:

A sequence $(a_n)$ is **eventually** in set A if there's a point $N$ after which terms of $(a_n)$ are all in $A$ (i.e. $n \geq N \implies a_n \in A$).

I'm a big fan of decomposing definitions, and you can see that in some sense this defintion should come prior to the definition of the limit of a sequence. Let's refactor the definition of a limit:

The **limit** of a sequence $(a_n)$ is a number $x$ such that, for any $\epsilon > 0$, the sequence is eventually in $(x - \epsilon, x + \epsilon)$.

And now for the crown jewel:

**Slightly Generalized Order Limit Theorem:** Assume $(a_n) \rightarrow a$, $(b_n) \rightarrow b$. Then:

  - If $\exists N \forall n \geq N a_n \geq 0$ then $a \geq 0$.
  - If $\exists N \forall n \geq N a_n \geq b_n$ then $a \geq b$.
  - If there's a $c \in \mathbb{R}$ for which $latex \exists N \forall n \geq N a_n \geq c$, then $a \geq c$. Ditto for the dual case of $a_n \leq c$.

*Proof:* (1) Suppose $a < 0$. As before, we can take $\epsilon = |a|$. Then $(a_n)$ can not eventually get inside $(a - \epsilon, a + \epsilon)$ because after $N$, each $a_n$ is nonnegative. So $a \geq 0$.

(2) Use (1) as above.

(3) Use (2) as above.
