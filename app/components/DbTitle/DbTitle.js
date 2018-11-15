
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import './DbTitle.css'
// 展示组件，通过props获取数据
class DbTitle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {!this.props.path?(
                <h1 className="db-title">{this.props.titName}</h1>
            ):(
                <h1 className="db-title">
                    {this.props.titName}
                    <a href={this.props.path}>更多</a>
                </h1>
            )}
            </div>
        )
    }
}
DbTitle.propTypes = {
    titName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default DbTitle;