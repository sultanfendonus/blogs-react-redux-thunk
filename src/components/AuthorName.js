import React from 'react';
import { connect } from 'react-redux';
import { getAuthorName } from '../actions'

class AuthorName extends React.Component {
    componentDidMount(){
        this.props.getAuthorName(this.props.authorId);
    }
    render(){
        const author = this.props.authorName.find(author => author.id === this.props.authorId);
        if(!author){
            return null;
        }

        return(
            
                <a href='#' className="card-link">{author.name}</a>
           
        )
    }
}

const mapStateToprops = (state)=>{
    console.log(state.author);
    return {authorName : state.author}

}

export default connect(mapStateToprops,{getAuthorName})(AuthorName);