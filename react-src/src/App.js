import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Page from './pages/Page';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/:slug" component={Page} />
            </Switch>
          <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
