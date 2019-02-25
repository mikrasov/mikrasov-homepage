---
title: "Gatsby Automatic Slugs"
featuredImage: "./featured-image.jpg"
---


```javascript
import Navbar from 'react-bootstrap/lib/navbar'
import Nav from 'react-bootstrap/lib/nav'
```


Which worked on local machine, but to get it to deploy on Netlify I had to change it to
```javascript
import {Nav, Navbar} from 'react-bootstrap'
```
