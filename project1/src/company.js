import { useState , useEffect } from "react";

const Mycompany = () =>{
     
    let[company,Setcompany]= useState([]);

    const Getcompany = () =>{
        fetch("http://localhost:3333/companylist")
        .then(response=>response.json())
        .then(cmparray=>{
            Setcompany(cmparray);
        })
    }

    useEffect(()=>{
        Getcompany();
    },[])

    return(
        <div>
            <h1>Company List</h1>
        {
        company.map((comapnylist,index)=>{
            return(
            <p key={index} className="four">{comapnylist}</p>
            )
        })
        }
        </div>
    )
}

export default Mycompany;