import Loginform from './Components/Loginform'
import Header from './Components/Header'
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">

    <Header />
   
<Route exact path="/" component={Home}></Route>
<Route path="/SignIn" component={Loginform}></Route>
<Route path="/SignUp" component={SignUp}></Route>
 
 <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
