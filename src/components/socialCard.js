import React from 'react'
import Helmet from 'react-helmet'

class SocialCard extends React.Component {
  render() {


  console.log(this.props.featuredImage)
    return (
      <Helmet>
        <title>{"Mikrasov: "+this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://mikrasov.com" />
        <meta name="twitter:creator" content="@mikrasov" />
        <meta property="og:site_name" content="Mikrasov Design" />
        <meta property="og:url" content={"https://mikrasov.com"+this.props.url} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:image" content={"https://mikrasov.com"+this.props.featuredImage} />
        <meta property="og:image:secure_url" content={"https://mikrasov.com"+this.props.featuredImage} />

      </Helmet>
    )
  }
}

export default SocialCard
