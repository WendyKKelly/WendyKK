import React, { Component } from "react";
import Axios from "axios";
import Link from 'next/link'
import Image from 'next/image'





export class SingleBlog extends Component  {
 
  constructor(props) {
    super(props);
    this.state = {
      single: {},
      titleid: `./blog/[slug]`,
      avatar: "",
      profile: "",
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
        const date = data.data.items.pubDate;
        const profile = data.data.feed.link;
        const res = data.data.items; 
        const posts = res.filter((item) => item.categories.length > 0);
        for (let i in posts) {
          const title = "/" + posts[i].title;
          if (title === this.state.id) {
            let post = posts[i];
            
              this.setState((p) => ({
                single: slug,
                avatar: avatar,
                profile: profile,
                isloading:false
              }));
              console.log({post})
          }
        }
        
      })
      .catch((e) => {
       
        console.log(e);
      });
    
  }

 
  render() {
    let post
    if(this.state.id){
     post =( <>
       <h2>{this.state.id.title}</h2>
        <div >
          <a
            href={this.state.profile}
            
          >
            <img src={this.state.avatar} alt="profile" width="75" height="75" />
          </a>

          <a
            href={this.state.profile}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>{this.state.single.author}</p>
          </a>
          <p>{this.state.single.date}</p>
        </div>
  
      <div   dangerouslySetInnerHTML={{ __html:this.state.single.content}}>
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

