---
title: "Declaring React Components"
featuredImage: "./featured-image.png"
prevPage: "/tutorials/2018-11-20-react-components/"
---
One thing I had difficulty understanding at first is the variations between *functional stateless components* and *component classes*. When looking up introductory examples, you may come across both and it might get confusing as to what is happening. 

## Component Classes
Lets start with the component we wrote last time.

```javascript
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

However this is also very verbose. Note in our example we are not overriding any other function and our component does not keep state. So luckily there is a shortcut to writing basic components like ours called *functional stateless components*.

##Functional Stateless Components

```javascript
const Section = function(props) {
    return (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
    )
}

export default Section
```




```javascript
const Section = (props) => (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
)

export default Section
```



```javascript
export default (props) => (
      <div className="section">
        <h3>{props.title}</h3>
        {props.children}
      </div>
)
```

