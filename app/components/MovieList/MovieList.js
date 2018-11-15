
import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types';

import './MovieList.css'
// 展示组件，通过props获取数据
class MovieList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let list = this.props.movieDatas;
        return (
            <div>
                <ul className="movie-ul">
                    {
                        list.map((item, index)=>{
                            return (
                                <li className="movie-item" key={item.id}>
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.images.small}/>
                                        <p>{item.title}</p>
                                        {item.rating.average>0?(
                                            <span>评分：{ item.rating.average}</span>
                                        ):(
                                            <span></span>
                                        )}
                                    </Link> 
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

MovieList.defaultProps={
    movieDatas:[]
}
MovieList.propTypes = {
    movieDatas: PropTypes.array.isRequired
}

export default MovieList;
