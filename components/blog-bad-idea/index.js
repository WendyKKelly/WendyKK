import Blog from '../../components/Blog'
import SingleBlog from "../../components/SingleBlog";
import Layout from '../../components/layout';
import {  Switch, Route, HashRouter } from "react-router-dom";

export default function App() {
  
    return (
<>
<HashRouter >
        <Layout >
        <Switch>
          
          <Route path="/:slug" exact component={SingleBlog}></Route>
          <Route path="/" exact component={Blog}></Route>
        </Switch>
      </Layout>
      </HashRouter>
</>

    )
}

