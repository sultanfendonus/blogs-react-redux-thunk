import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchData =  ()=>
 async (dispatch) => {
    const resoponse = await jsonPlaceHolder.get('posts');
    dispatch({type : 'GET_BLOG_DATA', payload : resoponse.data})
}

export const getAuthorName = (id)=>
     async (dispatch) => {
        const resoponse = await jsonPlaceHolder.get('users/'+id);
        dispatch({type : 'AUTHOR_NAME', payload : resoponse.data})
    }

    
