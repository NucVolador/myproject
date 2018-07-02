import React,{Component} from 'react';


import './style.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            initDone : true
        }
    }
    render(){
        let {initDone} = this.state;
        return (
            <div>
                  {initDone ? this.props.children : <div>加载中</div>}
            </div>

        );
    }
} 
export default App;