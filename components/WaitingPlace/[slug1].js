
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
    const data = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wendykianakelly")
    const posts = data.items; 
console.log(posts);
const paths = posts.map((post) => ({
  params: { slug: post.slug },
}));
return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const postData = 