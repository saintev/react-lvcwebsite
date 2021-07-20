import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header/>
          <Footer/>
        </header>
        <div className='content'>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/contactus" component={ContactForm}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
