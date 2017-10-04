import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../createRelayEnvironment'
import { withRouter, Link } from 'react-router-dom'
// import UpdatePostMutation from '../mutations/UpdatePostMutation'
import Dropzone from 'react-dropzone'

const UpdatePageViewerQuery = graphql`
  query UpdatePageViewerQuery($id: ID!) {
      viewer {
          id
          Post(id: $id) {
              id
              description
              imageUrl
              location
              image {
                id
              }
          }
      }   
  }
`;

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    };
  }
  state = {
    id: '',
    // description: '',
    // imageUrl: '',
    // location: '',
    // imageId: '',
  }
  // relayProps = {}

  // prepState = (props) => {
  //   console.log('props', props);
  //   this.setState({
  //     description: props.viewer.Post.description,
  //     imageUrl: props.viewer.Post.imageUrl,
  //     location: props.viewer.Post.location,
  //     imageId: props.viewer.Post.image.id,
  //   })
  // }

  render () {
    const variables = {
      id: this.state.id
    }
    return (<QueryRenderer 
        environment={environment}
        query={UpdatePageViewerQuery}
        variables={variables}
        render={this.renderPage}
      />)
  }
  renderPage = ({error, props}) => {
    if (error) {
      return (
        <div>{error.message}</div>
      )
    } else if (props) {
        //this.relayProps = props;
        return (
          <PageLayout key={this.state.id} viewer={props.viewer} onPost={this._OnPost} />
        )

      }
      return (<div>loading</div>)
  }

  _OnPost = (viewerId, post) => {
    console.log('_OnPost', viewerId)
    console.log('_OnPost', post)
    // const {id, description, imageUrl, location, imageId} = this.state
    //CreatePostMutation(description, imageUrl, location, imageId, viewerId,  () => this.props.history.replace('/'))
  }


}

class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.viewer.Post.id,
      description: props.viewer.Post.description,
      imageUrl: props.viewer.Post.imageUrl,
      location: props.viewer.Post.location,
      imageId: props.viewer.Post.image.id,
    };
  }  


  state = {
    id: '',
    description: '',
    imageUrl: '',
    location: '',
    imageId: '',
  }
  render () {
    return (
      <div className='w-100 pa4 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          ID: {this.state.id}
          <input
            className='w-100 pa3 mv2'
            value={this.state.description}
            placeholder='Description'
            onChange={(e) => this.setState({description: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.location}
            placeholder='Location'
            onChange={(e) => this.setState({location: e.target.value})}
          />
          {this.state.imageUrl &&
            <img 
              src={this.state.imageUrl} 
              alt={this.state.description} 
              className='w-100 mv3' 
            />
          }
          <Dropzone
            onDrop={this.onDrop}
            accept='image/*'
            multiple={false}
          >
            <div>To replace main image: Drop an image or click to choose</div>
          </Dropzone>                  
          {this.state.description && this.state.imageUrl &&
            <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={() => this._handlePost(this.props.viewer.id)}>Post</button>
          }
          <div style={{textAlign: "center", color: "red"}}>
            <Link to="/" >Cancel</Link>
          </div>
        </div>
      </div>
    )
  }
  onDrop = (files) => {
    // prepare form data, use data key!
    let data = new FormData()
    data.append('data', files[0])

    // use the file endpoint
    fetch('https://api.graph.cool/file/v1/cj8al659x0g8d0123n4dq1vff', {
      method: 'POST',
      body: data
    }).then(response => {
      return response.json()
    }).then(image => {
      this.setState({
        imageId: image.id,
        imageUrl: image.url,
      })
    })
  }
  _handlePost = (viewerId) => {
    // console.log(viewerId);
    // console.log('_handlePost', this.state);
    this.props.onPost(viewerId, this.state);
    // const {id, description, imageUrl, location, imageId} = this.state
    //CreatePostMutation(description, imageUrl, location, imageId, viewerId,  () => this.props.history.replace('/'))
  }


}

export default withRouter(UpdatePage)