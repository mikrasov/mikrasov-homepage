import React from 'react'
import Img from 'gatsby-image'
import '../gallery/album.css'
import Layout from './layout'
import InfiniteScroll from 'react-infinite-scroll-component'

class BlogInfinite extends React.Component {
  state = {
    items: Array.from({ length: 20 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };



  render() {

    return (

        <InfiniteScroll
          dataLength={this.state.items.length}

          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            <div  key={index}>
              <h1>div - #{index}</h1>
            </div>
          ))}
        </InfiniteScroll>

    );
  }
}

export default BlogInfinite
