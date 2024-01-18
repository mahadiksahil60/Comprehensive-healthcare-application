// src/components/PredictForm.js


import "./Navbar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import "./Masthead.css";
import "./mainbg.css";
import "./footer.css";
import "./form.css";
import HeartDisease from "./HeartDisease";
import PredictObesity from "./PredictObesity";
import Home from "./Home";
import LungDisease from "./LungDisease";
import skindisease from "./skindisease";




function App() {
  return (
    <div className="mainbg">
      <AppRouter />
    </div>

    // <HeartDisease/>
  );
}

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lungs" component={LungDisease}/>
        <Route path="/heart-disease" component={HeartDisease} />
   
        <Route path='/obesity' component={PredictObesity}/>
        <Route path='/skindisease' component={skindisease}/>
        {/* Add more routes for other components/pages if needed */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}




export default App;
