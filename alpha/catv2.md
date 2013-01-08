The starting point is a graph. (picture of a graph). Actually, there are many different kinds of graphs. This is more specifically a *simple* graph. It means there are no single-node loops and there are at most one edge between two nodes.

If we relax these constrains we get a quiver. (picture of a quiver). One way to formally define a quiver is this:

A quiver is a collection of objects and a collection of arrows between objects.


(Insert lots of examples of quivers here?)


We think of the arrows as *functions*, and we'd like tack on an algebra of arrows so that we get a structure that has some of the familiar  properties of function composition. The big ones are these:

  - any two compatible arrows can be *composed* to form another arrow
  - composition is associative: h o (g o f) = (h o g) o f
  - every object has an identity morphism
  - composing any arrow with an identity arrow on either side has no effect.

Another way of looking at associativity is that each *path* has associated with it a unique composite arrow. The property of identity arrows means that they can be added or removed from any path without affecting the resulting composite.
