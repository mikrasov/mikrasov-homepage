import React from 'react'
import Layout from '../src/components/layout'
import { graphql, withPrefix } from 'gatsby'



export default function GalleryPage({ data }) {
  const { edges: albums } = data.allGalleryJson;
  return (
    <Layout>
      {albums
        .map(({ node: album }) => {
          return (
            <div style={{border:"2px solid #ededed",margin:"1em",padding:"0.5em"}}>
              <a href={album.productUrl}>
                <img src={withPrefix("gallery/"+album.id+".png")} style={{width:"200px",height:"200px"}} />
              {album.title}
              </a>
            </div>
          );
        })}

    </Layout>
  );
}

export const GalleryQuery = graphql`
  query GalleryQuery {
    allGalleryJson {
      edges{
        node{
          id,
          title,
          productUrl,
          mediaItemsCount
        }
      }
    }
  }
`
