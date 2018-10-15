import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

export default function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id} >

              <p className="date">{post.frontmatter.date}</p>
              <h1>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

