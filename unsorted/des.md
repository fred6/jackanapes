# Discrete Event Systems

(From Ramadge and Wonham's two papers)


## Let's generate; generate, please

Describe a generator here. It's a (possibly infinite-state) semiautomaton (aka a (possibly infinite-state) partial Moore machine with no output).

Discuss the digraph interpretation. I think digraph is easier to visualize, which is probably because digraph is the "purely functional datastructure" representation of a semiautomaton, while the normal view is the imperative version. Rich Hickey is so right.

Do the extended transition function. If it weren't a partial function it would be a monoid action of the free monoid $\Sigma^*$ on the state set $Q$. That's interesting.

Also a bit about accessible generators? That notion is in one of the papers but so far not in the other. It is, however, simple enough.


## Throw some D's on that ho

In this section we consider what Ramadge and Wonham called "marker states" of a generator. I just wanted to setup the subsection cause I thought of a funny title (it's funny because I'm going to call the "marker states" the "bling states" or just "bling". It helps me visualize it better and it's a more concise name than "marker state".)


## CDESes

Once we have a generator we consider how to *control* one. We build up incrementally, first by considering some subset $\Sigma_c$ of $\Sigma$ of *controlled* or *controllable* events for the generator. The idea is that some external means of control will be capable of disabling or disallowing these events from happening at some point during the operation of the generator ("control" means we want to force the system into some states preferentially over others, so some of the events of the generator will be disallowed).

So the first ingredient is simply some special set of events that are capable of being disabled. The elements not in this set $\Sigma_c$ will be *uncontrolled* events: the controller has no say in whether they can occur.

Now consider the power set $Pow(\Sigma_c)$. An element of this set (i.e. a subset of $\Sigma_c$) is called a *control pattern* or *control input* or something like that. Consider that some amorphous controller (which we have not formally defined yet) restricts the controllable events to a control pattern $\gamma \in Pow(\Sigma_c)$. That's how the control comes in: at each point in time the controller specifies the allowable events in the form of $\gamma$.

Actually, that's not quite right, because we said that some events were uncontrolled. So at every point in time, the events in $\Sigma - \Sigma_c$ are available as well as the events specified by a subset $\gamma$ of $Pow(\Sigma_c)$. So we need to build a new set by adding the uncontrolled events to each set $\gamma$ in $Pow(\Sigma_C)$. Let's call it $\Gamma$, and say that it's what happens when we take the power set of $\Sigma_c$ and union each element with the uncontrolled events $\Sigma - \Sigma_c$.

An entirely equivalent definition is the following:

$$\Gamma = \{ S \in 2^\Sigma : \Sigma - \Sigma_c \subset S \}$$

A *controlled DES (CDES)* is a pair $(G, \Gamma)$.

(Consider revising this. Perhaps it should be the whole family of DESes induced by applying a control input $\gamma$ in $\Gamma$. Well, we can derive that from CDES as specifed above, so probably just leave the definition but discuss how to derive the family of essentially augmented transition functions, since nothing else changes)

## I want to talk to your supervisor

We have an idea of what the controller should achieve (specifying some control input at each point in time of the generator's operation) but we don't have a formal model yet.

One way to think about it: a given control input $\gamma$ forms a new DES which consists of the original generator G, but with all of the events not in $\gamma$ (the disabled events) deleted from the original graph. A controller would then be some kind of "invisible hand" which manipulates the set of allowed events at each point in time, i.e. switching between different DESes.

Ramadge and Wonham go ahead and call this controller a *supervisor* and model it as a function $L \to \Gamma$.
