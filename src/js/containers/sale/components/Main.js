import React from "react";

import Shop from "./Shop"

class Main extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
                <div id="main-c">
                    <div id="hui-c"></div>
                    <div id="temai-c">今日特卖·每天早9点准时上新</div>
                    <Shop storeName="香奈娃娃" url="http://localhost:8000/public/data/recommend_xiangnai.json" img="https://b1.hucdn.com/upload/brand/1701/06/89804638951411_200x100.png"/>
                    <Shop storeName="妙妙迪迪" url="http://localhost:8000/public/data/recommend_miaodi.json" img="https://b1.hucdn.com/upload/brand/1706/08/11137176110000_200x100.jpg"/>
                    <Shop storeName="OCEAN" url="http://localhost:8000/public/data/recommend_ocean.json" img="https://b1.hucdn.com/upload/brand/1507/24/31181129739971_200x100.jpg"/>
                </div>
            )
    }
}

export default Main