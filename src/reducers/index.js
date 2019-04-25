import { combineReducers } from 'redux';

const PostListReducer = (state = [], actions)=>{
    if(actions.type === 'GET_BLOG_DATA'){
        return actions.payload;
    }

    return state;
}

const AuthorName = (state = [], actions) =>{
    if(actions.type === 'AUTHOR_NAME'){
        return [...state , actions.payload]
    }
    return state;
}

export default combineReducers({
    blogs : PostListReducer,
    author : AuthorName
 });
