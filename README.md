# egg

*egg* is the successor to [egghsell](https://github.com/Wiredcraft/eggshell) and keeps the same overall goal; providing a SASS/Bourbon boilerplate. It was developed originally for building Web apps at [Wiredcraft](https://wiredcraft.com) (things like [devo.ps](http://devo.ps)).

## How to use it?

We tried multiple ways of organizing and distributing egg (formerly an npm module called eggshell). We figured out that the best way for people to use a SASS boilerplate was to be able to override things, rather than use it as a dependency they would need to override to bend it to their will.

We recommend you leave the modules/ folder intact, however the rest is fair game. Change files in defaults/ or choose to not load them, override variables, build your own custom partials. Just go nuts.

## Install

1. Install [Bourbon](http://bourbon.io/):

        gem install bourbon

1. Then install the Bourbon library:

        bourbon install

1. Voilà! You should be able to run `sass main.scss` and get the sass to compile.

Now, the `main.scss` file expects to find Bourbon in `bourbon/bourbon`. If you installed it another way (using the `node-bourbon` npm package for example), you'll need to correct that.
