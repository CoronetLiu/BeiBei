import React from "react";
import fetch from "../../../fetch";

class Header extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            hotSearch:[]
        }
    }
    getHotSearch(){
        fetch.get('http://localhost:8000/beibei_api/shopping/v3/hot_search_words?latitude=39.90469&longitude=116.407173').then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({
                hotSearch:data
            })
        })
    }
    showHotSearch(){
        return this.state.hotSearch.map((item,i)=>{
            return <div className="swiper-slide" key={i}>{item.word}</div>
        })
    }
    componentWillMount(){
        this.getHotSearch();
    }
    render(){
        return (
                <div id="header-c">
                    <div className="swiper-container hot-search-c">
                        <div className="swiper-wrapper">
                            {this.showHotSearch()}
                            {/*<div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜热搜热搜</div>
                            <div className="swiper-slide">热搜热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜热搜热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜</div>
                            <div className="swiper-slide">热搜</div>*/}
                        </div>
                    </div>
                    <i className="iconfont icon-sousuo1 search-c"></i>
                </div>
            )
    }
    componentDidMount(){
        this.swiper = new Swiper(".hot-search-c",{
            freeMode : true,
            slidesPerView : 'auto',
            freeModeSticky : true ,
            freeModeMomentumRatio:0.3
        })
    }
    componentDidUpdate(){
        this.swiper.update();
    }
}

export default Header