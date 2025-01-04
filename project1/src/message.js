import { useState ,useEffect, use } from "react";

const MyMessage = () =>{
    let[newmessage , setMessage]= useState("");
    let[msg , setMsg] = useState("");

    const saveMessage = () =>{
        let url = "http://localhost:3333/send";
        let postdata = {
            headers : {'Content-Type': 'application/json'},
            method : "post",
            body : JSON.stringify({mymessage : newmessage})
        }
        fetch(url,postdata)
        .then(response=>response.json())
        .then(info=>{
            setMsg(info.yourmsg);
            setMessage("");
            getMessage(); //reload the message list
        })
    }

    let[allmessage, updateMessage]= useState([]);
    const getMessage = ()=>{
        fetch("http://localhost:3333/messagelist")
        .then(response=>response.text())
        .then(messagedata=>{
            let msgArray = messagedata.split('##');
            msgArray.pop();
            updateMessage(msgArray.reverse());
        })
    }

    /*
        ****split is used to convert string to array****
        let str = "hi ## hello ## bangalore ## mumbai"
           let msgArray = messagedata.split('##'); // it return an array => "hi(0) hello(1) bangalore(2) mumbai(3)"
    */
       
    const deleteAll = () =>{
        fetch("http://localhost:3333/clearmessage")
        .then(response=>response.json())
        .then(messagedata=>{
           setMsg( messagedata.yourmsg );  //display message in page
           getMessage(); //reload the list after delete
        })
    }

    useEffect(()=>{
        getMessage()
    },[]);

    return(
        <div>
            <h1> Get & Post Example</h1>
            <p className="red">{msg}</p>
            <p>
                Enter Your Message
            </p>
            <p>
                <textarea rows="10" cols="50" 
                    onChange={obj=>setMessage(obj.target.value)} 
                    value={newmessage}></textarea>
            </p>
            <button onClick={saveMessage}>Send Message</button>
            <button onClick={deleteAll}> Clear All </button>

            <h2> Available Message </h2>
            {
                allmessage.map((msgs,index)=>{
                    return(
                    <p key={index}>{index}##{msgs}</p>
                    )
                })
            }
        </div>
    )
}

export default MyMessage;