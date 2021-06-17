


import fetch from 'isomorphic-unfetch'
import { data } from 'remark';




    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly')
    .then(resp => resp.json()).then(data => this.setState({data}))
  
    export async function getPosts() {
        return await data.posts
          .browse({
            include: 'tags,authors',
            limit: 'all',
          })
          .catch((err) => {
            console.error(err);
          });
      }
      
      export async function getSinglePost(postSlug) {
        return await data.posts
          .read({
            slug: postSlug,
          })
          .catch((err) => {
            console.error(err);
          });
      }
  
  
 