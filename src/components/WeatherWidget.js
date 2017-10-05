import React from 'react'


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
               <div>
                    TODO: {this.state.zipcode}
                    <br/><a href="/" className="ttu f6 pointer" onClick={this._handleReset}>change</a>
               </div>
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