import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    let [userinfo, setInfo] = useState({});

    const pickVendor = (obj) => {
        userinfo[obj.target.name] = obj.target.value;
        setInfo(userinfo);
    }

    const save = (frmobj) => {
        frmobj.preventDefault();
        let url = "http://localhost:2222/vendor";
        let postdata = {
            headers: { 'content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify(userinfo)
        }
        if(userinfo ==""){
           toast("Invalid Input...! ")
        }else{
            fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                toast("Vendor Register Successfully...");
                frmobj.target.reset();
                setInfo( {} )
            })
        } 
    }
    return (
        <div className="container mt-4 " >
            <ToastContainer/>
            <div className="row">
                <div className="col-xl-3"></div>
                <div className="col-xl-6 mt-5">
                    <form onSubmit={save}>
                        <div className="card shadow-lg">
                            <div className="card-header fw-bold fs-5">
                                <i className="fa fa-user-plus"></i> Create Account <Link to="/login" className="float-end fst-italic fs-6"> Already Have Account ?</Link>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3"></div>
                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> Vendor Name </label>
                                        <input type="text" className="form-control" name="name" onChange={pickVendor} />
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> Mobile No </label>
                                        <input type="number" className="form-control" name="mobileno" onChange={pickVendor} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> Email ID </label>
                                        <input type="email" className="form-control" name="emailid" onChange={pickVendor} />
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> Password </label>
                                        <input type="password" className="form-control" name="pass" onChange={pickVendor} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> State Name </label>
                                        <input type="text" className="form-control" name="state" onChange={pickVendor} />
                                    </div>
                                    <div className="col-xl-6">
                                        <label className="fw-bold"> City Name </label>
                                        <input type="text" className="form-control" name="city" onChange={pickVendor} />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-xl-12">
                                        <label className="fw-bold"> Full Address </label>
                                        <textarea className="form-control" name="address" onChange={pickVendor}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-primary me-2"> Submit </button>
                                <button type="reset" className="btn btn-warning"> Clear </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-3"></div>
            </div>
        </div>
    )
}

export default Signup;