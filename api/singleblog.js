


const api = fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly')

export async function getPosts() {
    api.then((data) => {
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc.
        console.log(res);
        const posts = res.filter(item => item.categories.length > 0);
        console.log(posts)
        return   posts
         
      .browse({
        include: 'categories',
        limit: 'all',
      })
      .catch((err) => {
        console.error(err);
      })
    });
      
  }
  
  export async function getSinglePost(postSlug) {
    api.then((data) => {
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc.
       
        const posts = res.filter(item => item.categories.length > 0);
    
        return   posts
      .read({
        slug: postSlug,
      })
      .catch((err) => {
        console.error(err);
      })
    });
  }

