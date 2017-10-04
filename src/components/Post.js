import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay';
import DeletePostMutation from '../mutations/DeletePostMutation';
import { withRouter, Link } from 'react-router-dom';

class Post extends React.Component {

  render () {
    return (
      <div className='pa3  ma3 bg-light-blue'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.post.description}&nbsp;
          {this.props.post.location}&nbsp;
          <span 
            className='red f6 pointer dim ttu' 
            onClick={this._handleDelete}
          >Delete</span> |  <Link to={`/edit/${this.props.post.id}`} className='f6 link dim ttu pointer navy'>Edit</Link>
        </div>
      </div>
    )
  }

  _handleDelete = () => {
    DeletePostMutation(this.props.post.id, this.props.viewer.id)
  }
}

const FragmentContainer =  createFragmentContainer(Post, graphql`
  fragment Post_viewer on Viewer {
    id
  }
  fragment Post_post on Post {
    id
    description
    imageUrl
    location
  }
`)

export default withRouter(FragmentContainer);