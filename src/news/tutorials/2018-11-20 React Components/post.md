---
title: "Introduction to React Components"
featuredImage: "./featured-image.png"
nextPage: "/tutorials/2018-11-26-declaring-components/"
keywords: "react, javascript, components, tutorial, introduction, props, class, gatsby"
---

So if you are first starting off with a new framework, you may (like me) want to jump in and start coding from examples before you take the time to systematically read through the documentation. After all, there are so many languages and frameworks, it is often helpful to try something out before committing to the new tech.

My introduction to [React](https://reactjs.org/) was via [Gatsby](https://www.gatsbyjs.org/) which is what this website is built using. However as I was not familiar with React prior to starting Gatsby and had not used [Es6](http://es6-features.org) when I first started out, I had a few points of confusion that I wanted to clarify in this guide. 

First I want to review how to create and use [React components](https://reactjs.org/docs/react-component.html) to make sure we are on the same page. In the next guide I will go over the different ways we can declare components, as well as the difference between *functional stateless components* and *component classes*. Lastly I will introduce you to component states.


##Defining Components
At the core of React are [components](https://reactjs.org/docs/react-component.html). You can think of components like reusable HTML tags that can run custom javascript (both server side and client side), can maintain state and re-render on state changes (more on this later), and can take arguments via HTML attributes. 

Say we wanted to create a component that will give us automatic styling for a section of a post. This component will have a *title* and have some *content*. We will create a file component **section.js** which will contain:

```jsx
import React from 'react'

class Section extends React.Component {
  render() {    
    return (
      <div className="section">
        <h3>A title</h3>
        Section content.
      </div>
    )
  }
}

export default Section
```

What does all this do? If you haven't used Javascript *modules* or *classes* before, some of this syntax may be unfamiliar. 

First we import the *React* module. We create a class we name *Section* extending the *React.Component* class. In this class we **have to** override the *render()* function. In this case we return a standard HTML *div* tag with the class *'section'* containing an *h3* header and some text. Finally we use *export default* to expose our newly created component for reuse in our pages. 

##Using Components
That brings us to putting our component to use. 

```jsx
import React from 'react'
import Section from 'section.js'

const pageContent = (
  <body>
    <Section/>
  </body>
)
```

Here we import from **section.js**. We don't necessarily have to call it Section in the import as we did in the class definition, but might as well for consistency.

We store the resulting HTML node in a constant called *pageContent*. Depending on how you are using React you can now display it. For example passing the page content to **ReactDOM.render()**:

```jsx
ReactDOM.render(
  pageContent, 
  document.getElementById('root')
)
```

Will output:
___

<div>
    <h3>A title</h3>
    Section content.
</div>
<br/>

___
Yay! Wait... but we are just pasting the same text over again. That is not very reusable. That is where **properties** come in.

##Component Properties
Components can take properties in the form of HTML attributes. So lets pass some in.

```jsx
import React from 'react'
import Section from 'section.js'

const pageContent = (
  <Section title="Intro">Some content.</Section>
)
```

Now we need to modify **section.js** to accept them. Thankfully react does all the work by providing a *props* class property.

```jsx
class Section extends React.Component {
  render() {    
    return (
      <div className="section">
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}
```

Note the **props.children** property. This a unique prop that is used to access all the nodes wrapped by the tag, in this case the text node "Some content.". 
Which results in: 
___

<div>
    <h3>Intro</h3>
    Some content.
</div>
<br/>

___
Now that's more like it!


##Default Props
While our *Section* component may not benefit much from default values to the props, in other situations it may be beneficial to set default values in the event that no attribute was passed to the HTML tag. For this we have **defaultProps** class property. Simply set it to an object with the names of the props you want to set to default values as keys. 

```jsx
import React from 'react'

class Section extends React.Component {

  render() {
    return (
      <div className="section">
        <h3>{this.props.title}</h3>
        {this.props.children}<br/>
        <em>{this.props.footer}</em>
      </div>
    )
  }
}

Section.defaultProps = {
  title: "Introduction",
  footer: "Footer"
}

export default Section
```


Now if we use the tag:


```jsx
import React from 'react'
import Section from 'section.js'

const pageContent = (
  <Section >Some content.</Section>
)
```

We get the expected result of showing the default values of the title and footer.
___
<div>
    <h3>Introduction</h3>
    Some content.<br/>
    <em>Footer</em>
</div>
<br/>

___

##Wrapping up
So far we have been writing components as *component classes*. However if you have looked up examples of React code you may see components expressed in a different syntax. In the next tutorial I will go over the difference between *functional stateless components* and *component classes* and when to use each. 