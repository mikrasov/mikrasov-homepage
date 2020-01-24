/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


function slugify(text)
{
  var cls = text.toString().toLowerCase()
    .replace("post/",'')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
  return cls+""
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/components/blog/blog-post.js')
    const projectPost = path.resolve('./src/components/projects/project-post.js')

    resolve(
      graphql(`
          {
            allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }, filter:{fields:{draft:{ne:true}}} ){
              edges {
                node {
                  fields {
                    type
                    external
                    tags                  
                    draft
                    slug
                    date
                  }
                  frontmatter {
                    title
                    id
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }


        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;
        const internalPosts = posts //posts.filter(post => !post.node.fields.external)

        _.each(internalPosts, (post, index) => {

          const previous = index === internalPosts.length - 1 ? null : internalPosts[index + 1].node;
          const next = index === 0 ? null : internalPosts[index - 1].node;


          createPage({
            path: post.node.fields.slug,
            component: (post.node.fields.type=="project")?projectPost:blogPost,
            context: {
              slug: post.node.fields.slug,
              date: post.node.fields.date,
              proj: post.node.frontmatter.id,
              previous,
              next,
            },
          })

        })

        // Create blog post list pages
        const postsPerPage = 5;
        const numPages = Math.ceil( posts.length / postsPerPage);


        _.times(numPages, i => {
          createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve('./src/components/blog/blog-page.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          });
        });

      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode })
    let slug = slugify(path)
    const date = slug.match(/(\d{4})-(\d{2})-(\d{2})/ )

    let tags = new Set()
    let external = null
    let style = "blueAccent"

    //Tag by origin folder
    if(path.includes("/posts")){
      tags.add("post")
    }
    else if(path.includes("/tutorials")){
      tags.add("tutorial")
    }
    else if(path.includes("/albums")){
      tags.add("album")
      external = node.frontmatter.album
    }
    else if(path.includes("/papers")){
      tags.add("paper")
    }
    else if(path.includes("/projects")){
      tags.add("project")
    }





    //Tag the types based on content
    if(node.frontmatter.album) {
      tags.add("album")
    }

    if(node.frontmatter.paper) {
      tags.add("paper")
    }


    createNodeField({
      node,
      name: `external`,
      value: external,
    })
    createNodeField({
      node,
      name: `tags`,
      value: Array.from(tags),
    })
    createNodeField({
      node,
      name: `type`,
      value: Array.from(tags)[0],
    })
    createNodeField({
      node,
      name: `draft`,
      value: path.includes("_"),
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({ node,
      name: `date`,
      value: date[0],
    })

    createNodeField({ node,
      name: `year`,
      value: date[1],
    })

  }
}
