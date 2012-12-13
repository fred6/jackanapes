# Interior angle of a regular n-gon

A brief note on what probably everybody realized a long time ago. (Apologies, everybody)

Step 1 is to realize that you can partition a regular n-gon into n isosceles triangles, where the legs of each triangle go from the center of the n-gon to a vertex. draw a circle around the center of the n-gon. circles span $ 2 \pi$ degrees, so the top angles of the n isosceles triangles must add up to $ 2 \pi$. so we can say that each isosceles triangle has one angle

$ \psi = \frac{2 \pi}{n}$

and two other angles

$ \theta = \frac{\pi - \psi}{2}$

After some magic, it is easy to see that $ \theta = \frac{\pi(n - 2)}{2n}$.

Now, to get from one side of the n-gon to an adjacent side, we have to go through an angle of $ 2 \theta = \frac{\pi (n - 2)}{n}$. But there are n sides, so we must go through n angles of $ 2 \theta$, or

$ \pi (n - 2)$

So a regular n-gon has $ \pi (n - 2)$ interior angle.
