import {useState , useEffect} from 'react';

const Mycity = () =>{
    let [city, Setcity] = useState([]);  

    const Getcity = () =>{
    fetch("http://localhost:3333/citylist")
    .then(response=>response.json())
    .then(cityArray=>{
      Setcity(cityArray);
    })
    }

useEffect(()=>{
    Getcity();
},[])

return(
    <div>
        <h1> City List</h1>
    {
    city.map((citylist,index)=>{
        return(
            <p key={index} className='four'>{citylist}</p>
        )
    })
    }
    </div>
)
}

export default Mycity;