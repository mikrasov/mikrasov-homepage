import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/gallery/gallery'
import GallerySidebar from '../components/gallery/gallery-sidebar'
import BlogPreview from '../components/blog/blog-preview'


const sidebar = (<div>
</div>)

const NewsListPage = ({ children }) => (
  <StaticQuery
    query={graphql`
  {
      profileImage: file(relativePath: { eq: "profile/profile-news.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, filter: {fields:{draft:{eq:false}}} ) {
        edges {
          node {
            id
            fields {
              type
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

      <Layout sideContent={sidebar} sideImage={data.profileImage} active={"news"}>

        <div className="mb-3 align-items-end">
          <h1 className="m-0"> News - Full List</h1>
          <div className="blog-posts">

            {data.allMarkdownRemark.edges.map(({ node: post }) => {
              return(
                <BlogPreview post={post} />
              )
            })}

          </div>



        </div>
      </Layout>
      )}
  />
)

export default NewsListPage

