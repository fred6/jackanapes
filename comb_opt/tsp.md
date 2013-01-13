# Traveling Salesman Problem

The objective in the traveling salesman problem is to find a minimal Hamiltonian cycle for a given complete weighted graph. This article aims to explain precisely what that sentence means. If you already understand what that sentence means, your time will probably best be served by doing something else (though you're welcome to stay for the pictures).

## Simple graphs, complete graphs, weighted graphs

A graph is a collection of nodes and edges (lines) that connect the nodes. A graph looks like this:

<canvas id="simple_graph" width="560" height="300"></canvas>

To be pedantic, we should actually stay that this is a *simple* graph, since that is what we have in mind here. A simple graph is a graph with no single-node loops (no edges from a node to itself) and at most one edge between any two nodes. (There are types of graphs that violate these two constraints. For example, if you ever study category theory, you will see that a category is based on a type of graph, called a quiver, with both multiple edges between a pair of nodes and single-node loops allowed.) It is fine to not have an edge between a given pair of nodes, and, as you can see, a node need not be connected to another node at all. In the above graph we have a lonely node floating disconnected from the rest of the graph.

Note that we are talking about undirected graphs here, since the edges have no notion of order. We could talk about directed graphs instead, in which case the lines in the picture above would be replaced with arrows to signify that edge $(a,b)$ is different from edge $(b,a)$. We will stick with undirected graphs.

There is a particular class of graphs that we are interested in for TSP, and that is *complete* graphs. These are the graphs that have every possible edge for a given set of nodes. So for every pair of (distinct) nodes $a$ and $b$, the edge $\left\{a,b\right\}$ exists in the graph.

This is what the graph above looks like when we fill in the missing edges to make it complete:

<canvas id="complete_simple_graph" width="560" height="300"></canvas>

The second wrinkle we need to add is a *weighted* graph. A weighted graph is just a graph with numbers attached to every edge. These numbers might represent distances, in which case the nodes could represent places. We are not concerned with what they represent; we only care about the structure here.

To be clear, weighted graphs need not be complete. We can slap numbers on the edges of any old graph. But in this case we are looking at complete weighted graphs:

<canvas id="weighted_complete_simple_graph" width="560" height="300"></canvas>

I'm going to formally define all of the above now. It may cause the eyes of some readers to gloss over, but I personally have always hated when writers discuss mathematical structures without specifying everything in terms of sets, tuples and functions. I like to know precisely what I'm dealing with.

A **simple graph** (or **graph**) is a pair $(V, E)$ where $V$ is any set, the **nodes** of the graph, and **E** is a collection of two-element subsets of **V**, called the **edges** of the graph.

A **complete graph** is a simple graph where $E$ is the collection of *all* two-element subsets of **V**.

A **weighted graph** is a triple $(V,E,w)$ where $(V,E)$ is a graph and $w:E \rightarrow \mathbb{R}$  is a function which assigns **weights** to every edge in the graph.

## Hamiltonian cycles
