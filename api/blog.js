
import axios from 'axios';
export default function Posts() {
mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly";


    axios.get(this.mediumURL)
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
      )
    });
      

  }


      
    
      
    
 
   