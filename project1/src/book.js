import { useState, useEffect } from "react";

const Mybook = () =>{
    let [book , Setbook]= useState([]);

    const Getbook = () =>{
        fetch("http://localhost:3333/booklist")
        .then(response=>response.json())
        .then(bookArray=>{
            Setbook(bookArray);
        })
    }

    useEffect(()=>{
        Getbook();
    },[])

    return(
        <div>
            <h1>Book List</h1>
        {
        book.map((booklist,index)=>{
            return(
                <p key={index} className="four">{booklist}</p>
            )
        })
        }
        </div>
    )
}

export default Mybook;