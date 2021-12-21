---
id: clojure
title: Clojure
---

[**Clojure**](https://clojure.org/) is a dialect of the Lisp programming language that runs on the Java virtual machine, Common Language Runtime, and JavaScript engines; the Foundation hosts [some Clojure projects](https://github.com/finos?q=&type=&language=clojure) that can be browsed as examples.

Clojure code can be built and distributed using different build tools, but [Leiningen](https://leiningen.org/) is the only most commonly used at FINOS.  The deployable unit for Leiningen projects is a JAR file and matching POM, which means that Clojure projects can be deployed to any Maven repository.

Wherever appropriate, the Foundation recommends following the [deployment rules for Java](java) (artifact naming and versioning, in particular).

## Badges
Badges can be added at the top of the project's root-level `README.md` file, using the following Markdown syntax:

```
[![Clojars Project](https://img.shields.io/clojars/v/<group id>/<artifact id>.svg)](https://clojars.org/<group id>/<artifact id>)
```

```
[![Maven Central](https://img.shields.io/maven-central/v/<group id>/<artifact id>.svg?maxAge=2592000)](https://search.maven.org/#artifactdetails%7C<group id>%7C<artifact id>%7C2%7Cpom)
```

## Continuous Integration
Check [Travis CI support for Clojure](https://docs.travis-ci.com/user/languages/clojure/) in order to run build, test and deployment processes periodically or on commit.  A ([.travis.yml](https://github.com/symphonyoss/clj-symphony/blob/master/.travis.yml)) is available in the clj-symphony project.

