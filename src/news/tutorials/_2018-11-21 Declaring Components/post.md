---
title: "Introduction to React Compppnents"
featuredImage: "./featured-image.png"
---

So if you are first starting off with a new framework, you may (like me) want to jump in and start coding from examples before you take the time to systematiccally read through the documentation. After all, there are so many languages and frameworks, it is often helpful to try something out before commiting to the new tech.

My introduction to [React](https://reactjs.org/) was via [Gatsby](https://www.gatsbyjs.org/) which is what this website is built using. When I first started out, I had a few points of confusion that I wanted to clarify in this guide. 

First I will review [React components](https://reactjs.org/docs/react-component.html) to make sure we are on the same page. In the next guide I will go over the different ways we can declare components, as well as the difference between *functional stateless components* and *component classes*. Lastly I will introduce you to component states.


One thing I had difficulty understanding at first is the variations between *functional stateless components* and *component classes*. When looking up introductory examples, you may come across both and it might get confusing as to what is happening. Lets start with a review components.

##Defining Components
At the core of React are [components](https://reactjs.org/docs/react-component.html). You can think of components like reusable HTML tags that can run custom javascript (both server side and client side), can maintain state and re-render on state changes (more on this later), and can take arguments via html properties. 

Say we wanted to create a component that will give us automatic styling for a section of a post. This component will have a *title* and have some *content*. We will create a file component **section.js** which will contain:

```javascript
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

What does all this do? If you haven't used Javascript *modules* or *classes* before some of this syntax may be unfamiliar. 

First we import the *React* module. We create a class we name *Section* extending the *React.Component* class. In this class we **have to** override the *render()* function. In this case we return a standard HTML *div* tag with the class *'section'* containing an *h3* header and some text. Finally we use *export default* to expose our newly created component for reuse in our pages. 

##Using Components
That brings us to putting our component to use.

```javascript
import React from 'react'
import Section from 'section.js'

const pageContent = (
  <Section/>
)
```

Here we import from **section.js**. We don't necessairly have to call it Section in the import as we did in the class definition, but might as well for consistency.

This will output:

<div>
    <h3>A title</h3>
    Section content.
</div>
<br/>


Yay! Wait... but we are just pasting the same text over again. That is not very reusable. That is where **properties** come in.

##Component Properties
Components can take properties in the form of HTML attributes. So lets pass some in.

```javascript
import React from 'react'
import Section from 'section.js'

const pageContent = (
  <Section title="Intro">Some content.</Section>
)
```

Now we need to modify **section.js** to accept them. Thankfully react does all the work by providing a *props* class property.

```javascript
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

Which results in: 


<div>
    <h3>Intro</h3>
    Some content.
</div>
<br/>

Now that's more like it!
