========================
Learn You a Z-Combinator
========================

http://news.ycombinator.com/item?id=875982

"The Y combinator only works in languages with either a lazy or call-by-name evaluation strategy. If you run it in a language with an eager evaluation strategy then it actually would result in an infinite loop. For those languages you would have to use the Z combinator or an equivalent. The z-combinator is just the Y combinator with the argument wrapped in a thunk to prevent premature evaluation."

 =>

In computer science, a thunk (also suspension, suspended computation or delayed computation) is a parameterless closure created to prevent the evaluation of an expression until forced at a later time.


We start at the beginning, with Omega:


((lambda (x) (x x)) (lambda (x) (x x)))

Evaluating this expression results in infinite recursion. The left lambda gets called with the right lambda as input, which means we have to evaluate:

((lambda (x) (x x)) (lambda (x) (x x)))

Which leads to us having to evaluate:


((lambda (x) (x x)) (lambda (x) (x x)))



We can easily use this construct to create a higher-order function which makes an arbitrary function `f` call itself an infinite number of times:

((lambda (f) 
         (lambda (x) (f (x x))) (lambda (x) (f (x x)))))




Things that go Thunk in the night
=================================
