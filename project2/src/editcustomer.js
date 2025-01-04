import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'; 
import { useParams } from "react-router-dom";

const EditmyCustomer = () => {
    const {myid} = useParams();

    let [name, setName] = useState("");
    let [mobile, setMobile] = useState("");
    let [address, setAddress] = useState("");

    const getdetails = () =>{
        let url = "http://localhost:2222/contact/details"+myid;
        fetch(url)
        .then(response => response.json())
        .then(info => {
            setName(info.fullname);
            setMobile(info.mobile);
            setAddress(info.address);
        })
    }

    useEffect(()=>{
        getdetails();
    }, []);

    const save = () => {
        let url = "http://localhost:2222/contact/putcustomer";
        let details = {
            "fullname": name,
            "mobileno": mobile,
            "myaddress": address,
            "id":myid
        }
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: "put",
            body: JSON.stringify(details)
        }

        if(name == "" || mobile == "" || address == ""){
            toast(" Invalid Input...");
        }else{
        fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                toast(info.message);
                window.location.href="/#/";
            })
        }
    }

    const save2 = () => {
        let url = "http://localhost:2222/contact/patchcustomer";
        let details = {
            "fullname": name,
            "mobileno": mobile,
            "myaddress": address,
            "id":myid
        }
        let postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: "PATCH",
            body: JSON.stringify(details)
        }

        if(name == "" || mobile == "" || address == ""){
            toast(" Invalid Input...");
        }else{
        fetch(url, postdata)
            .then(response => response.json())
            .then(info => {
                toast(info.message);
                window.location.href="/#/";
            })
        }
    }

    return (
        <div className="container mt-4">
            <ToastContainer />
            <div className="row">
                <div className="col-xl-4"> {myid} </div>
                <div className="col-xl-4 bg-light p-4 rounded">
                    <h1 className="text-primary text-center"> Edit Customer </h1>
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
                        <button className="btn btn-warning" onClick={save}>
                            Update - Put
                        </button>
                        <button className="btn btn-danger m-2" onClick={save2}>
                            Update - Patch
                        </button>
                    </div>
                </div>
                <div className="col-xl-4"></div>
            </div>
        </div>
    )
}
export default EditmyCustomer;