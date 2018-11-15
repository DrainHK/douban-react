import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import actions from '../actions/home';
//import SecTitle from '../components/SecTitle/SecTitle'
import DbTitle from '../components/DbTitle/DbTitle'
import MovieList from '../components/MovieList/MovieList'
import '../css/home.css';

//容器组件，通过redux的state获取数据，使用connect()方法生成
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentWillMount(){
        let {state, dispatch} = this.props;
        dispatch(actions.getHotList(4));
        dispatch(actions.getComingSoonList(4));
        dispatch(actions.getTopList(4));
    }
    render(){
        let {state, dispatch} = this.props;
        let thetersList = state.hotList;
        let comingList = state.comingSoonList;
        let topList = state.topList;
        return <div>
            <div className="page-body">
                <section className="movie-sec">
                    <DbTitle titName='正在上映的电影' path='/list/showing'></DbTitle>
                    <MovieList movieDatas={thetersList}></MovieList>
                </section>
                <section className="movie-sec">
                    <DbTitle titName='即将上映的电影' path='/list/coming'></DbTitle>
                    <MovieList movieDatas={comingList}></MovieList>
                </section>
                <section className="movie-sec">
                    <DbTitle titName='Top250的电影' path='/list/top'></DbTitle>
                    <MovieList movieDatas={topList}></MovieList>
                </section>
            </div>
        </div>
    }
}
function selectState(state) {
    return {
        state: state.home
    }
}

export default connect(selectState)(Home);
