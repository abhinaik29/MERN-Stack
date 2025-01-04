import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import AllContact from "./contactlist";
import NewContact from './newcontact';
import Editmycontact from './editcontact';
import AllCustomer from './customerlist';
import NewCustomer from './newcustomer';
import EditmyCustomer from './editcustomer';
import Mypic from './mypic';

function App() {
  return (
    <HashRouter>
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">MERN Stack</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/">Contact List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/newcontact" >New Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/customerlist" >Customer List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/newcustomer" >New Customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/photo" >Photo Upload</Link>
              </li>

              <li className="nav-item me-4">
                  <Link className="nav-link active" onClick={logout}>
                     Welcome - {localStorage.getItem("name")} - Logout 
                  </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
     <Routes>
        <Route exact path='/' element = {<AllContact/>} />
        <Route exact path='/newcontact' element = {<NewContact/>} />
        <Route exact path='/editcontact/:myid' element = {<Editmycontact/>} />
        <Route exact path='/customerlist' element = {<AllCustomer/>}/>
        <Route exact path='/newcustomer' element = {<NewCustomer/>}/>
        <Route exact path='/editcustomer/:myid' element = {<EditmyCustomer/>} />
        <Route exact path='/photo' element = {<Mypic/>}/>
      </Routes>

    </HashRouter>
  );
}

export default App;


const logout = () =>{
    localStorage.clear();
    window.location.href="#/login";
    window.location.reload();
}