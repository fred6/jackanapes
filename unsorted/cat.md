A category is a quiver where each path has an associated arrow with the same start/end points and where each point (object) has a distinguished endo-arrow which behaves like a two-sided unit under path composition.

A subcategory is a sub-quiver which is also a category under composition & identities from the supercategory. (Alternatively: a subcategory is one where the inclusion mapping forms a functor!)

A full subcategory is a subcategory where each homset in the subcat is equal to the homset in the cat (it's not a proper subset).

The dual of a category or the opposite category is the one where each arrow in the original category has its direction (i.e. source and target) swapped in such a way that compositions are preserved. What about identities? Well, since idA * f = f * idB = f, we must have this in the dual category: f = f * idA = idB * f. This is because compositions are preserved. In other words, stipulating the composition condition in the definition of the dual category automatically gets us preservation of identities.

A free category is minimally constrained. We assume that all paths of a quiver yield a new arrow. (Same as, say, a free monoid. Each product of monoid elements is a new element of the free monoid. Products never collapse back into another element).
