import {HashRouter,Routes,Route,Link} from 'react-router-dom';

import Login from "./login";
import Signup from "./signup";

const AccountModule = () =>{
    return(
        <HashRouter>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-xl-4'>
                        <h1>MERN Stack</h1>
                    </div>
                    <div className='col-xl-8 text-end'>
                        <Link to="/login" className='btn btn-primary me-2'> Login</Link>
                        <Link to="/signup" className='btn btn-success ms-2'>Create Account</Link>
                    </div>
                </div>
            </div>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route path='*' exact={true} element={<Login/>} />
            </Routes>
        </HashRouter>
    )
}

export default AccountModule;