---
title: "New Website Design"
featuredImage: "./featured-image.png"
---

<div class="img-left img-no-border"  >
<img alt="Website Logo" src="featured-image.png" />
</div>

As I finish my degree at UCSB, I wanted to take the time to revamp my website.



With the redesign, I decided to take the time to learn some new tech. The first thing I wanted to try out was [React](https://reactjs.org/). React let you write page components in javascript
which is then render as HTML. A cool feature of *React* is the use of a 'Virtual DOM' which smartly renders only the
changes to the dom, allowing efficient loading without burdening the developer. I am still learning, but am impressed
so far. I especially love how React uses JSX to blend HTML and javascript together for the easy creation of custom *components*,
which are essentially XML tags you can use in templates that expand out into HTML. This makes very readable object oriented code.

<div class="img-right img-no-border"  >
<img alt="React" src="react.png" />
</div>

The second new step for me is the use of a static site generator. Since the content of a personal site does not change
minute by minute, it is wasteful to use server sides to re-render it on every page load. Manually creating html
files is pointlessly labor intensive. So instead it is possible to use a static site generator to precompile the website. 


There are [dozens of options available](https://www.staticgen.com/). I was interested in one that used React,
so I picked [Gatsby](https://www.gatsbyjs.org/). It is pretty lightweight, and I found it intuitive to setup and quickly
get started. Another option I may examine in the future is [Next.js](https://nextjs.org/) it is another React based site generating framework
that also allows more traditional dynamic site generation.


<div class="img-left img-no-border"  >
<img alt="Gatsby" src="gatsby.png" />
</div>


Why did I pick Gatsby over Next? Well... the answer is a bit petty. Gatsby had a button for quickly deploying to
[Netlify](https://www.netlify.com) a static web page hosting company. In the past I had used
[Heroku](https://www.heroku.com/home) but wanted to try out Netlify as it seemed better suited to the task.
Gatsby providing a one click button that generated a new [GitHub](https://github.com/) project, and auto deploy that project to a new
Netlify instance was a great way of fast tracking to a stable working state without dealing with config files.

Having played around with Gatsby a bit I am fairly happy with my choice. Gatsby has a really gentle learning curve,
where it is possible to start with a basic site in minutes and slowly incorporate plugins and features as you go
to achieve the effect that you want.


<div class="img-right img-no-border"  >
<img alt="React Bootstrap" src="react-bootstrap.png" />
</div>


Lastly, because I did not want to add learning a new CSS framework all in one go, I opted to continue using
[Bootstrap](https://getbootstrap.com/) which I was already familiar with. Bootstrap and react has quite a bit of overlap.
Namely Bootstrap is built on top of [jQuery](https://jquery.com/), which doesn't quite fit into the React ethos. However
some of the UI components and CSS styling is quite handy. Thankfully there is a project called
[React-Bootstrap](https://react-bootstrap.github.io/) that rewrites the javascript of Bootstrap as React components.

I am a bit of a guinea pig as (when this was written) the stable version of React-Bootstrap only supports Bootstrap v3,
so I am using the beta version so that I can use Bootstrap v4. No problems as of yet.



I did run into a cryptic error when deploying to Netlify initially that said:
```
Module not found: Error: Can't resolve 'react-bootstrap/lib/nav' in '/opt/build/repo/src/components'
```

Turns out the problem was that I was doing imports of react as so:

```javascript
import Navbar from 'react-bootstrap/lib/navbar'
import Nav from 'react-bootstrap/lib/nav'
```


This worked on my local machine, but to get it to deploy on Netlify I had to change it to
```javascript
import {Nav, Navbar} from 'react-bootstrap'
```

I will post another update as I learn more.
