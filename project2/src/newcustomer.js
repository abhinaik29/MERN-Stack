import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const NewCustomer = () => {

    let [name, setName] = useState("");
    let [mobile, setMobile] = useState("");
    let [address, setAddress] = useState("");

    const save = () => {
        let url = "http://localhost:2222/contact/savecustomer";
        let details = {
            "fullname": name,
            "mobileno": mobile,
            "myaddress": address
        }
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify(details)
        }

        if(name == "" || mobile == "" || address == ""){
            toast(" Invalid Input...");
        }else{
        fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                toast("Customer Save Successfully !");
                setName("");
                setMobile("");
                setAddress("");
            })
        }
    }

    return (
        <div className="container mt-3">
            <ToastContainer />
            <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-xl-4 bg-light p-4 rounded">
                    <h1 className="text-primary text-center"> New Customer </h1>
                    <div>
                        <label> Full Name : </label>
                        <input type="text" className="form-control" onChange={obj => setName(obj.target.value)} value={name} />
                    </div>

                    <div>
                        <label> Mobile : </label>
                        <input type="text" className="form-control" onChange={obj => setMobile(obj.target.value)} value={mobile} />
                    </div>

                    <div>
                        <label> Address : </label>
                        <textarea type="text" className="form-control" onChange={obj => setAddress(obj.target.value)} value={address} />
                    </div>

                    <div className="text-center mt-3">
                        <button className="btn btn-primary" onClick={save}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="col-xl-4"></div>
            </div>
        </div>
    )
}
export default NewCustomer;