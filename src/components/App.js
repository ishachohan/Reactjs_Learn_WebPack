import React,{Component} from "react"

class App extends Component{
    render(){
        return(
            <div style={{textAlign: 'center', alignSelf : 'center'}}>
            <h1>Isha's React App with Webpack and Babel</h1><br/>
            <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
            <p>This is an custom variable from <b>{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MESSAGE : process.env.REACT_APP_PROD_MESSAGE}</b></p>
        </div>

        )
      
    }
}

export default App