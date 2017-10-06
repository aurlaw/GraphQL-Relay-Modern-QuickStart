import React from 'react'
import environment from '../createRelayEnvironment'
import {QueryRenderer,graphql} from 'react-relay'
  

const WeatherWidgetQuery = graphql`
query WeatherWidgetQuery($zipCode: String!) {
    viewer {
        id
        weather(zipcode: $zipCode) {
            temperature
            description
          }
    }   
}
`;


class WeatherWidget extends React.Component {

    state = {
        zipcode: '',
        hasZip: false,
        isLoading: false
        }
    componentWillMount() {
        var storedZip = this.getStoredZip();
        console.log("componentWillMount", storedZip);
        if(storedZip) {
            this.setState({
                zipcode: storedZip,
                hasZip: true
            })
        }
    }
    render() {
        if(this.state.hasZip) {
           return(
                <QueryRenderer
                environment={environment}
                query={WeatherWidgetQuery}
                variables={{zipCode: this.state.zipcode}}
                render={({error, props}) => {
                    if (error) {
                        return (
                        <div>E: {error.message}</div>
                        )
                    } else if (props) {
                        return (
                            <div>
                            Temp: {props.viewer.weather.temperature} for {this.state.zipcode}<br/>
                            {props.viewer.weather.description}
                            <br/><a href="/" className="ttu f6 pointer" onClick={this._handleReset}>change</a>
                            </div>
                        )
                    }
                    return (<div>loading</div>)
                }}
                />
           )     
        } else {
            return(
                <div>
                    <input
                        className='w-80 pa3 mv2'
                        value={this.state.zipcode}
                        placeholder='Zip Code'
                        onChange={(e) => this.setState({zipcode: e.target.value})}
                      />
                        <button className='pa3 bg-navy bn dim ttu pointer white' onClick={this._handleLookup}>Lookup</button>
                </div>
            )
        }
    }

    _handleLookup = (e) => {
        e.preventDefault();
        console.log(this.state.zipcode);
        this.setStoredZip();
    }
    _handleReset = (e) => {
        e.preventDefault();
        this.removeStoredZip();
    }

    getStoredZip = () => {
        return localStorage.getItem('zipcode');
    }
    setStoredZip = () => {
       localStorage.setItem('zipcode', this.state.zipcode);
       this.setState({hasZip:true})
    }
    removeStoredZip = () => {
       localStorage.removeItem('zipcode');
       this.setState({hasZip:false, zipcode:''})
    }

}

export default WeatherWidget
