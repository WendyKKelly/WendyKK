





export default function SinglePost({ post }) {




  
   
    return (
<>
<div>{post.title}</div>

</>
    )
    }

    export async function getStaticPaths() {
        const posts =  getPosts();
        const paths = posts.map((post) => ({
          params: { slug: post.slug },
        }));
        return { paths, fallback: false };
      }
      
      // Pass the page slug over to the "getSinglePost" function
      // In turn passing it to the posts.read() to query the Ghost Content API
      
      export async function getStaticProps({ params }) {
        const post =  getSinglePost(params.slug);
        return { props: { post: post } };
      }
