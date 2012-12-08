# A Bestiary for Elementary Net Systems

## Net
A **net** is:
                                       
  - a (finite) set $P$ of *places*
  - a (finite) set $T$ of *transitions*.
  - a relation $F \subset (P \times T) \union (T \times P)$, called the *flow relation*

such that:

  - $P \intersection T = \emptyset$
  - every $t \in T$ has $p,q \in P$ such that $(p,t), (t, q) \in F$ (each transition has at least an input and an output)
  - for every pair $(p,q)$ of transition places (places such that $(p,t)$ and $(t,q)$ are in $F$), $p \neq q$.


A net is a bipartite digraph where every transition node has nonzero indegree and outdegree and where there are no cycles of length two.

It is convenient to use relation notation: $xFy$ means that $(x, y) \in F$.


## Pre and post-sets, first go-round
For $X = P \union T$, we define the **pre-set** and **post-set** of an element $x \in X$ to be (resp.):

  - $\bullet x = \{y : yFx\}
  - $x \bullet = \{y : xFy\}

In the case of places we interpret $\bullet x$ to mean "the set of transitions that have $x$ as an output place", $x \bullet$ to mean "the set the transitions that have $x$ as an input place". Same deal for transitions (i.e. for a transition x, $\bullet x$ refers to the set of *input places* of $x$.).


Pre-sets and post-sets allow us to rephrase our definition of net:
