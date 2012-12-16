# Euclid's Elements, Book 1

The postulates and propositions that Euclid deals in seem to come in two flavors: constructions and facts. It is interesting to note that three of Euclid's five postulates are construction postulates, while the last two, including the fifth, the infamous *parallel postulate*, are facts. I like to think of the constructions as subroutines you can execute.

**Postulates**
  - Subroutine SLS(Point p1, Point p2) takes two points and produces a straight line segment
  - Subroutine SL(LineSegment seg) takes a straight line segment and extends it to an infinite line containing the  line segment
  - Subroutine Circ(LineSegment seg, Point p) takes a straight line segment and a point and creates a circle at the point with a radius equal to the length of the line segment
  - All right angles are equal to each other
  - If a straight line falls across two other straight lines and the resulting internal angles sum to less than two right angles, then extending these lines infinitely will result in the the lines meeting on the same side (i.e. the internal angles will form the base angles for a triangle).

I'm going to assume that you know what points, lines and circles are. The only thing you may be confused about is the definition of *right angle*, which is "angles that result when a straight line stands on another straight line and the adjacent angles that they form are equal". Postulate 4 then asserts that two pairs of right angles are all equal to one another.

Right then, let's prove some propositions.

**1.1. Constructing an equilateral triangle from a given straight line segment**

    define EqTri(LineSegment seg):
        circ1 = Circ(seg, seg.p1)
        circ2 = Circ(seg, seg.p2)
        C = arbitrary point from intersection of circ1 and circ2.
        X = SLS(seg.p1, C)
        Y = SLS(seg.p2, C)
        return Tri(seg, X, Y)

(Note that I've assumed that a straight line segment has two c fields, p1 and p2, which I've implicitly assumed are the extremities of the line segment)

EqTri returns an equilateral triangle of which <code>seg</code> (say with extremity points A and B) forms one of the sides. To see this, note that C is seg's length from A and seg's length from B. Thus the returned triangle has each side equal to the length of seg.

**1.2 Given a point and a straight line segment, you can draw a straight line segment of equal length at the point**

    define MoveSLSToPoint(Point P, LineSegment seg):
        B = seg.p1
        C = seg.p2
        L = SLS(P, B)
        T = EqTri(L)
        Circ1 = Circ(seg, B)
        Z = the point of T that isn't B or C
        E = the point where LS(SLS(Z, B)) cuts Circ1
        Circ2 = Circ(SLS(Z,E), Z)
        F = the point where LS(SLS(Z,P)) cuts  Circ2
        return SLS(P, B)

The crux is that ZP and ZB are equal length since they are the sides of an equilateral triangle, and BE is  equal in length to our given segment BC by construction (the circle), so using ZE as the radius for a second circle, we get a line ZF which is equal in length to ZE by construction. Subtracting from ZP from ZF we get PF, which is equal to ZE - ZB = BE = BC. So we just moved the line to P.

**1.3 Given two unequal lines, you can cut the greater off to the length of the lesser.**

    define CutOff(LineSegment greater, LineSegment lesser):
        M = MoveSLSToPoint(greater.p1, lesser)
        C = Circ(M, greater.p1)
        E = point where greater cuts C
        return SLS(greater.p1, E)

We use 1.2 to move the lesser to one of the endpoints of the greater segment. Then we cut off a lesser-sized segment from greater using a circle.
