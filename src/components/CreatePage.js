import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../createRelayEnvironment'
import { withRouter, Link } from 'react-router-dom'
import CreatePostMutation from '../mutations/CreatePostMutation'
import Dropzone from 'react-dropzone'

const CreatePageViewerQuery = graphql`
  query CreatePageViewerQuery {
    viewer {
      id
    }
  }
`;

class CreatePage extends React.Component {

  state = {
    description: '',
    imageUrl: '',
    location: '',
    imageId: '',
    isUploading: false
  }

  render () {
    return (
      <QueryRenderer 
        environment={environment}
        query={CreatePageViewerQuery}
        render={({error, props}) => {
          if (error) {
            return (
              <div>{error.message}</div>
            )
          } else if (props) {
            return (
              <div className='w-100 pa4 flex justify-center'>
                <div style={{ maxWidth: 400 }} className=''>
                Location: <input
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
                  {this.state.isUploading &&
                    <div>Uploading image...</div>
                  }
                  {!this.state.imageId &&
                  <Dropzone
                    onDrop={this.onDrop}
                    accept='image/*'
                    multiple={false}
                  >
                    <div>Drop an image or click to choose</div>
                  </Dropzone>}        
                  Desc: <textarea
                    className='w-100 pa3 mv2'
                    value={this.state.description}
                    placeholder='Description'
                    onChange={(e) => this.setState({description: e.target.value})}
                  />
                            
                  <div style={{textAlign: "center", color: "red"}}>
                  {this.state.description && this.state.imageUrl &&
                    <button className='pa3 bg-navy bn dim ttu pointer white' onClick={() => this._handlePost(props.viewer.id)}>Post</button>
                  }
                  <Link to="/" className='pa3 bg-red bn dim ttu pointer link black-90'>Cancel</Link>
                  </div>
                </div>
              </div>
            )
          }
          return (<div>loading</div>)
        }}
      />
    )
  }
  onDrop = (files) => {
    this.setState({
      isUploading: true,
      imageUrl: ''
    });
    
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
        isUploading: false,
      })
    })
  }
  _handlePost = (viewerId) => {
    const {description, imageUrl, location, imageId} = this.state
    CreatePostMutation(description, imageUrl, location, imageId, viewerId,  () => this.props.history.replace('/'))
  }

}

export default withRouter(CreatePage)