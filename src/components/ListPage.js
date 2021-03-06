import React from 'react'
import Post from './Post'
import WeatherWidget from './WeatherWidget'
import { Link  } from 'react-router-dom'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {

  render () {
    console.log('ListPage - render - environment', this.props.relay.environment)
    return (
        <div className='w-100 flex justify-center'>
        
          <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
            + New Post
          </Link>
          <div className="cf ph2-ns">
            <div className='fl w-100 w-50-ns pa2'>
            <WeatherWidget />
            </div>
            <div className='fl w-100 w-50-ns pa2' style={{ maxWidth: 400 }}>
              {this.props.viewer.allPosts.edges.map(({node}) =>
                <Post key={node.id} post={node} viewer={this.props.viewer} />
              )}
            </div>
          </div>
        </div>
    )
  }
}

export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    ...Post_viewer
    allPosts(last: 100, orderBy: updatedAt_DESC) @connection(key: "ListPage_allPosts", filters: []) {
      edges {
        node {
          id
          description
          imageUrl
          location
          ...Post_post
        }
      }
    }
  }
`)