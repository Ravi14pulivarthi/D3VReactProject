import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Registerform from './components/Registerform';
import Siginform from './components/Loginform';
import Loginform from './components/Loginform';
import Productlist from './components/Productlist';
import Navbar from './components/Navbar';
import Productdetails from './components/Productdetails';
import Fristpage from './components/Fristpage';
import Nav2 from './components/Nav2';
import Visetpage from './components/Visetpage';



function App() {
  return (
    <div className="App">
     {/* <Registerform/> */}
      {/* <Loginform/> */}

      {/* <Productlist/> */}

      <Router>
  <Routes>
     
  <Route path='/' element={<Fristpage/>} />
  <Route path='Nav2' element={<Nav2/>} />
  <Route path='Visetpage' element={<Visetpage/>} />
   <Route path='Registerform' element={<Registerform/>} />
   <Route path='Loginform' element={ <Loginform/>} />
   <Route path='Productlist' element={<Productlist/>} />
    <Route path='Productdetails' element={<Productdetails/>} />
  </Routes>
</Router> 

 
    </div>
  );
}

export default App;
