import Image from 'next/image'
import Link from 'next/link'
import { post } from 'superagent';
import {getPosts, getSinglePost} from '../../../api/singleblog';

    const SingleBlog =() => {
      return ( <div ><div >
      <Image src = {post.thumbnail} /><h1 >{post.title}</h1><p >Posted on: {post.pubDate}</p><Link href = {post.link}><a  className = "Link"> Read the Full Blog Here!</a></Link>
      <p>{post.content}</p></div> 
      </div> )}
      
      export async function getStaticPaths() {
        const posts = await getPosts();
        const paths = posts.map((post) => ({
          params: { slug: post.slug },
        }));
        return { paths, fallback: false };
      }
      
      // Pass the page slug over to the "getSinglePost" function
      // In turn passing it to the posts.read() to query the Ghost Content API
      
      export async function getStaticProps({ params }) {
        const post = await getSinglePost(params.slug);
        return { props: { post: post } };
      }
      
      
export default SingleBlog;