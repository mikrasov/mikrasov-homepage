---
title: "Declaring React Components"
featuredImage: "./featured-image.png"
_nextPage: "/tutorials/2018-11-30-component-states/"
prevPage: "/tutorials/2018-11-20-react-components/"
keywords: "react, javascript, components, class components, functional Stateless Components,  tutorial, introduction, props, class, gatsby"
---
One thing I had difficulty understanding at first is the variations between *functional stateless components* and *component classes*. When looking up introductory examples, you may come across both and it might get confusing as to what is happening. 

## Component Classes
Lets start with the component we wrote last time.

```jsx
import React from 'react'

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

export default Section
```

This is called a component class. Writing a component in this form gives us a lot of flexibility as we can override [lifecycle functions](https://reactjs.org/docs/react-component.html) of the component such as:
- render()   (**required**)
- constructor()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

And allows us to pass in and maintain state. Which we will talk about later. 

However this form is also very verbose. Note: in our example we are not overriding any other function and our component does not keep state. So we do a lot of setup with little reward.

Luckily there is a shortcut to writing basic components like ours called *functional stateless components*.

##Functional Stateless Components
An alternate (equally valid) way to write a [React Component]() is as a function that takes the argument *props* and returns a single HTML node. We can rewrite our earlier class as the function bellow:

```jsx
import React from 'react'

function Section(props) {
    return (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
    )
}

export default Section
```

Note that now we no longer need to extend the **React.Component** class nor specify a **render()** function. Instead we return the node directly.

Another change is we no longer need to access props via a call to **this** as the props are now passed directly as an argument.

Something that is non obvious is we still need the statement:
```jsx
import React from 'react'
```

Since our React components are written in [JSX](https://reactjs.org/docs/introducing-jsx.html) the functional component secretly [transpiles](https://www.stevefenton.co.uk/2012/11/compiling-vs-transpiling/) the function into a call to [React.createElement()](https://reactjs.org/docs/jsx-in-depth.html). Therefore the **import React statement is mandatory!**


##Arrow Notation
We can further compact the functional component by rewriting the function using [javascript arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Arrow notation is like the lambda notation of other languages that allows a compact way of defining an anonymous function inline mapping input arguments to a return value.

```jsx
import React from 'react'

const Section = props => (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
)

export default Section
```

This transformation is equivalent to the full function form, but is even more compact as it drops the need for a *return* statement or a call to the function keyword.

##Combining Export Statement

If we wanted to get more compact, and we have no use for storing a variable that points to our component, we can combine the *declaration* and *export* statements. 

```jsx
import React from 'react'

export default props => <div className="section">
  <h3>{props.title}</h3>
  {props.children}
</div>
```

This form is even more compact, and is useful for simple components, so that the code is easy to read and modify. 

Note in this example we drop the parentheses from surrounding the HTML node. I personally like the parentheses as I think it makes the code cleaner and easier to follow, but it is not strictly necessary.

##Default Props

Just like in the *component class* example, we can define default props by setting **defaultProps** of our function component.
```jsx
import React from 'react'

const Section = props => (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
)

Section.defaultProps = {
  title: "Introduction"
}

export default Section
```

##Unpacking Props
ES6 also introduced the ability to write a [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in javascript. If you used python before, this is just the javascript version of unpacking variables from arrays or properties of object.

Destructuring an object **myObj** looks like this in ES6:

```jsx
const myObj= {
  foo: "hello",
  ext: "dear",
  bar: "world"
  
}
const {foo, bar} = myObj

console.log(foo)
console.log(bar)
```

Outputs to the Console:
```
hello
world
```

What this does is break out *foo* and *bar* into their own constants (skipping *ext*).

How does this help us when dealing with component? Well if we want to minimize writing **props.** in our code, we can unpack the **props** function argument.

```jsx
function Section(props) {
    const {title, children} = props
    return (
      <div className="section">
        <h3>{title}</h3>
        {children}
      </div>
    )
}
```

Similarly using arrow notation we can write:
```jsx
export default ({title="Introduction", children}) => <div className="section">
  <h3>{title}</h3>
  {children}
</div>
```
Here we both unpack the props, and assign the default value of *title* to "Introduction". While this is super compact, I think that it does make the code a bit harder to follow.

Note that we can similarly do prop unpacking in *class components*.

##Trade Offs
So would one use a *functional component* and when would one use a *component class*. Lets review.

**Component Class**:
- Allows Keeping Internal State (more on this in next tutorial)
- Allows overriding of [lifecycle functions](https://reactjs.org/docs/react-component.html) 
- Can be optimized using *ShouldComponentUpdate()*

**Functional Stateless Components**
- Easier to Read/Write/Maintain
- Very minor speed improvements as of React 16

You can choose what suits your coding style and particular task. Based what I read online while writing this tutorial some people seem to love [stateless components](https://medium.com/groww-engineering/stateless-component-vs-pure-component-d2af88a1200b), while others [hate them](https://medium.freecodecamp.org/7-reasons-to-outlaw-reacts-functional-components-ff5b5ae09b7c).