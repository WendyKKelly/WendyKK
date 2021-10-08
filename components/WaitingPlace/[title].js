import React, { Component } from "react";
import Axios from "axios";
import Image from 'next/image'
import Link from 'next/link'


export class SingleBlog extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      singlePost: {},
      titleid: '/blog/[title]',
      avatar: "",
      profileLink: "",
      error:null,
      isloading:true
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly";
  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
   
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; 
        const posts = res.filter((item) => item.categories.length > 0);
        for (let i in posts) {
          const title = "/" + posts[i].title;
          if (title === this.state.titleid) {
            let post = posts[i];
            
              this.setState((p) => ({
                singlePost: post,
                avatar: avatar,
                profileLink: profileLink,
                isloading:false
              }));
            
          }
        }
        console.log(profileLink);
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
        <div className="avatar">
          <Link href={`${encodeURIComponent(this.state.profileLink)}`} >
          <a >
            Image
          </a>
          </Link>
          <Link href={`${encodeURIComponent(this.state.profileLink)}`} >
          <a>
            <p>{this.state.singlePost.author}</p>
          </a></Link>
          <p>{this.state.singlePost.pubDate}</p>
        </div>
  
      <div className="content"  dangerouslySetInnerHTML={{ __html:this.state.singlePost.content}}>
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
      <div className="container ">
       {post}
      </div>
    );
  }
}

export default SingleBlog;
