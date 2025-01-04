import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const NewContact = ()=>{

        let[name , Setname]=useState("");
        let[emailid , Setemail] = useState("");
        let[mobile , Setmob]= useState("");
        let[address , Setaddress]= useState("");

    const save = ()=>{
        let url = "http://localhost:2222/contact";
        let details ={
            "fullname":name,
            "emailid":emailid,
            "mobileno":mobile,
            "myaddress":address
          }
        let postdata={
            headers : {'Content-Type':'application/json'},
            method:"post",
            body:JSON.stringify(details)
        } 

        if(name == "" || emailid == "" || mobile=="" || address==""){
            toast("Invalid Input ...");
        }else{

        fetch(url,postdata)
        .then(response=>response.json())
        .then(info=>{
            toast("Contact Save Successfully !");
            Setname("");
            Setemail("");
            Setmob("");
            Setaddress("");
        })
    }
}

    return(
        <div className="container mt-5">
               <ToastContainer />
            <div className="row">
                <div className="col-xl-4"></div>

                <div className="col-xl-4 bg-light p-4 rounded">
                    <h1 className="text-primary text-center"> New Contact </h1>
                    <div>
                        <label> Full Name : </label>
                        <input type="text" className="form-control" onChange={obj=>Setname(obj.target.value)} value={name}/>
                    </div>

                    <div>
                        <label> Mobile : </label>
                        <input type="text" className="form-control" onChange={obj=>Setmob(obj.target.value)} value={mobile}/>
                    </div>

                    <div>
                        <label> Email : </label>
                        <input type="text" className="form-control" onChange={obj=>Setemail(obj.target.value)} value={emailid}/>
                    </div>

                    <div>
                        <label> Address : </label>
                        <textarea type="text" className="form-control" onChange={obj=>Setaddress(obj.target.value)} value={address}/>
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
export default NewContact;