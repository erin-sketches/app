# Lessons learned

* Instead of `npm -g` use `npx preact-cli create simple` to create a project (npx allows you to run npm-hosted binaries without installing them in a random global place)
* Aliasing using npm to replace react/react-dom with preact/compat is much nicer solution than the one on the preact wobsite. Thanks https://fettblog.eu/go-preact/
* `npm run dev` to run dev server (in general, `npm run [script]` to run any command specified in the package.json's scripts section)
    * Javascript will throw `JavaScript heap out of memory` error if you don't tell Node to have bigger heap (wtf?), so make sure to set `export NODE_OPTIONS='--max-old-space-size=8192'`. I did this in the 'package.json' so I don't have to remember.
    * Again... wat?? why??
* There's a difference between
  ```
  import DarkTheme from './plotly-themes.js'
  ```
  and
  ```
  import { DarkTheme } from './plotly-themes.js'
  ```
    * The former is trying to import a "default export" while the latter is trying to import a "named export". Not sure exactly what the distinction is
* You can't use hooks in a class-based component :<
* https://github.com/Ibaslogic/react-context-api and https://ibaslogic.com/react-context-api/ used as reference for more complicated data storage/mutation in Context
* ARGH https://github.com/plotly/plotly.js/issues/3518#issue-407139586
    * Trying to use Webpack externals to get around this, but ... https://github.com/preactjs/preact-cli/issues/1213 ?