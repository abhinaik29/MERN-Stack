import {HashRouter ,Routes , Route , Link} from 'react-router-dom'
import Mybook from "./book";
import Mycity from "./city";
import Mycompany from "./company";
import Abc from './message';
import Myemail from './email';

function App() {
 return(
    <HashRouter>
        <header>
            <Link to="/book" className='topnav'> Book </Link>
            <Link to="/city" className='topnav'> City </Link>
            <Link to="/company" className='topnav'> Company </Link>
            <Link to="/msg" className='topnav'>Message</Link>
            <Link to="/email" className='topnav'>Compose Email</Link>
        </header>   
        <Routes>
            <Route exact path='/' element={<Mycity/>}/>
            <Route exact path='/book' element={<Mybook/>}/>
            <Route exact path='/city' element={<Mycity/>}/>
            <Route exact path='/company' element={<Mycompany/>}/>
            <Route exact path='/msg' element={<Abc/>}/>
            <Route exact path='/email' element={<Myemail/>}/>
        </Routes>

    </HashRouter>
   
 );
}

export default App;
