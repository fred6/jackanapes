# Manifestations of completeness, part 1

The following statements about the real numbers are actually equivalent:

  - **Axiom of Completeness (AoC)** - Every set bounded above has a least upper bound.
  - **Nested Interval Property (NIP)** - Every sequence of nested (nonempty) closed intervals has a non-empty intersection
  - **Monotone Convergence Theorem (MCT)** - Every bounded monotone sequence converges.
  - **Bolzano-Weierstrass Theorem (BWT)** - Every bounded sequence has a convergent subsequence
  - **Cauchy Criterion (CC)** - Every Cauchy sequence converges.

This post is the beginning of a sequence that will go through the standard sequence by assuming AoC and  proving the rest. Then I will prove enough converses to show that each statement implies the rest.

**AoC => NIP:** Given a sequence $(I_n)$ of nonempty closed intervals $[a_n, b_n]$ (i.e. the set $\{x | a_n \leq x \leq b_n\}$), if for all n $I_n \subseteq I_{n+1}$, then $ \bigcap_n I_n$ is not empty.

<em>Proof:</em> Since we have the axiom of completeness at our disposal and not much else (other than the properties of the real numbers), the proof idea is simply to try to use that. So we need to find a set that's bounded above, then use AoC to obtain a least upper bound, then somehow use that to show that the intersection of the $I_n$'s is nonempty.

Nestedness means that $a_n \leq a_{n+1}$ and $b_n \geq b_{n+1}$, and by hypothesis ($[a_n, b_n]$ nonempty) we must have $a_n \leq b_n$. So for any $ a_k$, for any $j \in \mathbb{N}$, if $j < k$ then $a_k \leq b_k \leq b_j$, and if $j > k$ then $ a_k leq a_j \leq b_j$. So every right endpoint $b_j$ is greater than each left endpoint $a_k$.

Hence, if we form the set $A = \{ a_k : k \in \mathbb{N} \}$, then each $b_n$ is an upper bound. By AoC, A has a  least upper bound $x$. Since each right endpoint $b_n$ is an upper bound, x must minorize it (that is, $x \leq b_n$). Also $x$ is an upper bound of A, so it majorizes every $a_n \in A$. So $x$ is in every $I_n$, meaning it's in the intersection. QED.

We need some definitions before we state and prove the monotone convergence theorem.

A <strong>bounded sequence</strong> is a sequence that fits entirely within some ball around the origin -- it's a sequence for which there's some $M \in \mathbb{R}$ such that $\forall n | x_n | \leq M$.

A <strong>monotone increasing sequence</strong> is a sequence for which for all $n \in \mathbb{N}$, $a_n \leq a_{n+1}$. A <strong>monotone decreasing sequence</strong> is exactly what you think it is.

<strong>AoC =&gt; MCT:</strong> A bounded, monotone sequence converges.

<em>Proof: </em>If sequence $(a_n) $ is bounded above, then it has a least upper bound $x$ by AoC. The hunch is that this sequence converges to $x$ (assuming it's monotone increasing), which we prove as follows: there must be some $k$ such that $x - 1 &lt; a_k$ (if not, then $x - 1$ is an upper bound). All the  $n \geq k$ have $x_n \geq x_k$, a.k.a. $k$ acts, for any $\epsilon &gt; 1$, as the point in the sequence such that all terms of the sequence are in the epsilon ball around $x$ after $k$. We can make this work for arbitrary epsilon by finding an $n \in \mathbb{N}$ such that $\frac{1}{n} &lt; \epsilon$ (because the reals are archimedean) and finding a point greater than $x - \frac{1}{n}$. This puts all terms of the sequence after this point inside the epsilon ball around $x$, so the sequence converges to $ x$.

An identical argument works for monotone decreasing sequences using lower bounds, provided that you've done the footwork to show that AoC implies that every set bounded below has a greatest lower bound. QED.

(Interesting sidebar: MCT allows you to prove that a monotone sequence converges iff it's bounded. It's quite easy to show that every convergent sequence is bounded (in particular, monotone sequences that converge are bounded!), and MCT furnishes the converse.)

Proof of the Bolzano-Weierstrass theorem is next, but I'm pushing it into the next post because I want to prove it in two different ways.


---

[<strong>NIP =&gt; BWT:  </strong>A bounded sequence has a convergent subsequence.

<em>Proof: </em>If $latex (a_n)$ is bounded by M, then we set up the following construction: split $latex [-M, M]$ into $latex [-M, 0]$ and $latex [0, M]$ and set $latex I_1$ equal to one of the half intervals that contains infinitely many terms of the sequence. (There's definitely one, otherwise our infinite sequence is not so infinite. Perhaps both have infinitely many, in which case pick one arbitrarily.)

Now pick an $latex a_k \in I_1$. Set $latex a_{n_1} = a_k$. Consider the subsequence $latex T_k = (a_n)_{n &gt; k}$ of the first $latex k$ elements chopped off of our original sequence $latex (a_n)$ (think of $latex T_k$ as the tail sequence after the first $latex k$ elements).

Now do the damn thing again: Divide $latex I_1$ into closed half intervals and pick one half that contains infinitely many elements of $latex T_k$ and set it equal to $latex I_2$. Then select $latex a_{n_2} \in I_2$ which is in $latex T_{n_2}$.

Finally, the last step is to do this forever.

Do u c wat i did ther? I constructed a nested sequence of closed intervals, each of which is nonempty, also picking out a subsequence along the way, one term for each interval. I'd like to somehow prove that the subsequence I made converges to some limit. Thankfully I have the Nested Interval Property at my disposal, which should be handy. NIP says that there's some element $latex x$ in every single closed interval.

So why does the subsequence converge to $latex x$? First of all, is the thing we made actually a subsequence? Yes, the tail machine $latex T_n$ ensures that after picking some term, we only pick terms farther along in the original sequence. Now for any $latex \epsilon &gt; 0$,  we need to ensure there's a point after which the sequence never escapes the $latex \epsilon$-ball around $latex x$. But clearly our construction was designed to do that! Interval $latex I_k$ has a width of $latex \frac{M}{2^{k-1}}$, so $latex | a_{n_k} - x| \leq \frac{M}{2^{k-1}}$. So pick a $latex N$ such that $latex \frac{M}{2^{N-1}} &lt; \epsilon$ (in particular, just find a $latex \frac{1}{N} &lt; \frac{\epsilon}{2M} $ and take $latex I_{N+1}$. It's not the smallest, but $latex \frac{1}{2^N} &lt; \frac{1}{N}$, so it works.) All $latex n_k &gt; N$ have $latex a_{n_k}$ within $latex \epsilon$ of $latex x$ too, because they are in even smaller intervals. So $latex (a_{n_k}) \rightarrow x$. QED.

That was fun, but it turns out there's another way to prove Bolzano-Weieeiererierirstrass, this time using the monotone convergence theorem. Note that because the original sequence is bounded, any subsequence is clearly bounded too. So if we can find a monotone subsequence, then we have our convergence subsequence!

To prove this the second way, we need a lemma:

<strong>Lemma: </strong>Every sequence has a monotone subsequence.

<em>Proof: </em>Some terms in the sequence, called <strong>peaks</strong>, are strictly greater than every term in the sequence that follows. There are either infinitely many or finitely many of these in any sequence. If there are finitely many of them, after the last one, each term $latex a_j$ in the sequence is <em>not</em> a peak, so some $latex k &gt; j$ is such that $latex a_j \leq a_k$. Using these we have a monotone increasing subsequence.

Otherwise, there are infinitely many peaks. So pick one as $latex a_{n_1}$, then pick another, $latex a_{n_2}$. The first is a peak, so $latex a_{n_1} &gt; a_{n_2}$, and so on. This a monotone decreasing subsequence.

<strong>MCT =&gt; BWT: </strong>

We are nearly done proving our five manifestations from the Axiom of Completeness! Let's finish up with the Cauchy criterion. A definition:

A <strong>Cauchy sequence </strong>is a sequence $latex (a_n)$ such that for any $latex \epsilon &gt; 0$ there's a point in the sequence $latex N$ such that for all $m, n \geq N$, $latex |a_m - a_n| &lt; \epsilon$.

<strong>Lemma:</strong> Every convergent sequence is Cauchy.

<em>Proof: </em>If $latex (a_n) \rightarrow a$, then we can find an $latex N$ for which $latex n \geq N \implies |a_n - a| &lt; \frac{\epsilon}{2}$. So for all $latex m, n \geq N$, $latex |a_m - a_n | \leq |a_m - a| + |a_n - a| &lt; \epsilon$.

Cauchy sequences are sequences where the terms get arbitrarily close to one another. You can see that each convergent sequence is Cauchy, which is somewhat interesting, but who really cares, y'know? It would be something, however, if the converse were true as well. This would give us a useful tool for proving convergence without actually knowing the limit it converges toward.

Feigning ignorance for now, we aren't sure whether every Cauchy sequence converges. But if it did, we would expect the following lemma to be true, since its falsity would ruin our plans (because every convergent sequence is bounded):

<strong>Lemma: </strong>Every Cauchy sequence is bounded.

<em>Proof: </em>If $latex (a_n)$ is cauchy then for some $latex N$ all $latex m, n \geq N \implies |a_m - a_n| &lt; 1$. So for all $latex m \geq N$, $latex |a_m| &lt; |a_N| + 1$. So take $latex M = \max{|a_1|, ..., |a_{N-1}|, |a_N| + 1}$

<strong>BWT =&gt; CC: </strong>A sequence converges iff it is Cauchy.

<em>Proof: </em>Convergent =&gt; Cauchy was proven above. So we need to prove that Cauchy sequence $latex (a_n)$ converges. It's bounded by the lemma above, so by BWT it has a convergent subsequence $latex (a_{n_k}) \rightarrow a$.

To prove that $latex (a_n) \rightarrow a$, the idea is this: the subsequence converges, so we can get some of the sequence terms within $latex \frac{\epsilon}{2}$ of $latex a$. The original sequence is Cauchy though, so we can get <em>every </em>term within $latex \frac{\epsilon}{2}$ of one of subsequence terms. Then by triangle inequality every element is within $latex \epsilon$ of $latex a$.

More formally: there's an $latex N$ s.t. $latex n_k \geq N \implies |a_{n_k} - a| &lt; \frac{\epsilon}{2}$. By Cauchyness, there's an M such that $latex \forall m, n \geq M$, $latex |a_n - a_m| &lt; \frac{\epsilon}{2}$. So fix some $latex n_K \geq \max{M, N}$. Thus $latex |a_{n_K} - a| &lt; \frac{\epsilon}{2}$ and for all $latex n \geq n_K$, $latex |a_n - a_{n_K}| &lt; \frac{\epsilon}{2}$. By the triangle inequality we have our convergence. QED

We have just finished proving AoC =&gt; NIP, AoC =&gt; MCT, NIP=&gt; BWT, MCT =&gt; BWT, and BWT =&gt; CC. We started out on this whole crazy adventure wanting to prove the equivalence of all of these theorems. If we could prove that the Cauchy criterion implies the axiom of completeness, we'd be set. But barring that, we will need to pursue some other collection of converses to give us what we want.

---

Previously I speculated that if we could prove that the cauchy criterion implies the axiom of completeness then our equivalence proof would be done. After thinking about it for all of five seconds, I don't see an easy way. We shall have to proceed more tediously.

<strong>NIP =&gt; AoC</strong>

Given a set $latex A$ which has an upper bound $latex u$, we want to prove there's a <em>least </em>upper bound. The only tool we are to assume is the Nested Interval  Property. Let's try to <a href="http://justfuckingdoit.com">JFDI</a> and see what happens.

We have to construct some nested sequence of closed intervals, and the way NIP works is guaranteeing a nonempty intersection. So it seems clear that the least upper bound will be in the intersection. We can't just construct any old sequence either, because we want to eliminate every upper bound but the least one (notice that a constant sequence is technically nested, so the NIP in this case doesn't tell us anything).

So pick an element $latex a \in A$ and form the closed sequence $latex I_1 = [a, u]$. Let's try cutting it in half each time, as that should get rid of every upper bound but the least one. So form $latex [a, \frac{a+u}{2}]$ and $latex [\frac{a+u}{2}, u]$. $latex \frac{a+u}{2}$ is either an upper bound or not, so either the left half contains an element of $latex A$ and an upper bound or the right half does (but not both!). Set $latex I_2 = [a, \frac{a+u}{2}]$ if the former is true. If it's not true, then $latex \frac{a+u}{2}$ is not an upper bound so there's a $latex b \in [\frac{a+u}{2}, u]$ that's also in $latex A$. Set $latex I_2 = [b, u]$ in this case. (So we're potentially reducing by more than a half). Now repeat this

This is a nested sequence of closed intervals, and in each case the left endpoint is an element of A and the right endpoint is an upper bound of A. By NIP there's a nonempty intersection with $latex x$ in it. This element is an upper bound of $latex A$ because if not then some $latex c \in A$ is greater than $latex x$. But the length of the closed intervals goes to 0, so after some point the intervals are smaller than $latex c - x$, so both $latex x$ and $latex c$ can't be in the intervals after a point. But $latex x$ has to be in each one, so $latex c$ isn't in it, which means the right endpoint can't be an upper bound (since there's an element of A greater than the right endpoint), which contradicts the construction. So $latex x$ is an upper bound.

For similar reasons, $latex x$ must be the least upper bound. If not, there's an upper bound smaller, say $latex v &lt; x$, so after a point the intervals are less than $latex x - v$, meaning an upper bound of A is less than the left endpoint, so the intervals contain no elements of $latex A$.

So $latex x$ is the least upper bound of A. QED.

Moving right along...

<strong>BWT =&gt; MCT:</strong>

Given a bounded, monotone sequence $latex (a_n)$, we want to prove that it converges. By BWT, there's a subsequence $latex (a_{n_k}) \rightarrow a$, so we want to prove that $latex (a_n) \rightarrow a$ as well. If $latex (a_n)$ is monotone increasing, then because there's a $latex n_M$ such that $latex n_k \geq n_M \implies a - \epsilon &lt; a_{n_k} &lt; a + \epsilon$, for any $latex n \geq n_M$ we have $latex a - \epsilon &lt; a_n$. But we have to be able to find some term of the subsequence after the nth term, so there's a $latex n_j &gt; n$ which, by monotonicity, $latex a_{n_j} \geq a_n$, and $latex a_{n_j}$ is inside the epsilon ball around $latex a$ (because $latex (a_{n_k})$ converges), so we have $latex a_n \leq a_{n_j} &lt; a + \epsilon$. This proves that all the $latex a_n$ after $latex a_{n_M}$ are also in the  epsilon ball around $latex a$, so $latex (a_n) \rightarrow a$.

The proof goes through similarly if $latex (a_n)$ is monotone decreasing. QED.

We forge on to prove that  AoC, NIP, MCT, and BWT are equivalent! We've proved AoC implies the other 3, NIP implies AoC, and BWT implies MCT. The only missing component is MCT =&gt; NIP. (We could have skipped BWT =&gt; MCT, but that's no fun!)

<strong>MCT =&gt; NIP</strong>

Given a nested sequence of intervals $latex I_n = [a_n, b_n]$, the sequence $latex (a_n)$ is monotone and bounded. By MCT, it converges, and it's limit (call it $latex a$) must be  in the intersection of all $latex I_n$. For if not, there's a $latex k$ for which $latex a \notin I_k$. Because for all $latex n \geq k$ we have $latex a_n \geq a_k$, the sequence can not stay inside the $latex a - a_k$-ball around $latex a$. So it does not converge, contradicting MCT.

Thus, $latex a$ must actually be in the intersection. QED.

To complete:

<strong>CC =&gt; BWT
</strong>So we're to assume that a sequence converges iff it's Cauchy, and use it to prove that every bounded sequence has a convergent subsequence. Right off the bat we know that we can equivalently prove that any bounded sequence has a Cauchy subsequence, but is that easy to do?

We will try to adapt the orginal proof we used for  BWT (via NIP) by starting with a closed interval $latex [-M, M]$, dividing it into closed halves, and selecting a half with infinitely many terms of it and picking one of the terms arbitrarily. We set the interval as $latex I_1$ and the term as $latex a_{n_1}$, then we divide $latex I_1$ into halves and pick the half with infinitely many terms in it and pick a term in the "tail sequence" $latex T_(n_1)$ of terms of $latex (a_n)$ that come after $latex a_{n_1}$. To see that this subsequence is Cauchy, note that $latex a_{n_k}$ is in $latex I_k$, which has a length of $latex \frac{M}{2^{k-1}}$. So pick $latex k$ big enough for that length to be less than $latex \epsilon$. Since the intervals just get smaller (by half each time), all subsequent terms fit inside $latex I_k$, so they're all within an $latex \epsilon$ of each other. QED.

We have now proven that the five statements are equivalent expressions of completeness. So, ah, ya heard.
