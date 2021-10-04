// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import ContactUS from './components/ContactUS/ContactUS';
import NotFound from './components/NotFound/NotFound';
import Courses from './components/Courses/Courses';

// Routing For Different links
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/gallery">
            <Gallery></Gallery>
          </Route>
          <Route path="/services">
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/contactus">
            <ContactUS></ContactUS>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
