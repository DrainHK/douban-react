import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/list';
//import FilmList from '../components/FilmList/FilmList';
import PerList from '../components/PerList/PerList'

import '../css/list.css';

class List extends React.Component{
    constructor(props){
        super(props);
        this.pageNo = 1;
        this.state = {
            title: ''
        }
        
    }
    componentWillMount(){
        let {state, dispatch, params} = this.props;
        let reqData = this.setReqData(1);
        dispatch(actions.getMoreList(reqData));
    }
    setReqData(page){
        let {state, dispatch, params} = this.props;
        let reqData = {};
        reqData.pageNo = page;
        switch(params.type){
            case 'showing':
                reqData.url = '/api/movie/in_theaters';
                this.setState({
                    title: '正在上映的电影'
                });
                break;
            case 'coming':
                reqData.url = '/api/movie/coming_soon';
                this.setState({
                    title: '即将上映的电影'
                });
                break;
            case 'top':
                reqData.url = '/api/movie/top250'
                this.setState({
                    title: '豆瓣Top250'
                });
                break;
        }
        return reqData;
    }
    render(){
        let {state} = this.props;
        let moreList = state.moreList;
        return (
            <div className="film-list">
                <h1 className="list-title">{this.state.title}</h1>       
                <PerList listDatas={moreList}/>
            </div>
        )
    }
}
function selectState(state) {
    return {
        state: state.list
    }
}

export default connect(selectState)(List);
