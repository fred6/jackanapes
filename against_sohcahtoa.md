# Against SOH CAH TOA

In my high school trig class, I was taught that sine is a function *defined by* the ratio of:

    O = length of the side opposite an angle in a right triangle

to:

    H = the length of the hypotenuse of that same right triangle

Similar definitions were presented for cosine and tangent. In fact, we were taught to just memorize these relationships using SOHCAHTOA, which I dutifully did. This is a horrible approach which resulted in my failing to understand these trigonometric functions for more years than I'd care to admit. I don't know the best way of conceptualizing the trig functions, but I'll share what

I didn't feel like I understood sine until it felt motivated enough that I could have plausibly invented it on my own. The first time I felt that was when I realized you could begin a definition of sine as follows:

    Sine is the projection of a point on the unit circle onto the y-axis

    (Ditto a definition for cosine, replacing "y-axis" with "x-axis")

In other words, sine is the height of a point on the unit circle. You don't really even need the idea of a triangle for this definition, you could simply introduce it to usefully characterize the points on a unit circle. This is an incredibly simple definition and, most importantly for me, the definition is *motivated*: I feel like I could have come up with this idea by myself.

Using the above definition, however, we have a problem: we can only say something about unit circles. If we try to say something about an angle inside a circle of radius 2, sine gives us a measure that is twice what it gives for the same angle in the unit circle. This is a problem, since we want sine to be a device for giving us information strictly about the angle, and not about the size of the circle it's embedded in. We need to modify our definition of sine so that it becomes a measure that throws out any information about the radius:

    Sine is the projection of a point on a circle onto the y-axis, divided by the radius of the circle

This is a better definition for sine in my book, since we don't strictly need a right triangle in order to have an angle. Angles are really about circles (in my book, an angle is *defined by* the ratio of the arc length that subtends it to the radius of the circle.), it just happens that we can turn "the radius of a circle" into the hypotenuse of a right triangle (and vice versa) so that the definitions are equivalent.

## What about tangent?

True, the above only works for sine and cosine. But once you understand those two, tangent is pretty easy: for $ (- \frac{\pi}{2}, \frac{\pi}{2}) $, tangent is the slope of the hypotenuse. For $ (\frac{\pi}{2}, \frac{3\pi}{2}) $, tangent is the negative slope of the hypotenuse.

## No, really, what about tangent?

You weren't satisfied with that description, either, huh?  Well, take a look at these images (from Wikipedia):

![Unit circle definitions](/images/Unitcircledefs.svg)

![Unit circle co-definitions](/images/Unitcirclecodefs.svg)

This gives us an understanding of tangent that is more in line with the idea of a "tangent line": it's the length of the side tangent to the circle at the point, where the triangle is defined by having the same angle as our original angle and having one side be 1 (the radius of the unit circle). That first image also encapsulates the well known relation:

    $$ tan^2(\theta) + 1 = sec^2(\theta)$$

It also shows us why the tangent function blows up as the angle approaches $ \pi/2$: that side of the triangle gets enormous. At $ \theta = \pi/2$,  tangent isn't defined because you can't make the triangle.

## Duality

The other interesting feature of the trig functions is apparent when looking at both the above images. There is an obvious duality here, mirrored in the names of the functions. The first image is about Sine, Tangent, and Secant, while the second image is about **Co**sine, **Co** tangent, and **Co**secant. The duality here is because in a right triangle, the two non-right angles are complementary, such that the sine of one angle is the cosine of the complementary angle, the tangent of one angle is the cotangent of the other, etc. You could actually just get by with three of the functions (say sine, tangent and secant), and define the others in terms of complementary angles. A mathematician would say that these pairs of functions are **dual**.
