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
import Search from "./js/containers/group/containers/search"
import SaleHot from "./js/containers/group/containers/saleHot"

import Car from "./js/containers/car/Car"

import Mine from "./js/containers/mine/Mine"
import Login from "./js/containers/mine/components/Login"

import Detail from "./js/containers/detail/Detail"

import store from './js/redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to='/sale'/>
                <Route path="/sale" component={Sale}></Route>
                <Route path="/group" component={Group}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/saleHot" component={SaleHot}></Route>
                <Route path="/new" component={New}></Route>
                <Route path="/car" component={Car}></Route>
                <Route path="/mine" component={Mine}>
                    <Route path="/login" component={Login}></Route>
                </Route>
                <Route path="/detail/:id" component={Detail}></Route>
                <Redirect from='*' to="/sale"/>
            </Route>
        </Router>
    </Provider>,document.getElementById("app"));
