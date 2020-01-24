import React from 'react'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import Layout from '../components/layout'

import Project from '../components/projects/project-preview'


const sidebar = <div/>

export default class ProjectPage extends React.Component {

  render() {
    const profileImage = this.props.data.profileImage
    const projects = this.props.data.allMarkdownRemark.edges

    return (
    <Layout sideImage={profileImage} sideContent={sidebar} active={"projects"}>

      <h1>Major Projects</h1>
      <div className="blog-posts">

        {projects.map( ({node:project}) => (
            <Project project={project}></Project>
        ))}


      </div>
    </Layout>
    )
  }
}



export const projectListQuery = graphql`
 query {
    profileImage: file(relativePath: { eq: "profile/profile-projects.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {fields:{draft:{eq:false},  tags: {eq: "project"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 215)
          id
          fields {
            external
            draft
            tags
            slug
            date(formatString: "MMM DD, YYYY")
          }
          frontmatter {
            id
            title
            summary
            range
            keywords
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
