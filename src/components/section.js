import React from 'react'


export default ({title="Introduction", children}) => <div className="section">
  <h3>{title}</h3>
  {children}
</div>