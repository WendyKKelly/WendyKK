import { getPosts, getSinglePost } from '../../api/blog';
import Section from '../../pages/blog/blogInnerHTML';
import Head from 'next/head';



export default function SinglePost({ post }) {
  // Render post title and content in the page from props
  let _title = post.title + ' - Stories';
  return (
    <>
      
        <Head>
          <title>The Underbelly</title>
          <meta name="theme-color" content="#2c2e35" />
          <meta name="Description" content="Underbelly project" />
        </Head>

      

        

          <Section>
            <div className="imgs">
              <div className="open">
                <div className="title">{post.title}</div>
                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <div className="last">
                  <div className="date">
                    {new Intl.DateTimeFormat('default', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    }).format(new Date(post.pubDate))}
                  </div>
                  <div className="dash">—</div>
                 
                </div>
              </div>

              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </Section>
          <CourseIntro2 />
          <Footer />
        
     
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  return { props: { post: post } };
}
