---
path: "/news/new-design"
date: "2018-10-13"
title: "New Website Design"
---
As I finish my degree at UCSB, I wanted to take the time to revamp my website. 

![Gatsby Logo](thumbnail.png)

With the redisign, I decided to take the time to learn some new tech. The first thing I wanted to try out was [React](https://reactjs.org/). React let you write page components in javascript
which is then render as HTML. A cool feature of *React* is the use of a 'Virtual DOM' which smartly renders only the 
changes to the dom, allowing efficient loading without burdening  the developer. I am still learning, but am impressed 
so far. 

![React](react.png)
  
The second new step for me is the use of a static site generator. Since the content of a personal site does not change
minute by minute, it is wasteful to use server sides to re-render it on every page load. Manually creating html
files is pointleslly labor intensive. So instead it is possible to use a static site generator to precompile the website.

There are [dozens of options available](https://www.staticgen.com/). I was interested in one that used React,
so I picked [Gatsby](https://www.gatsbyjs.org/). It is pretty lightweight, and I found it intuitive to setup and quickly 
get started. Another option I may examine in the future is [Next.js] it is another React based site generating framework
that also allows more traditional dynamic site generation.

![Gatsby Logo](gatsby.png)

Why did I pick Gatsby over Next? Well... the answer is a bit petty. Gatsby had a button for quickly deploying to 
[Netlify](https://www.netlify.com) a static web page hosting company. In the past I had used 
[Heroku](https://www.heroku.com/home) but wanted to try out Netlify as it seemed better suited to the task. 
Gatsby providing a one click button that generated a new [GitHub](https://github.com/) project, and auto deploy that project to a new
Netlify instance was a great way of fast tracking to a stable working state without dealing with config files.


Lastly, because I did not want to add learning a new CSS framework all in one go, I opted to continue using 
[Bootstrap](https://getbootstrap.com/) which I was already familiar with. Bootstrap and react has quite a bit of overlap.
Namley Bootstrap is built on top of [jQuery](https://jquery.com/), which doesnt quite fit into the React ethos. However 
some of the UI components and CSS styling is quite handy. Thankfully there is a project called 
[React-Bootstrap](https://react-bootstrap.github.io/) that rewrites the javascript of Bootstrap as React components.

I am a bit of a guinea pig as (when this was written) the stable version of React-Bootstrap only supports Bootstrap v3,
so I am using the beta version so that I can use Bootstrap v4. No problems as of yet.


![React](react-bootstrap.png)

