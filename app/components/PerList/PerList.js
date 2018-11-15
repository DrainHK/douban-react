import React from 'react'
import { Link } from 'react-router'
import "./PerList.css"
class PerList extends React.Component{
    constructor(props){
        super(props);
        this.pageNo = 1;
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount(){
        document.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        document.removeEventListener('scroll',this.handleScroll);
    }
    handleScroll(){
        let scrollTop = document.body.scrollTop;    
        let rootEle = document.getElementById('app');
        let bodyHeight = rootEle.clientHeight;      //根元素内容高度
        let screenHeight = window.screen.height;     //手机屏幕高度

        if(screenHeight + scrollTop >= bodyHeight){
            this.getMoreDatas();
        }


    }
    getMoreDatas(){

    }

    render(){
        let listDatas = this.props.listDatas;
        return(
            <ul className="film-ul">
                {
                    listDatas.map((item, index)=>{
                        return (
                            <li key={index}>
                                <Link to={`/details/${item.id}`}>
                                    <div className="film-img">
                                        <img src={item.images.small} />
                                    </div>
                                    <div className="film-intro">
                                        <h1>
                                            {item.title}
                                            <span>（{item.year}）</span>
                                        </h1>
                                        <p className="film-rating">评分：{item.rating.average}</p>
                                        <p className="film-detail">
                                        {item.year}&nbsp;/&nbsp;
                                        {item.genres && item.genres.map((item, index)=>{
                                            return item;
                                        }).join(' / ')}&nbsp;/&nbsp;
                                        {item.casts && item.casts.map((item, index)=>{
                                            return item.name;
                                        }).join(' / ')}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
PerList.defaultProps = {
    totalPage: 0,
    listDatas: []
}

export default PerList

