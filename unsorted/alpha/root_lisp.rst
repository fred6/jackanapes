===================
Introduction to Occult Computing with Ur-Lisp
===================

I'm rewriting Paul Graham's `<"The Roots of Lisp" http://www.paulgraham.com/rootsoflisp.html>`_. Not because I expect to improve on it, however. Primarily for to make a great understanding.

Greetings, initiate.

As a new member

There are many varieties of demon-gods

Lisp is a demon wizard that powerful sorcerors have managed to trap in a box. This demon (god, really, if we're being honest) can perform dangerous magicks and is forced to do as we command. How do you command what is essentially an elder god to cast spells for you? You inscribe magickal symbols on a scroll, ya dingus. Didn't you pay attention during school? You might try opening up a `<spell book http://mitpress.mit.edu/sicp/>`_ once in a while and studying. You might learn something. 

Anyways, the catch is that the collection of symbols needs to conform to certain rules in order to ensure that the demon can understand what we want it to do. We may have enslaved an immensely powerful ageless horror to do our bidding, but it's not *omniscient*, and you can thank your lucky stars it's not telepathic. Our instructions have to be exact.

So what are the rules?

It might be easiest to list some examples of instructions which our pet god will not recognize. These are all nonsense, as far as Lisp is concerned:

::

    hey dude. can u plz make me a sandwich? frickin starvin here lol

::

    $$ \int e^{x} dx $$

::

    2 + 2

::

    Ἰδοὺ ἔρχεται μετὰ τῶν νεφελῶν, καὶ ὄψεται αὐτὸν πᾶς ὀφθαλμὸς καὶ οἵτινες αὐτὸν ἐξεκέντησαν, καὶ κόψονται ἐπ' αὐτὸν πᾶσαι αἱ φυλαὶ τῆς γῆς. ναί, ἀμήν.    


::
    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, world!");
        }
    }

::

    Due to his own original special nature, the Jew cannot possess a religious institution, if for no other reason because he lacks idealism in any form, and hence belief in a hereafter is absolutely foreign to him. And a religion in the Aryan sense cannot be imagined which lacks the conviction of survival after death in some form. 




The actual symbol is something that would liquify your occipital lobe if you looked at it, so others have established a helpful stand-in!


Lists
=====

Everyone knows what a list is. Behold, a grocery list:

  1. Bananas
  2. Bread
  3. Green peppers
  4. Eggs
  5. Ice cream


The Seven Unutterables
======================

 - quote
 - atom?
 - eq?
 - first
 - rest
 - cons
 - cond



 "The interface between our world and a cold cosmos replete with writhing horrors.



Lambda the Ultimate
===================
([lambda (p1 ... pn) expr] a1 ... an)




Now you may be thinking: "Who cares about this crap? Why did I read this far? This is boring. I hate you."




Metacircular Demonology
=======================
