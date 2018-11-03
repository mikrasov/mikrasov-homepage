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
    .replace(/\-\-+/g, '-')
  return cls+""
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/components/blog/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000 ) {
              edges {
                node {
                  fields {
                    type
                    draft
                    slug
                    date
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

        var numDrafts = 0;
        _.each(posts, (post, index) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          if (post.node.fields.draft) {
            numDrafts++;
            return;
          }

          if (post.node.fields.type !== "album") {
            createPage({
              path: post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                date: post.node.fields.date,
                previous,
                next,
              },
            })
          }

        })

        // Create blog post list pages
        const postsPerPage = 5;
        const numPages = Math.ceil( (posts.length - numDrafts)/ postsPerPage);


        _.times(numPages, i => {
          createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve('./src/components/blog/blog-list.js'),
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
    var slug = slugify(path)
    date = slug.match(/(\d{4})-(\d{2})-(\d{2})/ )

    if(path.includes("/posts")){
      type = "post";
    }
    else if(path.includes("/tutorials")){
      type = "tutorial";
    }
    else if(path.includes("/albums")){
      type = "album";
    }
    else {
      type = "unknown";
    }


    createNodeField({
      node,
      name: `type`,
      value: type,
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
