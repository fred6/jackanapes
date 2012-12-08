# Bisimulation

## Labeled Transition System
Essentially a set of states and an indexed family of digraphs on the set. But since a digraph is really just a set and a binary relation on the set, you can technically just call it a set and an indexed family of binary relations on that set. The mental picture of a graph is helpful, though.

## How does it relate to a semiautomaton?

I use the definition from a book on Algebraic Automata Theory that I'm too lazy to look up the name or author of right now. A *semiautomaton* is a triple $(Q, \Sigma, \delta)$ where $Q$ is the set of states, $\Sigma$ is the finite input alphabet and $\delta$ is a partial function $\Sigma \times Q \to Q$ thought of as the transition function.

We can take the exploded view, however, by currying the transition function and turning it into an indexed family of transition mappings $Q \to Q$, one for each $a \in A$. This is not equivalent to an LTS since each transition mapping is a partial function and not any old relation (in particular, an LTS can transition to multiple different states by following a single input, apparently, as it's allowable by the formalism above). But it can be thought of as an instance of an LTS.


# Simulation between LTSes
If $(U, A, {X_a}_{a \in A})$ and $(V, A, {Y_a}_{a \in A})$ are LTSes, a **simulation** of $U$ in $V$ is a relation $\Xi \subset U \times V$ for which the following holds:

$$ u \Xi v \implies \forall a \in A (\exists u_1 u X_a u_1) \implies (\exists v_1 v Y_a v_1, u_1 \Xi v_1)$$

In words, $u$ and $v$ are related under "simulation" if, for any input symbol $a$, each transition out of $u$ via $a$ has a corresponding transition out of $v$ via $a$, and the targets of each of those transitions are related under simulation.

It means that if you're interested in labeled transitions out of $u$ in LTS $U$, you could do just as well to start in $v$ in LTS $V$ provided that $u$ and $v$ are related under simulation.

## Bisim on LTSes

A bisimulation between 2 LTSes is a double simulation: it means S' can simulate computation of S that starts in any element of dom B and S can simulate any computation of S' that starts in cod B.


My question is: in Rutten's definition of Bisimulation of Moore automata, what happens if you change it from using "only if" to using  "iff".



## Recursive

The definition of bisimulation looks like a recursive definition. You're saying that two states are related under bisimulation if they have the same output and if both the machines following any valid input causes the next states to be related under bisimulation. So it says that the two machines have the same output now and in the future (following any sequence of inputs from the present state).

Bisimulation does *not* imply that the machines give identical outputs in all circumstances, because one machine might still have states that do not correspond. Blah I don't fully understand bisimulation/bisimilarity yet.
