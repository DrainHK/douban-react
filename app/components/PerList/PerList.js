import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types';

import "./PerList.css"
import { prototype } from 'stream';
class PerList extends React.Component{
    constructor(props){
        super(props);
        this.pageNo = 1;
        this.state = {
            isShowMore: true
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount(){
        document.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        document.removeEventListener('scroll',this.handleScroll);
    }
    handleScroll(){
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;    //没指定DOCTYPE时，使用document.body
        let rootEle = document.getElementById('app');
        let bodyHeight = rootEle.clientHeight;      //根元素内容高度
        let screenHeight = window.screen.height;     //手机屏幕高度
        if(screenHeight + scrollTop >= bodyHeight){
            console.log('more');        //加载了两次
            this.getMoreDatas();
        }

    }
    getMoreDatas(){
        let { totalPage, setReqData, showMore } = this.props;
        this.pageNo ++;
        if(totalPage < this.pageNo){
            this.setState({
                isShowMore: false
            });
            return;
        }
        let reqData = setReqData(this.pageNo);
        showMore(reqData);
    }

    render(){
        let listDatas = this.props.listDatas;
        const isShowMore = this.state.isShowMore;
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
                {!isShowMore ? (<div className="no-datas">没有更多了...</div>) : ''}
            </ul>
        )
    }
}
PerList.defaultProps = {
    totalPage: 0,
    listDatas: []
}
PerList.PropTypes = {
    totalPage: PropTypes.number.isRequired,
    setReqData: PropTypes.func.isRequired,
    showMore: PropTypes.func.isRequired
}

export default PerList

