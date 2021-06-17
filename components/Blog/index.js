import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from '../ShowBlog'
import Layout from '../layout'



export class Blog extends Component {
 



  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
        
       
        
      },
      item: [],
      
      isloading: true,
      error: null
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        
        const avatar = data.data.feed.image;
        const date = data.data.items.pubDate;
        
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;
console.log(data.data);
        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,
              
            },
            item: posts,
            isloading: false
          }),
          () => {
           
          }
        );
      })
      .catch((e) => {
        
        console.log(e);
      });
  }
  render() {
    
    let post

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
  
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <div className="container">
        <div className="row">
          {/* {this.state.item.map((post, index) => (
          <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
        ))} */}

          {post}
        </div>

      </div>
    );
  }
}

  export default Blog;