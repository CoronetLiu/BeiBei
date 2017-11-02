//---------- css -----------//
import 'antd-mobile/dist/antd-mobile.css';
require ("./css/App.scss");
//-------- css end --------//

//---------- js -----------//

console.log(0);

const React = require("react");
const ReactDOM = require("react-dom");

import {Router,Route,hashHistory,browserHistory,IndexRoute,IndexRedirect,Redirect} from "react-router";

import App from "./js/App";

import Sale from "./js/containers/sale/Sale"
import New from "./js/containers/new/New"
import Group from "./js/containers/group/Group"
import Car from "./js/containers/car/Car"
import Mine from "./js/containers/mine/Mine"
import Detail from "./js/containers/detail/Detail"

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to='/sale'/>
            <Route path="/sale" component={Sale}></Route>
            <Route path="/group" component={Group}></Route>
            <Route path="/new" component={New}></Route>
            <Route path="/car" component={Car}></Route>
            <Route path="/mine" component={Mine}>

            </Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Redirect from='*' to="/sale"/>
        </Route>
    </Router>,document.getElementById("app"));