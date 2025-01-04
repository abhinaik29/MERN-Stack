import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Login = () =>{
    let [userinfo, setInfo] = useState({"myemail":"", "mypassword":""});
    
        const pickVendor = (obj) => {
            userinfo[obj.target.name] = obj.target.value;
            setInfo(userinfo);
        }
    
        const loginCheck = (frmobj) => {
            frmobj.preventDefault();
            let url = "http://localhost:2222/vendor/login";
            let postdata = {
                headers: { 'content-Type': 'application/json' },
                method: "post",
                body: JSON.stringify(userinfo)
            }
            if(userinfo.myemail =="" || userinfo.mypassword==""){
               toast("Invalid Input...! ")
            }else{
                fetch(url, postdata)
                .then(response => response.json())
                .then(info => {
                    if(info==null){
                        toast("Login Fail...")
                    }else{
                        localStorage.setItem("id", info._id);
                        localStorage.setItem("name", info.vname);
                        window.location.href="#/"; // redirect to main url
                        window.location.reload(); // reload the page
                    }
                })
            } 
        }
    return(
        <div className="container mt-4 " >
            <ToastContainer/>
        <div className="row">
            <div className="col-xl-4"></div>
            <div className="col-xl-4 mt-5">
                <p className="text-center text-danger mb-4"> </p>
                <form onSubmit={loginCheck}>
                    <div className="card shadow-lg">
                        <div className="card-header fs-5 fw-bold">
                          <i className="fa fa-lock "></i>  Login <Link to="/signup" className="float-end fs-6 fst-italic"> New User ?</Link>
                        </div>
                        <div className="card-body">

                            <div className="row mb-3">
                                <div className="col-xl-12">
                                    <label className="fw-bold"> Email ID </label>
                                    <input type="email" className="form-control" 
                                    onChange={pickVendor} name="myemail"/>
                                </div>
                                <div className="col-xl-12 mt-3">
                                    <label className="fw-bold"> Password </label>
                                    <input type="password" className="form-control"
                                    onChange={pickVendor} name="mypassword"/>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary"> Submit </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-xl-4"></div>
        </div>
    </div>
    )
}

export default Login;