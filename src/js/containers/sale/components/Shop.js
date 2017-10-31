import React from "react";

import axios from "axios";


class Shop extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            goods:[]
        }
    }
    getGoods(){
        axios.get(this.props.url).then((res)=>{
            //console.log(res.data);
            this.setState({
                goods:res.data
            })
        })
    }
    showGoods(){
        if(!this.state.goods.length){
            return ;
        }
        return this.state.goods.map((item,i)=>{
            return <div id="goods-box-c" key={i}>
                        <img src={item.img} alt=""/>
                        <p>
                            <span className="price">￥{item.price}</span>
                            <span className="oldprice">￥{item.oldprice}</span>
                        </p>
                        <h4>{item.name}</h4>
                    </div>
        })
    }
    componentWillMount(){
        this.getGoods();
    }
    render(){
        return (
                <div id="store-box-c">
                    <div id="store-box-header-c">
                        <p>
                            <img src={this.props.img} alt=""/>
                            <a href="">{this.props.storeName}</a>
                        </p>
                        <i className="iconfont icon-jiantou-copy1"></i>
                    </div>
                    <div id="goods-boxs-c">
                        {this.showGoods()}
                    </div>
                    <div id="hui-c"></div>
                </div>
            )
    }
}


export default Shop