import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home';


export default class Index extends React.Component{
    render(){
        return <div>
            <div className="content">{this.props.children || <Home />}</div>
        </div>
    }
}
