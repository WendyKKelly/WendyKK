import axios from 'axios';
import React, { Component } from "react";
export class SingleBlog extends Component  {
   constructor(props) {
        super(props);
        this.state = {
          singlePost: {},
          titleid: props.location.pathname,
          query: {slug: props.title},
         
          error:null,
          isloading:true
        };
    }

mediumURL ='https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly';
componentDidMount() {
axios.get(this.mediumURL)

 
   .then((data) => {
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc.
        const posts = res.filter((item) => item.categories.length > 0);
        for (let i in posts) {
            const title = "/" + posts[i].title;
            if (title === this.state.titleid) {
              let post = posts[i];
     

         this.setState((p) => ({
            singlePost: post,
         
            isloading:false
          }));
        
      }
        }
    
  })
  .catch((e) => {
   
    console.log(e);
  });
}
render() {
    let post
    if(this.state.singlePost){
     post =( <>
       <h2>{this.state.singlePost.title}</h2>
       
  
      <div  dangerouslySetInnerHTML={{ __html:this.state.singlePost.content}}>
          </div>
      </>
     )
     }
   
    if(this.state.error){
   let   error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }

    return (
        <div >
       {post}
       </div>
    );
  }
}
  export default SingleBlog;



