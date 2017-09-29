## Ember-dressy-table
[![Ember Observer Score](https://emberobserver.com/badges/ember-dressy-table.svg)](https://emberobserver.com/addons/ember-dressy-table)
[![Build Status](https://travis-ci.org/zalando-incubator/ember-dressy-table.svg?branch=master)](https://travis-ci.org/zalando-incubator/ember-dressy-table)

**Ember-dressy-table** is an [Ember.js](https://www.emberjs.com/) addon that includes a powerful component for creating frontends with complicated tables—i.e., involving filtering/sorting/pagination/etc. It aims to balance functionality and extensibility by providing these capabilities/features:

* a custom rendering component for table cells
* dynamic/rearrangeable/toggable columns
* the possibility to send actions from the cell component to upper components
* valid HTML
* easy i18n

You can use this addon out of the box. For the most common use cases, Ember-dressy-table requires only minimal development effort. However, it's open to extension for anyone seeking more sophisticated features.

### Why Ember-dressy-table

We created this addon after discovering that [DataTables](https://github.com/DataTables/DataTables), while popular and mature, made implementing the custom renderer and actions from the cell component rather difficult when working with sophsticated tables. We looked for a mature "native Ember.js" component and found that the most popular option, [ember-light-table](https://github.com/offirgolan/ember-light-table), did not provide valid markup. 

[Ember-contextual-table](https://emberobserver.com/addons/ember-contextual-table), which is similar to Ember-dressy-table (and which directly inspired it), nearly required a full rebuild before we could create dressy columns. We wanted something for Ember.js that was like [Reactable](https://github.com/glittershark/reactable), which enables fast, flexible, and simple data tables in React.

#### User Testimonial: Zalando

We are using this addon in production at [Zalando](https://jobs.zalando.com/tech/), an online fashion platform with +21 million active customers (i.e., at scale!) and it's doing the job. 

This project is **early-stage** and seeks contributors; [please click here](#TODOs-Contributions-Welcome) to review our TODO list. If you decide to use this project, please drop us a line via our Issues tracker to let us know how it helped you solve your technical challenges.

### Core Technical Concepts

As noted by Robert Jackson in [this 2014 article](https://dockyard.com/blog/2014/06/24/introducing_ember_cli_addons), "distribution of reusable Ember.js libraries has been a pain point for quite a while. During application development we have frequently wished for a silver bullet for the sharing of concepts/code from one project to another." Ember-dressy-table aims to address Jackson's point by offering a solution.

Ember-dressy-table leverages the [open/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle), which reinforces that one should be able to extend the behavior of a given software entity without modifying its source code.
 
### Installing

To add this addon into you application use this command:
`ember install ember-dressy-table`

See [docs](https://zalando-incubator.github.io/ember-dressy-table/#/doc-pages/docs) for more details

### Development

Note: You must install [Ember CLI](https://ember-cli.com/user-guide/) to use this addon. 

Then install this addon with just three commands:
* `git clone git@github.com:zalando-incubator/ember-dressy-table.git` this repository
* `cd ember-dressy-table`
* `npm install`

#### Running

Simply follow these three steps:
* `ember serve`
* Visit our dummy app at [http://localhost:4200](http://localhost:4200).
* Visit our tests page at [http://localhost:4200/tests](http://localhost:4200/tests).

#### Running Tests

Again, three steps:

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

#### Building

* `ember build`

More detailed information is available at the [Ember CLI user guide](https://ember-cli.com/user-guide/).

### TODOs: Contributions Welcome

We want to increase quality of this addon by making it more general and stable for the community. We invite you to help us achieve our short-term goals:
- [ ] add filtering feature
- [ ] create a Cookbook site 
- [ ] create an extension with bootstrap styling
- [ ] create an extension with ant-design styling

We appreciate any/all contributions to this project. Before opening a pull request, please:
- give our [contributor guidelines](CONTRIBUTING.md) a quick look
- make sure that all tests (including linting) are green.

### Contact
Please open a GitHub issue on this repo if you have any problems or feedback. We aim to respond to all requests within 48-72 hours of posting. You can also email `chilicoder1@gmail.com` directly.

### License

The [MIT License](https://github.com/zalando-incubator/ember-dressy-table/blob/master/LICENSE.md)

Copyright 2017 Zalando SE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
