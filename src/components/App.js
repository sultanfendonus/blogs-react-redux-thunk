import React from 'react';
import BlogPostList from './BlogPostList'

const App = ()=>{

    return(
        <div>
            <div className = "container">
                <div className = "row">
                    <div className="col-8">
                        <BlogPostList />
                    </div>
                    <div className = "col-4">

                    </div>

                </div>

            </div>
            
        </div>
    );
}

export default App;