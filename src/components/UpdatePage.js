import React from 'react'
import { QueryRenderer, createFragmentContainer, graphql } from 'react-relay'
import environment from '../createRelayEnvironment'
import { withRouter, Link } from 'react-router-dom'
import UpdatePostMutation from '../mutations/UpdatePostMutation'
import Dropzone from 'react-dropzone'
const UpdatePageViewerQuery = graphql`
  query UpdatePageViewerQuery {
    viewer {
            id
    }     
  }
`;

class UpdatePage extends React.Component {

  state = {
    id: '',
    description: '',
    imageUrl: '',
    location: '',
    imageId: '',
  }

  render () {
    const variables = {
        postId: this.props.match.params.id
      }  
     return (
      <QueryRenderer 
        environment={environment}
        query={UpdatePageViewerQuery}
        variables={variables}
        render={({error, props}) => {
          if (error) {
            return (
              <div>{error.message}</div>
            )
          } else if (props) {
            this.setState({
              id: props.data.viewer.id,
              description: props.data.viewer.description,
              imageId: props.data.viewer.image.id,
              location: props.data.viewer.location,
              imageUrl: props.data.viewer.imageUrl,
           })

            return (
              <div className='w-100 pa4 flex justify-center'>
                <div style={{ maxWidth: 400 }} className=''>
                  <input
                    className='w-100 pa3 mv2'
                    value={this.state.description}
                    placeholder='Description'
                    onChange={(e) => this.setState({description: e.target.value})}
                  />
                  {/* <input
                    className='w-100 pa3 mv2'
                    value={this.state.imageUrl}
                    placeholder='Image Url'
                    onChange={(e) => this.setState({imageUrl: e.target.value})}
                  /> */}
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
                  {!this.state.imageId &&
                  <Dropzone
                    onDrop={this.onDrop}
                    accept='image/*'
                    multiple={false}
                  >
                    <div>Drop an image or click to choose</div>
                  </Dropzone>}                  
                  {this.state.description && this.state.imageUrl &&
                    <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={() => this._handlePost(props.viewer.id)}>Post</button>
                  }
                  <div style={{textAlign: "center", color: "red"}}>
                    <Link to="/" >Cancel</Link>
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
    const {id, description, imageUrl, location, imageId} = this.state
    //CreatePostMutation(description, imageUrl, location, imageId, viewerId,  () => this.props.history.replace('/'))
  }

}
export default createFragmentContainer(UpdatePage, graphql`
fragment UpdatePage_Query on Query  {
    viewer {
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
`,
{
    getVariables(props, {id}, fragmentVariables) {
      return {id}
    },
    query: graphql`
      query UpdatePage_PostUpdate_Query($id: ID!) {
        ...UpdatePage_Query
      }
    `
  }
)
//export default withRouter(UpdatePage)