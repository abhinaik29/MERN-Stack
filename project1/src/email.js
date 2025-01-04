import { useState } from "react";

const Myemail = () =>{

    let[message , Setmessage]= useState("");

    let[email , Setemail] = useState("");
    let[sub , Setsub] = useState("");
    let[msg ,setMsg] = useState("");

    const send = ()=>{
        let url = "http://localhost:3333/sendemail";
        let myemail = {"email":email , "sub":sub , "msg":msg} 
        let postdata = {
            headers : {'Content-Type': 'application/json'},
            method : "post",
            body : JSON.stringify(myemail)
        }
        fetch(url,postdata)
        .then(response=>response.text())
        .then(info=>{
            alert(info);
            Setemail("");
            Setsub("");
            setMsg("");
        })
    }

    return(
        <div>
            <h3>New Message</h3>
            <p>To Email : <input type="email" size="49" onChange={obj=>Setemail(obj.target.value)} value={email}/></p>
            <p>Subject : <input type="text" size="50" onChange={obj=>Setsub(obj.target.value)} value={sub}/></p>
            <p>Message : </p>
            <p><textarea rows="10" cols="56" onChange={obj=>setMsg(obj.target.value)} value={msg}></textarea></p>
            <button onClick={send}>Send Mail</button>
        </div>
    )
}

export default Myemail;