import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import AuthorName from './AuthorName';

class BlogPostList extends React.Component {

    componentDidMount(){
        this.props.fetchData();
    }

    renderList(){
        const link = "#";
        return this.props.blogs.map( (blogs) =>{
            return(
                <div className="card" key={blogs.id} >
                    <div className="card-body">
                        <h5  className="card-title">{blogs.title}</h5>
                        <p className="card-text">{blogs.body}</p>
                        <a href={link} className="card-link">Card link</a>
                        <AuthorName authorId = {blogs.userId}/>
                    </div>
                    </div>
            )
        });
    }

    render(){
        console.log(this.props.blogs);

        
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

    const mapsPropsToState = (state)=>{

        return {blogs : state.blogs};
    }

export default connect(mapsPropsToState,{fetchData})(BlogPostList);