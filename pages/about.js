import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import About from '../components/about'
import Head from 'next/head'
import Subscribe from '../components/Subscribe';



export default function Index() {
  
  return (
    <>
      <Layout>
        <Head>
          <title>Wendy Kiana Kelly</title>
        </Head>
        <Container>
    
          <About />
          
          <Subscribe />
        </Container>
      </Layout>
    </>
  )
}


  

