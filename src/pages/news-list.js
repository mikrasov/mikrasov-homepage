import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import GallerySidebar from '../components/gallery/gallery-sidebar'
import BlogPreview from '../components/blog/blog-preview'


const sidebar = (<div>
</div>)

export default (props) => (
  <StaticQuery
    query={graphql`
  {
      allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, filter: {fields:{draft:{eq:false}}} ) {
        edges {
          node {
            id
            fields {
              tags
              slug
              year
              date(formatString: "YYYY-MM-DD")
            }
            frontmatter {
              title
              album
            }
          }
        }
      }
    }
  `}

    render={data => (

      <Layout sideContent={sidebar}  active={"news"}>

        <div className="mb-3 align-items-end">
          <h1 className="m-0"> News - Full List</h1>
          <div className="blog-posts">

            {data.allMarkdownRemark.edges.map(({ node: post }) => {
              return <BlogPreview post={post} />
            })}
          </div>
        </div>
      </Layout>
      )}
  />
)

