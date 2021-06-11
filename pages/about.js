import Container from '../components/container';
import Header from '../components/header';
import Layout from '../components/layout';
import About from '../components/About';
import Head from 'next/head';
import Subscribe from '../components/Subscribe';



export default function Index() {
  
  return (
    <>
      <Layout>
        <Head>
          <title>Wendy Kiana Kelly</title>
        </Head>
        <Container>
    <Header />
          <About />
          
          <Subscribe />
        </Container>
      </Layout>
    </>
  )
}


  

