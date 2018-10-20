import React from 'react'
import { Link, graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function IndexPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;


  console.log(posts)
  return (
    <Layout>
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {

          return (post.frontmatter.album !== null)? (
            <div className="row blog-preview blog-album" key={post.id}>
              <div className="blog-featured-image col-4 ">
                <a href={post.frontmatter.album} target="_blank">
                <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
                </a>
              </div>
              <div className="blog-content col-8">
              <p className="date">{post.fields.date}</p>
              <h1><a href={post.frontmatter.album} target="_blank">{post.frontmatter.title}</a></h1>

              <p>{post.excerpt} </p>
              </div>
            </div>

        ) : (
          <div className="row blog-preview blog-post" key={post.id}>
            <div className="blog-featured-image col-4 ">
              <Link to={post.fields.slug}>
              <Img  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}  />
              </Link>
            </div>
            <div className="blog-content col-8">
              <p className="date">{post.fields.date}</p>
              <h1><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h1>
              <p>{post.excerpt} </p>
            </div>
          </div>
        )
        })}
    </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
      edges {
        node {
          excerpt(pruneLength: 240)
          id
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
            album
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

        }
      }
    }
  }
`;

