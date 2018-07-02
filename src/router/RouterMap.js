import React,{Component} from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import App from '../containers';
import Login from '../containers/login';
import Detail from '../component/details'

class RouterMap extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router history={this.props.history}>
                  <Route path='/' component={App}>
                        <IndexRoute component={Login}></IndexRoute>
                        <Route path='/detail' component={Detail}></Route>
                  </Route>
            </Router>
        );
    }
}
export default RouterMap;