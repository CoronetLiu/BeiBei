import React from "react";

import store from './redux/store'
import actions from './redux/actionCreator'

class App extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="app-all">
                    {this.props.children}
                </div>
            )
    }
}

export default App